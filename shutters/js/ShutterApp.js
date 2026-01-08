import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import GUI from 'lil-gui';
import { Engine } from './Engine.js';

export class ShutterApp extends Engine {
    constructor() {
        super('canvas-3d');

        this.canvas2d = document.getElementById('canvas-2d');
        this.ctx2d = this.canvas2d.getContext('2d');

        this.config = {
            roomSize: 4.0,
            wallThickness: 1.12,
            wallColor: '#b0b0b0',
            windowWidth: 1.915,
            windowHeight: 0.666,
            sillDrop: 0.40,
            frameSideWidth: 0.06,
            frameTopBotWidth: 0.06,
            frameColor: '#2a2a2a',
            shutterColor: '#8A6F4E',
            panelStyle: 'Shaker',
            hingeColor: '#D4AF37',
            openPercent: 50,
            windowOpenPercent: 20,
            innerPanelRatio: 0.95,
            viewMode: 'TOP',
            viewTarget: 'front',
            foldMode: 'Compact',
            hqMode: false,
            sunIntensity: 2.0,
            spotIntensity: 1.5,
            sconceIntensity: 1.0,

            // Independent Apron Configs
            front_hasUpperApron: false,
            front_upperApronHeight: 0.15,
            front_apronProjection: 0.0,
            front_apronHeightRatio: 1.0,

            left_hasUpperApron: false,
            left_upperApronHeight: 0.15,
            left_apronProjection: 0.0,
            left_apronHeightRatio: 1.0,

            right_hasUpperApron: false,
            right_upperApronHeight: 0.15,
            right_apronProjection: 0.0,
            right_apronHeightRatio: 1.0,
        };

        this.parts = {
            leftGroup: null,
            rightGroup: null,
            leftInnerGroup: null,
            rightInnerGroup: null,
            hopperWindow: null,
            ceiling: null,
            spots: []
        };

        this.lights = {
            ambient: null,
            studioSun: null,
            studioFill: null,
            realSun: null,
            spots: [],
            sconces: []
        };

        this.viewState = {
            zoom: 1.2,
            pan: { x: 0, y: 0 },
            isDragging: false,
            lastMouse: { x: 0, y: 0 }
        };

        this.initApp();
    }

    initApp() {
        this.manager = new THREE.LoadingManager();
        this.manager.onLoad = () => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.style.opacity = 0;
                setTimeout(() => loader.style.display = 'none', 600);
            }
            this.renderLoop();
        };

        this.setupMaterials();
        this.setupLights();
        this.initUI();
        this.init2DControls();
        this.createScene();
        this.setupEvents();
        this.updateLighting();
    }

    setupMaterials() {
        const createStoneTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024; canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#e5e5e0';
            ctx.fillRect(0, 0, 1024, 1024);
            for (let i = 0; i < 40000; i++) {
                ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)';
                const s = Math.random() * 2; ctx.fillRect(Math.random() * 1024, Math.random() * 1024, s, s);
            }
            ctx.strokeStyle = 'rgba(80,80,80,0.2)';
            ctx.lineWidth = 1;
            const rows = 5; const rowH = 1024 / rows; const blockW = 300;
            for (let r = 0; r < rows; r++) {
                const y = r * rowH;
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
                const xOffset = (r % 2 === 0) ? 0 : blockW / 2;
                for (let x = xOffset; x < 1024; x += blockW) {
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + rowH); ctx.stroke();
                }
            }
            const tex = new THREE.CanvasTexture(canvas);
            tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(1, 1);
            return tex;
        };

        const createWoodTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024; canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#f2f2f2';
            ctx.fillRect(0, 0, 1024, 1024);
            for (let i = 0; i < 60000; i++) {
                ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)';
                ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 4);
            }
            ctx.strokeStyle = 'rgba(0,0,0,0.05)'; ctx.lineWidth = 1;
            const plankW = 128;
            for (let x = 0; x <= 1024; x += plankW) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1024); ctx.stroke();
            }
            const tex = new THREE.CanvasTexture(canvas);
            tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(4, 4);
            return tex;
        };

        const stoneTex = createStoneTexture();
        const woodTex = createWoodTexture();

        // Simulate async loading to demonstrate LoadingManager (or use TextureLoader if we had external files)
        // Since textures are procedural, we don't strictly *need* LoadingManager, but to follow the plan:
        // We will pretend they are external by "starting" and "completing" the manager manually if we were async,
        // but here we just rely on synchronous creation. 
        // Real-world: textureLoader.load('path', ...) would use the manager automatically.
        // For now, let's just trigger onLoad next frame since everything is synchronous.
        requestAnimationFrame(() => this.manager.onLoad());

        this.mats = {
            floor: new THREE.MeshStandardMaterial({ map: woodTex, color: this.config.shutterColor, roughness: 0.8, metalness: 0.0 }),
            ceiling: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }),
            wallMain: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }),
            wallStone: new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.95 }),
            windowFrame: new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.7, metalness: 0.2 }),
            shutter: new THREE.MeshStandardMaterial({ color: this.config.shutterColor, roughness: 0.85, metalness: 0.0 }),
            glass: new THREE.MeshPhysicalMaterial({ color: 0xccddff, transmission: 0.95, roughness: 0, opacity: 0.3, transparent: true }),
            hinge: new THREE.MeshStandardMaterial({ color: this.config.hingeColor, metalness: 0.8, roughness: 0.3 }),
            bedFabric: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }),
            bedBase: new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 })
        };
    }

    setupLights() {
        this.lights.ambient = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(this.lights.ambient);

        this.lights.studioSun = new THREE.DirectionalLight(0xffffff, 1.0);
        this.lights.studioSun.position.set(2, 5, 2);
        this.lights.studioSun.castShadow = true;
        this.lights.studioSun.shadow.mapSize.set(2048, 2048);
        this.lights.studioSun.shadow.bias = -0.0001;
        this.scene.add(this.lights.studioSun);

        this.lights.studioFill = new THREE.DirectionalLight(0xffeedd, 0.3);
        this.lights.studioFill.position.set(-2, 2, 5);
        this.scene.add(this.lights.studioFill);

        this.lights.realSun = new THREE.DirectionalLight(0xffffee, 0);
        this.lights.realSun.position.set(-5, 5, -10);
        this.lights.realSun.castShadow = true;
        this.lights.realSun.shadow.camera.near = 0.5;
        this.lights.realSun.shadow.camera.far = 25;
        this.lights.realSun.shadow.camera.left = -10;
        this.lights.realSun.shadow.camera.right = 10;
        this.lights.realSun.shadow.camera.top = 10;
        this.lights.realSun.shadow.camera.bottom = -10;
        this.lights.realSun.shadow.mapSize.set(4096, 4096);
        this.lights.realSun.shadow.bias = -0.001;
        this.lights.realSun.shadow.normalBias = 0.02;
        this.scene.add(this.lights.realSun);
    }

    initUI() {
        this.gui = new GUI({ title: 'Designer' });
        const gui = this.gui;
        const fDim = gui.addFolder('Geometry');
        const rebuild = () => this.requestRebuild();
        fDim.add(this.config, 'wallThickness', 0.2, 1.3).name('Wall Depth').onChange(rebuild);
        fDim.add(this.config, 'windowWidth', 0.8, 2.5).name('Overall Width').onChange(rebuild);
        fDim.add(this.config, 'windowHeight', 0.6, 2.5).name('Overall Height').onChange(rebuild);
        fDim.add(this.config, 'sillDrop', 0.1, 1.5).name('Total Apron Drop').onChange(rebuild);
        fDim.add(this.config, 'innerPanelRatio', 0.9, 1.0).name('Inner Width %').onChange(rebuild);

        const addApronFolder = (name, prefix) => {
            const f = gui.addFolder(name);
            f.add(this.config, prefix + 'hasUpperApron').name('Add Upper Tier').onChange(rebuild);
            f.add(this.config, prefix + 'upperApronHeight', 0.05, 0.5).name('Upper Height').onChange(rebuild);
            f.add(this.config, prefix + 'apronProjection', 0.0, 0.6).name('Lower Projection').onChange(() => {
                if (this.config[prefix + 'apronProjection'] < 0.005) this.config[prefix + 'apronHeightRatio'] = 1.0;
                rebuild();
            });
            f.add(this.config, prefix + 'apronHeightRatio', 0.5, 1.0).name('Lower Slope %').listen().onChange(() => {
                if (this.config[prefix + 'apronProjection'] < 0.005) this.config[prefix + 'apronHeightRatio'] = 1.0;
                rebuild();
            });
        };

        addApronFolder('Front Window (Apron)', 'front_');
        addApronFolder('Left Window (Apron)', 'left_');
        addApronFolder('Right Window (Apron)', 'right_');

        const fFrame = gui.addFolder('Shutter Frame');
        fFrame.add(this.config, 'frameSideWidth', 0.02, 0.15).name('Side Width').onChange(rebuild);
        fFrame.add(this.config, 'frameTopBotWidth', 0.02, 0.15).name('Top/Bot Width').onChange(rebuild);

        const fStyle = gui.addFolder('Finish');
        fStyle.add(this.config, 'panelStyle', ['Shaker', 'Classical']).onChange(rebuild);
        fStyle.addColor(this.config, 'shutterColor').name('Shutter/Floor Color').onChange(c => {
            this.mats.shutter.color.set(c);
            this.mats.floor.color.set(c);
        });
        fStyle.addColor(this.config, 'hingeColor').onChange(c => this.mats.hinge.color.set(c));

        const fFold = gui.addFolder('Mechanics');
        fFold.add(this.config, 'foldMode', ['Zig-Zag', 'Compact']).name('Folding Logic').onChange(rebuild);
        fFold.add(this.config, 'openPercent', 0, 100).name('Fold Shutters').listen();
        fFold.add(this.config, 'windowOpenPercent', 0, 100).name('Open Window').listen();

        const fLight = gui.addFolder('Rendering & Light');
        fLight.add(this.config, 'hqMode').name('High Quality Mode').onChange(() => this.updateLighting());
        fLight.add(this.config, 'sunIntensity', 0, 5).name('Sun Intensity').onChange(() => this.updateLighting());
        fLight.add(this.config, 'spotIntensity', 0, 3).name('Spot Brightness').onChange(() => this.updateLighting());
        fLight.add(this.config, 'sconceIntensity', 0, 3).name('Sconce Brightness').onChange(() => this.updateLighting());

        const fData = gui.addFolder('Data');
        fData.add({ save: () => this.saveConfiguration() }, 'save').name('Save Config');
        fData.add({ load: () => this.loadConfiguration() }, 'load').name('Load Config');
        fData.add({ export: () => this.exportDXF() }, 'export').name('Export DXF');

        document.querySelectorAll('.view-btn').forEach(b => {
            b.addEventListener('click', e => {
                document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.config.viewMode = e.target.dataset.view;
                this.viewState.zoom = 1.2;
                this.viewState.pan = { x: 0, y: 0 };
            });
        });

        document.getElementById('btn-minimize').addEventListener('click', () => {
            const p = document.getElementById('schematic-panel');
            p.classList.toggle('minimized');
            const btn = document.getElementById('btn-minimize');
            btn.innerText = p.classList.contains('minimized') ? '+' : '_';
        });

        document.getElementById('window-select').addEventListener('change', (e) => {
            this.config.viewTarget = e.target.value;
        });
    }

    updateLighting() {
        const { hqMode, sunIntensity, spotIntensity, sconceIntensity } = this.config;

        if (hqMode) {
            this.lights.studioSun.intensity = 0;
            this.lights.studioFill.intensity = 0;
            this.lights.ambient.intensity = 0.1;
            this.lights.realSun.intensity = sunIntensity;
            if (this.parts.ceiling) this.parts.ceiling.visible = true;

            this.parts.spots.forEach(s => {
                s.visible = true;
                if (s.children[1]) s.children[1].intensity = spotIntensity;
            });

            this.lights.sconces.forEach(l => l.intensity = sconceIntensity);
            this.scene.background = new THREE.Color(0x111111);

        } else {
            this.lights.studioSun.intensity = 1.0;
            this.lights.studioFill.intensity = 0.3;
            this.lights.ambient.intensity = 0.6;
            this.lights.realSun.intensity = 0;
            if (this.parts.ceiling) this.parts.ceiling.visible = false;
            this.parts.spots.forEach(s => {
                s.visible = false;
                if (s.children[1]) s.children[1].intensity = 0;
            });
            this.lights.sconces.forEach(l => l.intensity = 0);
            this.scene.background = new THREE.Color(0x999999);
        }
    }

    init2DControls() {
        const cvs = this.canvas2d;
        cvs.addEventListener('wheel', (e) => {
            e.preventDefault();
            const scaleAmount = 0.1;
            const direction = e.deltaY > 0 ? -1 : 1;
            this.viewState.zoom += direction * scaleAmount * this.viewState.zoom;
            this.viewState.zoom = Math.max(0.1, Math.min(10, this.viewState.zoom));
        });
        cvs.addEventListener('mousedown', (e) => {
            this.viewState.isDragging = true;
            this.viewState.lastMouse = { x: e.clientX, y: e.clientY };
        });
        window.addEventListener('mousemove', (e) => {
            if (!this.viewState.isDragging) return;
            const dx = e.clientX - this.viewState.lastMouse.x;
            const dy = e.clientY - this.viewState.lastMouse.y;
            this.viewState.pan.x += dx;
            this.viewState.pan.y += dy;
            this.viewState.lastMouse = { x: e.clientX, y: e.clientY };
        });
        window.addEventListener('mouseup', () => {
            this.viewState.isDragging = false;
        });
    }

    requestRebuild() {
        if (this.rebuildPending) return;
        this.rebuildPending = true;
        requestAnimationFrame(() => {
            this.rebuild();
            this.rebuildPending = false;
        });
    }

    rebuild() {
        if (this.root) {
            this.scene.remove(this.root);
            this.root.traverse(o => { if (o.geometry) o.geometry.dispose() });
        }
        this.createScene();
        this.updateLighting();
    }

    createScene() {
        this.root = new THREE.Group();
        this.scene.add(this.root);

        this.windowInstances = [];
        this.lights.spots = [];
        this.parts.spots = [];

        const { roomSize, windowHeight } = this.config;
        const alcoveTop = windowHeight / 2;
        const roomHeight = 2.4;
        const floorY = alcoveTop - roomHeight;

        const floorGeo = new THREE.PlaneGeometry(roomSize + 4, roomSize + 4);
        const floor = new THREE.Mesh(floorGeo, this.mats.floor);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = floorY;
        floor.receiveShadow = true;
        this.root.add(floor);

        const ceilThick = 0.5;
        const ceilW = roomSize + 4.0;
        const ceilGeo = new THREE.BoxGeometry(ceilW, ceilThick, ceilW);
        const ceiling = new THREE.Mesh(ceilGeo, this.mats.ceiling);
        ceiling.position.set(0, alcoveTop + ceilThick / 2, 0);
        ceiling.receiveShadow = true;
        ceiling.castShadow = true;
        this.root.add(ceiling);
        this.parts.ceiling = ceiling;

        const spotSpacing = 1.2;
        const spotPositions = [];
        for (let x = -1; x <= 1; x++) {
            for (let z = -1; z <= 1; z++) {
                spotPositions.push([x * spotSpacing, z * spotSpacing]);
            }
        }

        const spotGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.02, 16);
        const spotMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, emissive: 0x555555 });

        spotPositions.forEach(pos => {
            const spotGroup = new THREE.Group();
            spotGroup.position.set(pos[0], alcoveTop - 0.01, pos[1]);
            this.root.add(spotGroup);
            const fixture = new THREE.Mesh(spotGeo, spotMat);
            fixture.position.y = 0;
            spotGroup.add(fixture);
            const light = new THREE.SpotLight(0xffffee, 0);
            light.position.set(0, -0.05, 0);
            light.target.position.set(0, -2, 0);
            light.angle = Math.PI / 3;
            light.penumbra = 0.5;
            light.decay = 1.2;
            light.distance = 8;
            light.castShadow = false; // Optimized: Shadows disabled to prevent freeze
            // light.shadow.bias = -0.0001;
            spotGroup.add(light);
            spotGroup.add(light.target);
            this.parts.spots.push(spotGroup);
            this.lights.spots.push(light);
        });

        const wallOffset = (roomSize / 2) + (this.config.wallThickness / 2);

        const frontGroup = new THREE.Group();
        frontGroup.position.set(0, 0, -wallOffset);
        this.root.add(frontGroup);
        this.buildWindowAssembly(frontGroup, floorY, 'front');

        const leftGroup = new THREE.Group();
        leftGroup.position.set(-wallOffset, 0, 0);
        leftGroup.rotation.y = Math.PI / 2;
        this.root.add(leftGroup);
        this.buildWindowAssembly(leftGroup, floorY, 'left');

        const rightGroup = new THREE.Group();
        rightGroup.position.set(wallOffset, 0, 0);
        rightGroup.rotation.y = -Math.PI / 2;
        this.root.add(rightGroup);
        this.buildWindowAssembly(rightGroup, floorY, 'right');

        this.createBed(floorY, -wallOffset);
        this.createSconces(floorY, -wallOffset);
    }

    createSconces(floorY, wallZ) {
        const { wallThickness, roomSize, windowWidth } = this.config;
        const wallFaceZ = wallZ + (wallThickness / 2);

        const internalCornerX = roomSize / 2;
        const alcoveOuterEdgeX = (windowWidth + 0.4) / 2;

        const xPos = ((internalCornerX + alcoveOuterEdgeX) / 2) - 0.1;

        const yPos = floorY + 1.6;

        const makeSconce = (x) => {
            const group = new THREE.Group();
            group.position.set(x, yPos, wallFaceZ);
            this.root.add(group);
            const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.01, 32), this.mats.hinge);
            plate.rotation.x = Math.PI / 2;
            plate.position.z = 0.005;
            group.add(plate);
            const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.1, 8), this.mats.hinge);
            arm1.rotation.x = Math.PI / 2;
            arm1.position.z = 0.05;
            group.add(arm1);
            const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 8), this.mats.hinge);
            arm2.position.set(0, 0.06, 0.1);
            group.add(arm2);
            const shade = new THREE.Mesh(
                new THREE.CylinderGeometry(0.06, 0.12, 0.18, 32, 1, true),
                new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 1.0 })
            );
            shade.position.set(0, 0.14, 0.1);
            group.add(shade);
            const light = new THREE.PointLight(0xffaa55, 0, 4);
            light.position.set(0, 0.12, 0.1);
            light.castShadow = false; // Optimized: Shadows disabled to prevent freeze
            // light.shadow.bias = -0.0001;
            group.add(light);
            this.lights.sconces.push(light);
        };

        makeSconce(-xPos);
        makeSconce(xPos);
    }

    createBed(floorY, wallZ) {
        const bedGroup = new THREE.Group();
        const { wallThickness, windowWidth, windowHeight, sillDrop } = this.config;
        const wallFaceZ = wallZ + (wallThickness / 2);
        const bedZ = wallFaceZ;
        bedGroup.position.set(0, floorY, bedZ);
        this.root.add(bedGroup);
        const matOak = this.mats.shutter;
        const matFabric = this.mats.bedFabric;
        const matBase = this.mats.bedBase;
        const holeBot = (-this.config.windowHeight / 2) - this.config.sillDrop;
        const hbH = holeBot - floorY;
        const hbW = windowWidth;
        const hbD = 0.06;
        const headboard = new THREE.Mesh(new RoundedBoxGeometry(hbW, hbH, hbD, 4, 0.01), matOak);
        headboard.position.set(0, hbH / 2, hbD / 2);
        headboard.receiveShadow = true; headboard.castShadow = true;
        bedGroup.add(headboard);
        const bedW = hbW;
        const baseH = 0.35; const baseL = 2.0;
        const base = new THREE.Mesh(new RoundedBoxGeometry(bedW, baseH, baseL, 4, 0.02), matBase);
        base.position.set(0, baseH / 2, hbD + baseL / 2);
        base.castShadow = true;
        bedGroup.add(base);
        const mattH = 0.25;
        const mattress = new THREE.Mesh(new RoundedBoxGeometry(bedW - 0.02, mattH, baseL - 0.02, 8, 0.05), matFabric);
        mattress.position.set(0, baseH + mattH / 2, hbD + baseL / 2);
        mattress.castShadow = true;
        bedGroup.add(mattress);
        const duvet = new THREE.Mesh(new RoundedBoxGeometry(bedW + 0.1, mattH * 0.6, baseL + 0.1, 8, 0.05), matFabric);
        duvet.position.set(0, baseH + mattH / 2 + 0.02, hbD + baseL / 2);
        bedGroup.add(duvet);
        const pillowGeo = new RoundedBoxGeometry(0.7, 0.15, 0.45, 12, 0.08);
        const p1 = new THREE.Mesh(pillowGeo, matFabric);
        p1.position.set(-bedW / 4, baseH + mattH + 0.05, hbD + 0.35);
        p1.rotation.x = -0.15;
        bedGroup.add(p1);
        const p2 = new THREE.Mesh(pillowGeo, matFabric);
        p2.position.set(bedW / 4, baseH + mattH + 0.05, hbD + 0.35);
        p2.rotation.x = -0.15;
        bedGroup.add(p2);
        const tableW = 0.50; const tableH = 0.55; const tableD = 0.45;
        const tableOffset = bedW / 2 + 0.15 + tableW / 2;
        const makeTable = (x) => {
            const t = new THREE.Mesh(new RoundedBoxGeometry(tableW, tableH, tableD, 4, 0.01), matOak);
            t.position.set(x, tableH / 2, tableD / 2);
            t.castShadow = true; t.receiveShadow = true;
            bedGroup.add(t);
        };
        makeTable(-tableOffset);
        makeTable(tableOffset);
    }

    buildWindowAssembly(parentGroup, floorY, type) {
        const { wallThickness, windowWidth, windowHeight, sillDrop, foldMode, frameSideWidth, frameTopBotWidth, innerPanelRatio, roomSize } = this.config;
        const prefix = type + '_';
        const hasUpperApron = this.config[prefix + 'hasUpperApron'];
        const upperApronHeight = this.config[prefix + 'upperApronHeight'];
        const apronProjection = this.config[prefix + 'apronProjection'];
        const apronHeightRatio = this.config[prefix + 'apronHeightRatio'];
        const shutterFrameDepth = 0.08; const windowFrameDepth = 0.045; const panelD = 0.035; const hingeLeafW = panelD - 0.005;
        const wallW = roomSize + (wallThickness * 2); const alcoveTop = windowHeight / 2; const surroundW = 0.2; const totalHoleW = windowWidth + (2 * surroundW);
        const holeTop = windowHeight / 2; const holeBot = -windowHeight / 2 - sillDrop; const stoneLimitY = holeBot - 0.05;

        const mainShape = new THREE.Shape();
        mainShape.moveTo(-wallW / 2, floorY); mainShape.lineTo(wallW / 2, floorY);
        mainShape.lineTo(wallW / 2, alcoveTop + 0.001); mainShape.lineTo(-wallW / 2, alcoveTop + 0.001);
        const stoneHole = new THREE.Path();
        stoneHole.moveTo(-totalHoleW / 2, stoneLimitY); stoneHole.lineTo(totalHoleW / 2, stoneLimitY);
        stoneHole.lineTo(totalHoleW / 2, alcoveTop + 0.001); stoneHole.lineTo(-totalHoleW / 2, alcoveTop + 0.001);
        mainShape.holes.push(stoneHole);
        const mainGeo = new THREE.ExtrudeGeometry(mainShape, { depth: wallThickness, bevelEnabled: false });
        mainGeo.translate(0, 0, -wallThickness / 2);
        const mainWall = new THREE.Mesh(mainGeo, this.mats.wallMain);
        mainWall.castShadow = true; mainWall.receiveShadow = true;
        parentGroup.add(mainWall);

        const surroundShape = new THREE.Shape();
        surroundShape.moveTo(-totalHoleW / 2, stoneLimitY); surroundShape.lineTo(totalHoleW / 2, stoneLimitY);
        surroundShape.lineTo(totalHoleW / 2, alcoveTop + 0.001); surroundShape.lineTo(-totalHoleW / 2, alcoveTop + 0.001);
        const winHole = new THREE.Path();
        winHole.moveTo(-windowWidth / 2, holeBot); winHole.lineTo(windowWidth / 2, holeBot);
        winHole.lineTo(windowWidth / 2, holeTop); winHole.lineTo(-windowWidth / 2, holeTop);
        surroundShape.holes.push(winHole);
        const surroundGeo = new THREE.ExtrudeGeometry(surroundShape, { depth: wallThickness, bevelEnabled: false });
        surroundGeo.translate(0, 0, -wallThickness / 2);
        const posAttr = surroundGeo.attributes.position; const uvAttr = surroundGeo.attributes.uv; const normAttr = surroundGeo.attributes.normal;
        for (let i = 0; i < posAttr.count; i++) {
            const x = posAttr.getX(i); const y = posAttr.getY(i); const z = posAttr.getZ(i);
            const ny = Math.abs(normAttr.getY(i)); const nz = Math.abs(normAttr.getZ(i));
            if (nz < 0.5 && ny < 0.5) uvAttr.setXY(i, z * 0.5, y * 0.5); else uvAttr.setXY(i, x * 0.5, y * 0.5);
        }
        uvAttr.needsUpdate = true;
        const stoneWall = new THREE.Mesh(surroundGeo, this.mats.wallStone);
        stoneWall.castShadow = true; stoneWall.receiveShadow = true;
        parentGroup.add(stoneWall);

        const windowSetback = 0.1; const winZ = -shutterFrameDepth / 2 - windowFrameDepth / 2 - windowSetback;
        const winGroup = new THREE.Group(); winGroup.position.set(0, 0, winZ); parentGroup.add(winGroup);
        const wFrameThick = 0.04;
        const addBlackBox = (w, h, d, x, y, p = winGroup) => {
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.mats.windowFrame);
            m.position.set(x, y, 0); m.castShadow = true; p.add(m);
        };
        addBlackBox(windowWidth, wFrameThick, windowFrameDepth, 0, windowHeight / 2 - wFrameThick / 2);
        addBlackBox(windowWidth, wFrameThick, windowFrameDepth, 0, -windowHeight / 2 + wFrameThick / 2);
        addBlackBox(wFrameThick, windowHeight - 2 * wFrameThick, windowFrameDepth, -windowWidth / 2 + wFrameThick / 2, 0);
        addBlackBox(wFrameThick, windowHeight - 2 * wFrameThick, windowFrameDepth, windowWidth / 2 - wFrameThick / 2, 0);
        const glassH = windowHeight - 2 * wFrameThick; const glassW = windowWidth - 2 * wFrameThick; const segmentW = glassW / 4;
        for (let i = 1; i < 4; i++) {
            const barX = (-windowWidth / 2 + wFrameThick) + (i * segmentW);
            addBlackBox(0.02, glassH, windowFrameDepth * 0.8, barX, 0);
        }
        const g1 = new THREE.Mesh(new THREE.PlaneGeometry(segmentW, glassH), this.mats.glass);
        g1.position.set((-windowWidth / 2 + wFrameThick) + segmentW / 2, 0, 0); g1.castShadow = false; winGroup.add(g1);
        const g4 = new THREE.Mesh(new THREE.PlaneGeometry(segmentW, glassH), this.mats.glass);
        g4.position.set((-windowWidth / 2 + wFrameThick) + 3.5 * segmentW, 0, 0); g4.castShadow = false; winGroup.add(g4);
        const hopperWindow = new THREE.Group(); hopperWindow.position.set(0, -glassH / 2, 0); winGroup.add(hopperWindow);
        const hopGroup = new THREE.Group(); hopGroup.position.set(0, glassH / 2, 0); hopperWindow.add(hopGroup);
        const subF = 0.025;
        addBlackBox(segmentW * 2, subF, windowFrameDepth, 0, glassH / 2 - subF / 2, hopGroup);
        addBlackBox(segmentW * 2, subF, windowFrameDepth, 0, -glassH / 2 + subF / 2, hopGroup);
        addBlackBox(subF, glassH - 2 * subF, windowFrameDepth, -segmentW + subF / 2, 0, hopGroup);
        addBlackBox(subF, glassH - 2 * subF, windowFrameDepth, segmentW - subF / 2, 0, hopGroup);
        addBlackBox(0.02, glassH - 2 * subF, windowFrameDepth * 0.8, 0, 0, hopGroup);
        const hGlass = new THREE.Mesh(new THREE.PlaneGeometry(segmentW * 2 - 2 * subF, glassH - 2 * subF), this.mats.glass);
        hGlass.castShadow = false; hopGroup.add(hGlass);

        const sfGroup = new THREE.Group(); sfGroup.position.set(0, 0, -shutterFrameDepth / 2); parentGroup.add(sfGroup);
        const addSFB = (w, h, d, x, y) => {
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.mats.shutter);
            m.position.set(x, y, 0); m.castShadow = true; m.receiveShadow = true; sfGroup.add(m);
        };
        addSFB(windowWidth, frameTopBotWidth, shutterFrameDepth, 0, windowHeight / 2 - frameTopBotWidth / 2);
        addSFB(windowWidth, frameTopBotWidth, shutterFrameDepth, 0, -windowHeight / 2 + frameTopBotWidth / 2);
        addSFB(frameSideWidth, windowHeight - (2 * frameTopBotWidth), shutterFrameDepth, -windowWidth / 2 + frameSideWidth / 2, 0);
        addSFB(frameSideWidth, windowHeight - (2 * frameTopBotWidth), shutterFrameDepth, windowWidth / 2 - frameSideWidth / 2, 0);

        const hingeInset = 0.015; const shutterSpan = windowWidth - (2 * hingeInset); const meetingGap = 0.002; const assemblyW = (shutterSpan / 2) - (meetingGap / 2);
        const knuckleOffset = 0.006; const outerPanelW = assemblyW / (1 + innerPanelRatio); const innerPanelW = assemblyW - outerPanelW;
        const panelH = windowHeight - (2 * frameTopBotWidth); const hingePositions = [panelH / 2 - 0.15, -panelH / 2 + 0.15];
        const centerPivotLocalZ = foldMode === 'Zig-Zag' ? (-panelD - knuckleOffset) : -knuckleOffset;
        const flushPanelZ = -knuckleOffset - panelD / 2;

        const leftGroup = new THREE.Group(); leftGroup.position.set(-windowWidth / 2 + hingeInset, 0, knuckleOffset); parentGroup.add(leftGroup);
        leftGroup.add(this.createRebatedPanel(outerPanelW, panelH, panelD, hingePositions, 'left', null, 'front', flushPanelZ));
        hingePositions.forEach(y => {
            const h = this.createSplitHinge('projection', knuckleOffset);
            h.static.position.set(-windowWidth / 2 + hingeInset, y, knuckleOffset); parentGroup.add(h.static);
            h.moving.position.set(0, y, 0); leftGroup.add(h.moving);
        });
        const leftInnerGroup = new THREE.Group(); leftInnerGroup.position.set(outerPanelW, 0, centerPivotLocalZ); leftGroup.add(leftInnerGroup);
        const lInnerZ = foldMode === 'Zig-Zag' ? panelD / 2 : -panelD / 2;
        leftInnerGroup.add(this.createRebatedPanel(innerPanelW, panelH, panelD, hingePositions, 'right', 'bead', foldMode === 'Zig-Zag' ? 'back' : 'front', lInnerZ));
        hingePositions.forEach(y => {
            const h = this.createSplitHinge('butt', 0, -panelD / 2, hingeLeafW);
            h.static.position.set(outerPanelW, y, centerPivotLocalZ); h.static.rotation.y = Math.PI / 2; leftGroup.add(h.static);
            h.moving.position.set(0, y, 0); h.moving.rotation.y = Math.PI / 2; leftInnerGroup.add(h.moving);
        });

        const rightGroup = new THREE.Group(); rightGroup.position.set(windowWidth / 2 - hingeInset, 0, knuckleOffset); parentGroup.add(rightGroup);
        rightGroup.add(this.createRebatedPanel(outerPanelW, panelH, panelD, hingePositions, 'right', null, 'front', flushPanelZ, true));
        hingePositions.forEach(y => {
            const h = this.createSplitHinge('projection', knuckleOffset);
            h.static.scale.x = -1; h.static.position.set(windowWidth / 2 - hingeInset, y, knuckleOffset); parentGroup.add(h.static);
            h.moving.scale.x = -1; h.moving.position.set(0, y, 0); rightGroup.add(h.moving);
        });
        const rightInnerGroup = new THREE.Group(); rightInnerGroup.position.set(-outerPanelW, 0, centerPivotLocalZ); rightGroup.add(rightInnerGroup);
        rightInnerGroup.add(this.createRebatedPanel(innerPanelW, panelH, panelD, hingePositions, 'left', 'recess', foldMode === 'Zig-Zag' ? 'back' : 'front', lInnerZ, true));
        hingePositions.forEach(y => {
            const h = this.createSplitHinge('butt', 0, -panelD / 2, hingeLeafW);
            h.static.scale.x = -1; h.static.position.set(-outerPanelW, y, centerPivotLocalZ); h.static.rotation.y = -Math.PI / 2; rightGroup.add(h.static);
            h.moving.scale.x = -1; h.moving.position.set(0, y, 0); h.moving.rotation.y = -Math.PI / 2; rightInnerGroup.add(h.moving);
        });

        if (sillDrop > 0.05) {
            const apronD = 0.02; let uH = hasUpperApron ? upperApronHeight : 0;
            if (uH > sillDrop - 0.05) uH = sillDrop - 0.05;
            const lH = sillDrop - uH;
            if (uH > 0.001) {
                const ug = new THREE.Group(); ug.position.set(0, -windowHeight / 2 - uH / 2, -apronD / 2); parentGroup.add(ug);
                const makeS = (w, x) => {
                    const s = new THREE.Group(); s.position.x = x; ug.add(s);
                    const m = new THREE.Mesh(new THREE.BoxGeometry(w - 0.002, uH - 0.002, apronD), this.mats.shutter);
                    m.castShadow = true; m.receiveShadow = true; s.add(m);
                };
                makeS(frameSideWidth, -windowWidth / 2 + frameSideWidth / 2);
                makeS(outerPanelW, -windowWidth / 2 + hingeInset + outerPanelW / 2);
                makeS(innerPanelW, -windowWidth / 2 + hingeInset + outerPanelW + innerPanelW / 2);
                makeS(innerPanelW, windowWidth / 2 - hingeInset - outerPanelW - innerPanelW / 2);
                makeS(outerPanelW, windowWidth / 2 - hingeInset - outerPanelW / 2);
                makeS(frameSideWidth, windowWidth / 2 - frameSideWidth / 2);
            }
            if (lH > 0.001) {
                const lg = new THREE.Group();
                const frontH = (apronProjection < 0.005) ? lH : (lH * apronHeightRatio);
                lg.position.set(0, -windowHeight / 2 - sillDrop + frontH / 2, apronProjection - apronD / 2); parentGroup.add(lg);
                const makeS = (w, x) => {
                    const s = new THREE.Group(); s.position.x = x; lg.add(s);
                    const m = new THREE.Mesh(new THREE.BoxGeometry(w - 0.002, frontH - 0.002, apronD), this.mats.shutter);
                    m.castShadow = true; m.receiveShadow = true; s.add(m);
                };
                makeS(frameSideWidth, -windowWidth / 2 + frameSideWidth / 2);
                makeS(outerPanelW, -windowWidth / 2 + hingeInset + outerPanelW / 2);
                makeS(innerPanelW, -windowWidth / 2 + hingeInset + outerPanelW + innerPanelW / 2);
                makeS(innerPanelW, windowWidth / 2 - hingeInset - outerPanelW - innerPanelW / 2);
                makeS(outerPanelW, windowWidth / 2 - hingeInset - outerPanelW / 2);
                makeS(frameSideWidth, windowWidth / 2 - frameSideWidth / 2);
            }
        }

        this.windowInstances.push({ leftGroup, leftInnerGroup, rightGroup, rightInnerGroup, hopperWindow });
    }

    createRebatedPanel(w, h, d, hingeYPositions, hingeSide, meetingType, hingeFace, zPos, isMirrored = false) {
        const group = new THREE.Group();
        const stileW = Math.max(w * 0.25, 0.04); const railH = stileW; const hLen = w - (stileW * 2);
        const addBox = (bw, bh, bd, x, y, z) => {
            const m = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), this.mats.shutter);
            m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; group.add(m);
        };
        addBox(hLen, railH, d, 0, h / 2 - railH / 2, 0); addBox(hLen, railH, d, 0, -h / 2 + railH / 2, 0);
        const cH = h - (railH * 2);
        if (this.config.panelStyle === 'Shaker') { addBox(hLen + 0.005, cH + 0.005, d * 0.3, 0, 0, -d / 5); }
        else {
            addBox(hLen + 0.005, cH + 0.005, d * 0.5, 0, 0, 0);
            const mGeo = new THREE.CylinderGeometry(0.01, 0.01, hLen, 6);
            const m1 = new THREE.Mesh(mGeo, this.mats.shutter); m1.rotation.z = Math.PI / 2; m1.position.set(0, cH / 2, d / 2); group.add(m1);
            const m2 = m1.clone(); m2.position.set(0, -cH / 2, d / 2); group.add(m2);
        }
        const buildStile = (side) => {
            const xPos = (side === 'left') ? -w / 2 + stileW / 2 : w / 2 - stileW / 2;
            if (meetingType && ((side === 'right' && meetingType === 'bead') || (side === 'left' && meetingType === 'recess'))) {
                if (meetingType === 'bead') {
                    addBox(stileW, h, d, xPos, 0, 0);
                    const bead = new THREE.Mesh(new THREE.CylinderGeometry(d / 3, d / 3, h, 16, 1, false, 0, Math.PI), this.mats.shutter);
                    bead.position.set(xPos + stileW / 2, 0, 0); bead.rotation.y = -Math.PI / 2; group.add(bead);
                } else {
                    addBox(stileW - d / 3, h, d, xPos - d / 6, 0, 0); addBox(d / 3, h, d / 2, xPos + (stileW - d / 3) / 2, 0, -d / 4);
                }
                return;
            }
            if (side !== hingeSide) { addBox(stileW, h, d, xPos, 0, 0); }
            else {
                const hH = 0.10; let curY = h / 2; const sortedH = [...hingeYPositions].sort((a, b) => b - a);
                const zShift = hingeFace === 'front' ? -0.0015 : 0.0015;
                sortedH.forEach(Hy => {
                    const topY = Hy + hH / 2; const segmentH = curY - topY;
                    if (segmentH > 0) addBox(stileW, segmentH, d, xPos, topY + segmentH / 2, 0);
                    addBox(stileW, hH, d - 0.003, xPos, Hy, zShift); curY = Hy - hH / 2;
                });
                const botH = curY - (-h / 2); if (botH > 0) addBox(stileW, botH, d, xPos, -h / 2 + botH / 2, 0);
            }
        };
        buildStile('left'); buildStile('right');
        group.position.set(isMirrored ? -w / 2 : w / 2, 0, zPos);
        if (meetingType === 'bead' || meetingType === 'recess') {
            const k = new THREE.Mesh(new THREE.SphereGeometry(0.015, 16, 16), this.mats.hinge);
            k.position.set(isMirrored ? w / 2 - 0.04 : -w / 2 + 0.04, 0, d / 2 + 0.02); group.add(k);
        }
        return group;
    }

    createSplitHinge(type, offset) {
        const leafW = 0.025; const leafH = 0.10; const leafD = 0.002; const knuckleR = 0.006; const mat = this.mats.hinge;
        const movingGroup = new THREE.Group(); movingGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(knuckleR, knuckleR, leafH + 0.005, 12), mat));
        const staticGroup = new THREE.Group();
        if (type === 'projection') {
            const l1 = new THREE.Mesh(new THREE.BoxGeometry(offset, leafH, leafD), mat); l1.position.set(-offset / 2, 0, 0); staticGroup.add(l1);
            const l2 = new THREE.Mesh(new THREE.BoxGeometry(leafW, leafH, leafD), mat); l2.position.set(leafW / 2 + knuckleR / 2, 0, 0); movingGroup.add(l2);
        } else {
            const l1 = new THREE.Mesh(new THREE.BoxGeometry(leafW, leafH, leafD), mat); l1.position.set(-leafW / 2, 0, 0); staticGroup.add(l1);
            const l2 = new THREE.Mesh(new THREE.BoxGeometry(leafW, leafH, leafD), mat); l2.position.set(leafW / 2, 0, 0); movingGroup.add(l2);
        }
        return { static: staticGroup, moving: movingGroup };
    }

    setupEvents() {
        // Original resize listener is in Engine, but maybe checking for other events?
        // Original setupEvents only had resize. So we might not need this if Engine handles it.
        // But let's keep it for compatibility if we add more.
    }

    renderLoop() {
        requestAnimationFrame(() => this.renderLoop());
        const t = this.config.openPercent / 100;
        const isZigZag = this.config.foldMode === 'Zig-Zag';
        const wT = this.config.windowOpenPercent / 100;

        if (this.windowInstances) {
            this.windowInstances.forEach(parts => {
                if (parts.leftGroup) {
                    parts.leftGroup.rotation.y = (-Math.PI / 2) * t;
                    parts.leftInnerGroup.rotation.y = isZigZag ? (Math.PI * 0.95 * t) : Math.max(-Math.PI, -(Math.PI * t * 2.4));
                    parts.rightGroup.rotation.y = (Math.PI / 2) * t;
                    parts.rightInnerGroup.rotation.y = isZigZag ? (-Math.PI * 0.95 * t) : Math.min(Math.PI, (Math.PI * t * 2.4));
                }
                if (parts.hopperWindow) parts.hopperWindow.rotation.x = wT * 0.5;
            });
        }

        this.render(); // Call Engine render which updates controls and renderer
        this.draw2D();
    }

    saveConfiguration() {
        const data = JSON.stringify(this.config, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'shutter_config.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    loadConfiguration() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    Object.assign(this.config, data);
                    // Update GUI controllers to reflect new values
                    if (this.gui) this.gui.controllersRecursive().forEach(c => c.updateDisplay());
                    this.rebuild();
                } catch (err) {
                    console.error('Error loading config:', err);
                    alert('Invalid configuration file.');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    exportDXF() {
        let dxf = '0\nSECTION\n2\nENTITIES\n';
        this.root.traverse((c) => {
            if (c.isMesh && c.visible) {
                c.updateMatrixWorld();
                const g = c.geometry.clone(); g.applyMatrix4(c.matrixWorld);
                const pos = g.attributes.position;
                for (let i = 0; i < pos.count; i += 3) {
                    dxf += '0\n3DFACE\n8\n0\n';
                    for (let j = 0; j < 4; j++) {
                        const idx = Math.min(i + j, pos.count - 1);
                        dxf += `${10 + j}\n${pos.getX(idx)}\n${20 + j}\n${pos.getY(idx)}\n${30 + j}\n${pos.getZ(idx)}\n`;
                    }
                }
            }
        });
        dxf += '0\nENDSEC\n0\nEOF';
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([dxf], { type: 'application/dxf' }));
        link.download = `shutter_model.dxf`; link.click();
    }

    draw2D() {
        const ctx = this.ctx2d;
        const w = this.canvas2d.width = this.canvas2d.clientWidth * 2;
        const h = this.canvas2d.height = this.canvas2d.clientHeight * 2;
        ctx.scale(2, 2); ctx.fillStyle = '#1a1a1e'; ctx.fillRect(0, 0, w, h);
        const { windowWidth, windowHeight, wallThickness, foldMode, frameSideWidth, innerPanelRatio, panelStyle } = this.config;
        const prefix = (this.config.viewTarget || 'front') + '_';
        const hasUpperApron = this.config[prefix + 'hasUpperApron'];
        const upperApronHeight = this.config[prefix + 'upperApronHeight'];
        const apronProjection = this.config[prefix + 'apronProjection'];
        const apronHeightRatio = this.config[prefix + 'apronHeightRatio'];
        const t = this.config.openPercent / 100; const ppm = 120;
        ctx.translate(w / 4 + this.viewState.pan.x, h / 4 + this.viewState.pan.y);
        ctx.scale(this.viewState.zoom, this.viewState.zoom);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;

        if (this.config.viewMode === 'FRONT') {
            const winW = windowWidth * ppm; const winH = windowHeight * ppm; const holeTopY = -winH / 2; const apronH = this.config.sillDrop * ppm;
            ctx.strokeStyle = '#666'; ctx.setLineDash([5, 5]); ctx.strokeRect(-winW / 2, holeTopY, winW, winH + apronH); ctx.setLineDash([]);
            const fW = frameSideWidth * ppm; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.strokeRect(-winW / 2 + fW / 2, holeTopY + fW / 2, winW - fW, winH - fW);
            const hingeInset = 0.015 * ppm; const assemblyW = (winW - 2 * hingeInset) / 2; const outerW = assemblyW / (1 + innerPanelRatio); const innerW = assemblyW - outerW;
            const startX = -winW / 2 + hingeInset;
            if (t < 0.1) {
                ctx.lineWidth = 1;
                const drawP = (x, width) => {
                    ctx.strokeRect(x, holeTopY + fW, width, winH - 2 * fW);
                    if (panelStyle === 'Shaker') { const off = 5; ctx.strokeRect(x + off, holeTopY + fW + off, width - 2 * off, winH - 2 * fW - 2 * off); }
                };
                drawP(startX, outerW); drawP(startX + outerW, innerW); drawP(startX + outerW + innerW, innerW); drawP(startX + outerW + innerW * 2, outerW);
            }
            let uH = hasUpperApron ? upperApronHeight : 0; if (uH > this.config.sillDrop - 0.05) uH = this.config.sillDrop - 0.05;
            const lH = this.config.sillDrop - uH;
            const drawAR = (y, h) => {
                const segs = [{ x: -winW / 2, w: fW }, { x: startX, w: outerW }, { x: startX + outerW, w: innerW }, { x: startX + outerW + innerW, w: innerW }, { x: startX + outerW + innerW * 2, w: outerW }, { x: winW / 2 - fW, w: fW }];
                segs.forEach(s => {
                    ctx.strokeRect(s.x, y, s.w, h);
                    if (panelStyle === 'Shaker' && h > 14) { const sw = 6; if (s.w > sw * 2) ctx.strokeRect(s.x + sw, y + sw, s.w - 2 * sw, h - 2 * sw); }
                });
            };
            if (uH > 0.001) drawAR(holeTopY + winH, uH * ppm);
            if (lH > 0.001) {
                const fh = (apronProjection < 0.005 ? lH : lH * apronHeightRatio) * ppm;
                drawAR(holeTopY + winH + apronH - fh, fh);
            }
        } else if (this.config.viewMode === 'TOP') {
            // WALL RENDERING
            ctx.fillStyle = '#333';
            ctx.fillRect(-150, -wallThickness / 2 * ppm, 300, wallThickness * ppm);
            ctx.clearRect(-windowWidth / 2 * ppm, -wallThickness / 2 * ppm, windowWidth * ppm, wallThickness * ppm);
            ctx.strokeStyle = '#666'; ctx.lineWidth = 1;
            ctx.strokeRect(-150, -wallThickness / 2 * ppm, 300, wallThickness * ppm);

            // SHUTTER CALCULATIONS
            const winW = windowWidth * ppm;
            const hingeInset = 0.015 * ppm;
            const assemblyW = (winW - 2 * hingeInset) / 2;
            const outerW = assemblyW / (1 + innerPanelRatio);
            const innerW = assemblyW - outerW;
            const isZigZag = foldMode === 'Zig-Zag';

            // SHARED STYLE
            ctx.strokeStyle = this.config.shutterColor;
            ctx.lineWidth = 4; // ADDED THICKNESS

            // RENDER BOTH SIDES
            // RENDER BOTH SIDES
            const drawSide = (mirror) => {
                const hingeX = (winW / 2 - hingeInset) * mirror;
                // Both shutters open "Into the Room" (Down), so Base Angle is negative
                const oA = -(Math.PI / 2 * t);

                // Relative Angle: Matches renderLoop logic
                // ZigZag: Positive rotation (Opposite to parent)
                // Compact: Negative rotation (Same as parent)
                let delta = 0;
                if (isZigZag) {
                    delta = Math.PI * 0.95 * t;
                } else {
                    delta = -Math.min(Math.PI, Math.PI * t * 2.4);
                }
                const iA = oA + delta;

                // OUTER PANEL
                const oX2 = hingeX + Math.cos(oA) * outerW * -mirror;
                // Note: Standard circle Y is Up. Canvas Y is Down.
                // oA is negative (e.g. -90). sin(-90) = -1.
                // We want -90 to be DOWN. So Y = -sin(angle).
                const oY2 = -Math.sin(oA) * outerW;

                ctx.beginPath(); ctx.moveTo(hingeX, 0); ctx.lineTo(oX2, oY2); ctx.stroke();

                // INNER PANEL
                const iX3 = oX2 + Math.cos(iA) * innerW * -mirror;
                const iY3 = oY2 - Math.sin(iA) * innerW;
                ctx.beginPath(); ctx.moveTo(oX2, oY2); ctx.lineTo(iX3, iY3); ctx.stroke();
            };

            drawSide(-1); // Left Side
            drawSide(1);  // Right Side

        } else if (this.config.viewMode === 'SIDE') {
            ctx.strokeStyle = '#fff'; ctx.strokeRect(-wallThickness / 2 * ppm, -windowHeight / 2 * ppm - 100, wallThickness * ppm, windowHeight * ppm + 200);
            ctx.strokeStyle = '#0ff'; ctx.strokeRect(-2, -windowHeight / 2 * ppm, 4, windowHeight * ppm);
        }
    }
}
