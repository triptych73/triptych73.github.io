import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class Engine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) throw new Error(`Canvas with id ${canvasId} not found`);
        this.init();
    }

    init() {
        if (!window.WebGLRenderingContext) {
            this.showError("Your browser does not support WebGL.");
            return;
        }

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x999999);

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(1.5, 1.2, 3.5);

        try {
            this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        } catch (e) {
            this.showError("Failed to initialize WebGL2 Renderer. " + e.message);
            return;
        }

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enablePan = true;
        this.controls.screenSpacePanning = true;
        this.controls.target.set(0, 0, 0);

        // Basic Sky
        const skyGeo = new THREE.SphereGeometry(60, 32, 32);
        const skyMat = new THREE.MeshBasicMaterial({ color: 0x87CEEB, side: THREE.BackSide });
        this.skydome = new THREE.Mesh(skyGeo, skyMat);
        this.scene.add(this.skydome);

        window.addEventListener('resize', this.onResize.bind(this));
    }

    onResize() {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    showError(msg) {
        let errDiv = document.getElementById('error-overlay');
        if (!errDiv) {
            errDiv = document.createElement('div');
            errDiv.id = 'error-overlay';
            errDiv.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); color:#ff5555; display:flex; align-items:center; justify-content:center; flex-direction:column; z-index:1000; font-family:sans-serif; text-align:center; padding:20px;';
            document.body.appendChild(errDiv);
        }
        errDiv.innerHTML = `<h2>Cannot Start Application</h2><p>${msg}</p>`;
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }

    render() {
        if (!this.renderer) return;
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}
