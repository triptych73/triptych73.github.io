class Viewer3D {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.labelRenderer = null;
        this.controls = null;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.gridSize = 15;
        this.voxelSize = 1.0;
        this.voxels = []; // Array of mesh objects
        this.activeSectionId = null;
        this.editMode = false;
        this.interactionMode = 'voxel'; // 'voxel' or 'label'

        this.currentZLevel = 0; // For slider slicing

        // Groups
        this.modelGroup = new THREE.Group();
        this.voxelGroup = new THREE.Group();
        this.labelGroup = new THREE.Group();
        this.rolloverMesh = null; // Ghost helper
        this.gridHelper = null;
        this.slicePlane = null;
    }

    init() {
        if (this.renderer) return; // Already initialized

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xF0F0EB); // Matches 'paper' color
        // RELAXED FOG: Starts further away so zoomed-out view isn't murky
        this.scene.fog = new THREE.Fog(0xF0F0EB, 40, 100);

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.set(25, 20, 25);
        this.camera.lookAt(0, 5, 0);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.container.appendChild(this.renderer.domElement);

        // Label Renderer (CSS2D)
        this.labelRenderer = new THREE.CSS2DRenderer();
        this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.style.pointerEvents = 'none'; // Let clicks pass through to WebGL
        this.labelRenderer.domElement.style.zIndex = '10'; // Ensure it's on top
        this.container.appendChild(this.labelRenderer.domElement);

        // Lights
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
        hemiLight.position.set(0, 20, 0);
        this.scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(10, 20, 10);
        dirLight.castShadow = true;
        this.scene.add(dirLight);

        // Build World
        this.buildBuildingModel();
        this.scene.add(this.modelGroup);
        this.scene.add(this.voxelGroup);
        this.scene.add(this.labelGroup);

        // Slicing Plane Visual
        const planeGeo = new THREE.PlaneGeometry(100, 100);
        const planeMat = new THREE.MeshBasicMaterial({ color: 0x9A8C74, transparent: true, opacity: 0.1, side: THREE.DoubleSide });
        this.slicePlane = new THREE.Mesh(planeGeo, planeMat);
        this.slicePlane.rotation.x = -Math.PI / 2;
        this.slicePlane.visible = false;
        this.scene.add(this.slicePlane);

        // Rollover Helper (Ghost Voxel)
        // Scale 1 -> Box 0.9
        const rollGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const rollMat = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.2, transparent: true });
        this.rolloverMesh = new THREE.Mesh(rollGeo, rollMat);
        // Add wireframe to it
        const rollEdges = new THREE.EdgesGeometry(rollGeo);
        const rollLine = new THREE.LineSegments(rollEdges, new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 0.5, transparent: true }));
        this.rolloverMesh.add(rollLine);
        this.rolloverMesh.visible = false;
        this.scene.add(this.rolloverMesh);

        // Interaction
        // Use Pointer Events for better compatibility
        this.renderer.domElement.addEventListener('pointermove', this.onMouseMove.bind(this));

        // Prevent Context Menu on Canvas (Right Click)
        this.renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

        // Click vs Drag logic
        this.pointerDownPos = { x: 0, y: 0 };
        this.pointerDownTime = 0;

        this.renderer.domElement.addEventListener('pointerdown', (e) => {
            this.pointerDownPos = { x: e.clientX, y: e.clientY };
            this.pointerDownTime = Date.now();
        });

        this.renderer.domElement.addEventListener('pointerup', (e) => {
            // Only care about Right Click (Button 2)
            if (e.button !== 2) return;

            const dx = Math.abs(e.clientX - this.pointerDownPos.x);
            const dy = Math.abs(e.clientY - this.pointerDownPos.y);
            const dt = Date.now() - this.pointerDownTime;

            // Relaxed constraints: 10px move, 500ms time
            if (dx < 10 && dy < 10 && dt < 500) {
                // UPDATE MOUSE POS
                const rect = this.renderer.domElement.getBoundingClientRect();
                this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

                this.onRightClick(e);
            }
        });

        // Orbit Controls
        if (typeof THREE.OrbitControls !== 'undefined') {
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.maxPolarAngle = Math.PI / 2; // Don't go below ground
        } else {
            console.warn("THREE.OrbitControls not loaded.");
        }

        // Animation Loop
        this.animate();

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    buildBuildingModel() {
        console.log("Loading Building Model...");
        // Load GLB from Blender
        const loader = new THREE.GLTFLoader();
        loader.load('/planning-helper/assets/building.glb', (gltf) => {
            console.log("GLB Loaded successfully");
            const model = gltf.scene;

            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    // Preserve original GLB materials (Stone, Glass)
                    // No extra edge lines needed
                }
            });

            this.modelGroup.add(model);

            if (this.renderer) this.renderer.render(this.scene, this.camera);

        }, undefined, (error) => {
            console.error('An error happened loading the building:', error);
        });
    }

    loadZones(sectionId, zoneDataObj) {
        this.activeSectionId = sectionId;
        this.clearVoxels();
        this.clearLabels();

        let voxels = [];
        let labels = [];

        if (Array.isArray(zoneDataObj)) {
            voxels = zoneDataObj;
        } else if (zoneDataObj && typeof zoneDataObj === 'object') {
            voxels = zoneDataObj.voxels || [];
            labels = zoneDataObj.labels || [];
        }

        voxels.forEach(pos => {
            this.addVoxel(pos.x, pos.y, pos.z);
        });

        labels.forEach(lbl => {
            this.addLabel(lbl.text, new THREE.Vector3(lbl.x, lbl.y, lbl.z), lbl.id, lbl.offsetX, lbl.offsetY);
        });

        this.updateVoxelVisibilities();
    }

    clearVoxels() {
        while (this.voxelGroup.children.length > 0) {
            this.voxelGroup.remove(this.voxelGroup.children[0]);
        }
        this.voxels = [];
    }

    clearLabels() {
        while (this.labelGroup.children.length > 0) {
            const lbl = this.labelGroup.children[0];
            if (lbl.element && lbl.element.parentNode) {
                lbl.element.parentNode.removeChild(lbl.element);
            }
            this.labelGroup.remove(lbl);
        }
    }

    addVoxel(x, y, z) {
        // SCALE 1 = 1 meter per voxel (6 voxels per 6.2m tower)
        const SCALE = 1;

        // Offset -7.5 to center on 15-width grid
        const OFFSET_X = -7.5;
        const OFFSET_Z = -7.5;

        const geo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const mat = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.4
        });
        const mesh = new THREE.Mesh(geo, mat);

        mesh.position.set(
            x * SCALE + OFFSET_X,
            y * SCALE + SCALE / 2,
            z * SCALE + OFFSET_Z
        );

        mesh.userData = { gx: x, gy: y, gz: z };

        const edges = new THREE.EdgesGeometry(geo);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffcccc }));
        mesh.add(line);

        this.voxelGroup.add(mesh);
        this.voxels.push(mesh);

        this.updateVisibilityForVoxel(mesh);
    }

    addLabel(text, position, id = null, offsetX = 0, offsetY = -50) {
        if (!text) return;

        // Container (Anchor)
        const container = document.createElement('div');
        container.className = 'label-container';
        container.style.position = 'absolute'; // CSS2DObject requirements
        container.style.pointerEvents = 'none'; // Container itself passes clicks
        container.style.userSelect = 'none';

        // SVG Leader Line Area (Canvas)
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.overflow = 'visible';
        svg.style.zIndex = '1';
        svg.style.pointerEvents = 'none';

        // The Line itself
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", "0");
        line.setAttribute("y1", "0");
        line.setAttribute("x2", offsetX.toString());
        line.setAttribute("y2", offsetY.toString());
        line.setAttribute("stroke", "#9A8C74");
        line.setAttribute("stroke-width", "1");
        svg.appendChild(line);

        // The Dot (Anchor Point)
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.left = '-3px';
        dot.style.top = '-3px';
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.backgroundColor = '#9A8C74';
        dot.style.borderRadius = '50%';
        dot.style.zIndex = '1';

        const content = document.createElement('div');
        content.textContent = text;
        content.style.position = 'absolute';
        content.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`; // Center on the offset point
        content.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        content.style.border = '1px solid #9A8C74';
        content.style.color = '#0F1115';
        content.style.padding = '4px 8px';
        content.style.fontFamily = 'Cinzel, serif';
        content.style.fontSize = '11px';
        content.style.fontWeight = '600';
        content.style.borderRadius = '2px';
        content.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';

        // Initial State based on Edit Mode
        if (this.editMode) {
            content.style.pointerEvents = 'auto'; // Catch clicks for drag
            content.style.cursor = 'grab';
        } else {
            content.style.pointerEvents = 'none';
            content.style.cursor = 'default';
        }

        content.style.whiteSpace = 'nowrap';
        content.style.zIndex = '2';

        container.appendChild(svg);
        container.appendChild(dot);
        container.appendChild(content);

        const label = new THREE.CSS2DObject(container);
        label.position.copy(position);

        // State
        const userData = {
            id: id || 'lbl_' + Date.now(),
            text: text,
            offsetX: offsetX,
            offsetY: offsetY,
            isOccluded: false
        };
        label.userData = userData;

        this.labelGroup.add(label);

        // --- DRAG LOGIC ---
        let isDragging = false;
        let startX = 0, startY = 0;
        let initialOffX = 0, initialOffY = 0;

        content.addEventListener('pointerdown', (e) => {
            if (!this.editMode) return;
            e.stopPropagation(); // Don't trigger map orbit
            e.preventDefault(); // Prevent text selection

            // SELECT LABEL
            this.selectLabel(userData.id);

            isDragging = true;
            content.style.cursor = 'grabbing';
            if (this.controls) this.controls.enabled = false;

            startX = e.clientX;
            startY = e.clientY;
            initialOffX = label.userData.offsetX;
            initialOffY = label.userData.offsetY;

            // Global move listener
            window.addEventListener('pointermove', onDragMove);
            window.addEventListener('pointerup', onDragEnd);
        });

        const onDragMove = (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            const newOffX = initialOffX + dx;
            const newOffY = initialOffY + dy;

            // Update DOM
            content.style.transform = `translate(-50%, -50%) translate(${newOffX}px, ${newOffY}px)`;
            line.setAttribute("x2", newOffX.toString());
            line.setAttribute("y2", newOffY.toString());

            // Update Data
            label.userData.offsetX = newOffX;
            label.userData.offsetY = newOffY;
        };

        const onDragEnd = () => {
            isDragging = false;
            content.style.cursor = 'grab';
            if (this.controls) this.controls.enabled = true;
            window.removeEventListener('pointermove', onDragMove);
            window.removeEventListener('pointerup', onDragEnd);

            // Dispatch update to persist new offsets
            const event = new CustomEvent('labelsUpdated', { detail: { labels: this.exportLabels() } });
            window.dispatchEvent(event);
        };

        // --- END DRAG LOGIC ---

        const event = new CustomEvent('labelsUpdated', { detail: { labels: this.exportLabels() } });
        window.dispatchEvent(event);

        return label;
    }

    selectLabel(id) {
        // Deselect others
        this.selectedLabelId = id;
        this.labelGroup.children.forEach(l => {
            const content = l.element.querySelector('div:last-child'); // The content box
            if (l.userData.id === id) {
                content.style.borderColor = '#3366ff'; // Blue selection
                content.style.borderWidth = '2px';
            } else {
                content.style.borderColor = '#9A8C74';
                content.style.borderWidth = '1px';
            }
        });

        // Dispatch event for UI (e.g. to update slider value to match label Z?)
        // Optionally update UI slider to match this label's height?
        const label = this.labelGroup.children.find(l => l.userData.id === id);
        if (label) {
            // Approx grid level
            const level = Math.round((label.position.y - 0.5) / 1.0); // Assuming scale 1
            // Dispatch event to app.js to update slider UI if needed?
            // For now, let's just let the user move the slider to *change* it.
        }
    }

    moveSelectedLabelZ(level) {
        if (!this.selectedLabelId) return;

        const label = this.labelGroup.children.find(l => l.userData.id === this.selectedLabelId);
        if (label) {
            const SCALE = 1;
            // Snap to grid Z (y in 3D)
            label.position.y = level * SCALE + SCALE / 2;

            // Notify change
            const event = new CustomEvent('labelsUpdated', { detail: { labels: this.exportLabels() } });
            window.dispatchEvent(event);
        }
    }

    removeLabel(id) {
        const label = this.labelGroup.children.find(c => c.userData.id === id);
        if (label) {
            if (label.element && label.element.parentNode) {
                label.element.parentNode.removeChild(label.element);
            }
            this.labelGroup.remove(label);

            if (this.selectedLabelId === id) this.selectedLabelId = null;

            const event = new CustomEvent('labelsUpdated', { detail: { labels: this.exportLabels() } });
            window.dispatchEvent(event);
        }
    }

    checkOcclusion() {
        if (!this.modelGroup || !this.camera) return;
        const raycaster = new THREE.Raycaster();

        this.labelGroup.children.forEach(label => {
            if (!label.element) return;
            const content = label.element.querySelector('div:last-child');
            if (!content) return;

            // Vector from camera to label ANCHOR (Not text)
            // Ideally check visible center of text, but anchor is safer to avoid self-occlusion by leader line logic
            const labelPos = label.position.clone();
            const camPos = this.camera.position.clone();
            const dir = labelPos.sub(camPos).normalize();
            const distToLabel = this.camera.position.distanceTo(label.position);

            raycaster.set(this.camera.position, dir);

            const intersects = raycaster.intersectObjects(this.modelGroup.children, true);
            let isOccluded = false;

            // Find first VALID blocker (ignore transparent 'ghost' meshes)
            for (let i = 0; i < intersects.length; i++) {
                const hit = intersects[i];
                // Optimization: Stop checking if we went past the label
                if (hit.distance > distToLabel) break;

                // Check opacity. If it's transparent (< 0.9), look right through it.
                // We only want solid objects to hide labels.
                const mat = hit.object.material;
                const opacity = mat ? mat.opacity : 1.0;

                if (opacity > 0.9) {
                    // It's a solid blocker closer than the label
                    if (hit.distance < distToLabel - 0.2) { // Reduced buffer for precision
                        isOccluded = true;
                        break;
                    }
                }
            }

            // Force visible if selected
            if (this.selectedLabelId === label.userData.id) {
                isOccluded = false;
            }

            label.element.style.opacity = isOccluded ? '0.15' : '1.0';
            label.element.style.filter = isOccluded ? 'blur(1px) grayscale(100%)' : 'none';
        });
    }

    updateVisibilityForVoxel(v) {
        if (!v) return;
        const gy = v.userData.gy;
        if (gy > this.currentZLevel) {
            v.visible = false;
        } else {
            v.visible = true;
            if (gy < this.currentZLevel) {
                // Wireframe only
                v.material.visible = false;
                v.children.forEach(c => c.visible = true);
            } else {
                // Current Level - Solid
                v.material.visible = true;
                v.material.opacity = 0.4;
            }
        }
    }

    removeVoxel(x, y, z) {
        const index = this.voxels.findIndex(v => v.userData.gx === x && v.userData.gy === y && v.userData.gz === z);
        if (index > -1) {
            const mesh = this.voxels[index];
            this.voxelGroup.remove(mesh);
            this.voxels.splice(index, 1);
        }
    }

    setSliceLevel(level) {
        this.currentZLevel = level;

        const SCALE = 1;

        if (this.editMode) {
            this.slicePlane.visible = true;
            this.slicePlane.position.y = level * SCALE + 0.1;
        } else {
            this.slicePlane.visible = false;
        }

        this.updateVoxelVisibilities();
    }

    updateVoxelVisibilities() {
        this.voxels.forEach(v => this.updateVisibilityForVoxel(v));
    }

    toggleEditMode(enabled) {
        this.editMode = enabled;
        // Only show plane if we are actually in edit mode
        if (this.slicePlane) this.slicePlane.visible = enabled;
        if (this.rolloverMesh) this.rolloverMesh.visible = enabled;

        this.modelGroup.children.forEach(c => {
            if (c.material) c.material.opacity = enabled ? 0.3 : 0.8;
        });

        // Update Label Interactivity
        this.labelGroup.children.forEach(l => {
            const content = l.element.querySelector('div:last-child');
            if (content) {
                if (enabled) {
                    content.style.pointerEvents = 'auto';
                    content.style.cursor = 'grab';
                    // Re-apply selection border if it was selected
                    content.style.border = (this.selectedLabelId === l.userData.id) ? '2px solid #3366ff' : '1px solid #9A8C74';
                } else {
                    content.style.pointerEvents = 'none';
                    content.style.cursor = 'default';
                    // Hide selection border
                    content.style.border = '1px solid #9A8C74';
                    content.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Reset bg if needed
                }
            }
        });

        if (this.controls) {
            this.controls.autoRotate = !enabled; // Stop rotating when editing
        }

        if (!enabled) {
            this.setInteractionMode('voxel');
            // Clear selection when exiting edit mode
            this.selectedLabelId = null;
        }

        this.updateVoxelVisibilities();
    }

    setInteractionMode(mode) {
        this.interactionMode = mode;
        // Only show plane if we are actually in edit mode
        if (this.editMode) {
            this.slicePlane.visible = true;
        } else {
            this.slicePlane.visible = false;
        }

        if (this.rolloverMesh) {
            this.rolloverMesh.visible = this.editMode;
            // Color Logic: Red for Voxel, Blue for Label
            const material = this.rolloverMesh.material;
            const lineMat = this.rolloverMesh.children[0].material;

            if (mode === 'label') {
                material.color.setHex(0x3366ff); // Blue
                lineMat.color.setHex(0x3366ff);
            } else {
                material.color.setHex(0xff0000); // Red
                lineMat.color.setHex(0xff0000);
            }
        }
    }

    // Interaction
    onMouseMove(event) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Update Rollover (Grid Snapping)
        // Works for BOTH 'voxel' and 'label' now
        if (this.editMode && this.rolloverMesh) {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersects = this.raycaster.intersectObject(this.slicePlane);

            if (intersects.length > 0) {
                const p = intersects[0].point;
                const SCALE = 1;
                const OFFSET_X = -7.5;
                const OFFSET_Z = -7.5;

                const gx = Math.round((p.x - OFFSET_X) / SCALE);
                const gz = Math.round((p.z - OFFSET_Z) / SCALE);
                const gy = this.currentZLevel;

                this.rolloverMesh.position.set(
                    gx * SCALE + OFFSET_X,
                    gy * SCALE + SCALE / 2,
                    gz * SCALE + OFFSET_Z
                );
                this.rolloverMesh.visible = true;
            } else {
                this.rolloverMesh.visible = false;
            }
        }
    }

    onRightClick(event) {
        if (!this.editMode || !this.activeSectionId) return;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        // Intersect SLICE PLAN to get raw point
        // But we actually want the SNAPPED Grid Position
        const intersects = this.raycaster.intersectObject(this.slicePlane);

        if (intersects.length > 0) {
            const p = intersects[0].point;
            const SCALE = 1;
            const OFFSET_X = -7.5;
            const OFFSET_Z = -7.5;

            const gx = Math.round((p.x - OFFSET_X) / SCALE);
            const gz = Math.round((p.z - OFFSET_Z) / SCALE);
            const gy = this.currentZLevel;

            // Calculate precise center of voxel
            const snappedPos = new THREE.Vector3(
                gx * SCALE + OFFSET_X,
                gy * SCALE + SCALE / 2,
                gz * SCALE + OFFSET_Z
            );

            if (this.interactionMode === 'voxel') {
                if (event.shiftKey) {
                    this.removeVoxel(gx, gy, gz);
                } else {
                    const exists = this.voxels.some(v => v.userData.gx === gx && v.userData.gy === gy && v.userData.gz === gz);
                    if (!exists) {
                        this.addVoxel(gx, gy, gz);
                    }
                }
            } else if (this.interactionMode === 'label') {
                // Use SNAPPED Position
                const event = new CustomEvent('requestAddLabel', { detail: { position: snappedPos } });
                window.dispatchEvent(event);
            }
        }
    }

    exportConfig(silent = false) {
        const voxelData = this.voxels.map(v => ({ x: v.userData.gx, y: v.userData.gy, z: v.userData.gz }));
        const labelData = this.exportLabels();

        const fullData = {
            voxels: voxelData,
            labels: labelData
        };

        if (!silent) {
            console.log("EXPORT DATA:", JSON.stringify(fullData));
        }
        return fullData;
    }

    exportLabels() {
        return this.labelGroup.children.map(l => ({
            id: l.userData.id,
            text: l.userData.text,
            x: l.position.x,
            y: l.position.y,
            z: l.position.z,
            offsetX: l.userData.offsetX,
            offsetY: l.userData.offsetY
        }));
    }

    onWindowResize() {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        // OCCLUSION CHECK
        this.checkOcclusion();

        if (this.controls) {
            this.controls.update();
        } else {
            if (!this.editMode && this.modelGroup) {
                this.modelGroup.rotation.y += 0.002;
                this.voxelGroup.rotation.y += 0.002;
                this.labelGroup.rotation.y += 0.002;
            } else {
                this.modelGroup.rotation.y = 0;
                this.voxelGroup.rotation.y = 0;
                this.labelGroup.rotation.y = 0;
            }
        }

        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render(this.scene, this.camera);
    }
}
