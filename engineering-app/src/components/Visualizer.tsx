import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { StaircaseInputs, StaircaseResults } from '../core/physics';

interface VisualizerProps {
    inputs: StaircaseInputs;
    results: StaircaseResults;
}

export const Visualizer: React.FC<VisualizerProps> = ({ inputs, results }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const groupRef = useRef<THREE.Group | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);

    // --- Init Scene ---
    useEffect(() => {
        if (!mountRef.current) return;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a2a2a);
        scene.fog = new THREE.Fog(0x2a2a2a, 2000, 8000);
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(2000, 1500, 2000);
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(1000, 3000, 1000);
        dirLight.castShadow = true;
        scene.add(dirLight);
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
        fillLight.position.set(-1000, 1000, -1000);
        scene.add(fillLight);

        // Grid
        const gridHelper = new THREE.GridHelper(5000, 50, 0x444444, 0x333333);
        scene.add(gridHelper);

        // Group
        const stairGroup = new THREE.Group();
        scene.add(stairGroup);
        groupRef.current = stairGroup;

        // Loop
        let frameId: number;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current && mountRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
            controls.dispose();
            renderer.dispose();
        };
    }, []);

    // --- Update Geometry ---
    useEffect(() => {
        const group = groupRef.current;
        if (!group) return;

        // Clear previous
        while (group.children.length > 0) {
            const child = group.children[0];
            group.remove(child);
            // Dispose geometry/material to avoid leaks
            if ((child as THREE.Mesh).geometry) (child as THREE.Mesh).geometry.dispose();
        }

        const safe = (val: number) => (val || 0);
        const stepCount = safe(inputs.stepCount);
        const width = safe(inputs.width);
        const rise = safe(inputs.rise);
        const going = safe(inputs.going);
        const thickness = safe(inputs.thickness);
        const cheekHeight = safe(inputs.cheekHeight);
        const cheekThickness = safe(inputs.cheekThickness);
        const { cheekVisible, cheekSide } = inputs;

        if (stepCount <= 0 || width <= 0) return;

        // Steps Shape
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        for (let i = 0; i < stepCount; i++) {
            const x = i * going;
            const y = i * rise;
            shape.lineTo(x, y + rise);
            shape.lineTo(x + going, y + rise);
        }
        for (let i = stepCount - 1; i >= 0; i--) {
            const x = i * going;
            const y = i * rise;
            shape.lineTo(x + going, y + rise - thickness);
            shape.lineTo(x + thickness, y + rise - thickness);
            shape.lineTo(x + thickness, y);
        }
        shape.lineTo(0, 0);

        const geometry = new THREE.ExtrudeGeometry(shape, { steps: 1, depth: width, bevelEnabled: false });
        geometry.translate(0, 0, -width / 2);

        const matColor = results.overallStatus === 'SAFE' ? 0xffffff : 0xffa0a0;
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
            color: matColor, metalness: 0.3, roughness: 0.2, side: THREE.DoubleSide
        }));
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        // Cheeks
        if (cheekVisible) {
            const totalRise = stepCount * rise;
            const totalGoing = stepCount * going;
            // Approximate length of the stringer
            const length = Math.sqrt(totalRise ** 2 + totalGoing ** 2) + (going / 2);
            const angle = Math.atan2(totalRise, totalGoing);

            const cheekGeo = new THREE.BoxGeometry(length, cheekHeight, cheekThickness);
            const cheekMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.3, roughness: 0.2 });

            const createCheek = (zPos: number) => {
                const c = new THREE.Mesh(cheekGeo, cheekMat);
                // Position logic from original:
                // c.position.set(totalGoing / 2, (totalRise / 2) + (rise/2), zPos);
                // Using similar positioning relative to the group center
                c.position.set(totalGoing / 2, (totalRise / 2) + (rise / 2), zPos);
                c.rotation.z = angle;
                c.castShadow = true;
                return c;
            };

            if (cheekSide === 'one' || cheekSide === 'two') {
                group.add(createCheek(-width / 2 - cheekThickness / 2));
            }
            if (cheekSide === 'two') {
                group.add(createCheek(width / 2 + cheekThickness / 2));
            }
        }

        // Recenter
        const bbox = new THREE.Box3().setFromObject(group);
        const center = bbox.getCenter(new THREE.Vector3());
        group.position.sub(center);

    }, [inputs, results.overallStatus]);

    return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" id="canvas-container" />;
};
