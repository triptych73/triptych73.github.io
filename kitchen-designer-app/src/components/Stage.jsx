import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment } from '@react-three/drei';
import useStore from '../store/useStore';
import SceneItem from './SceneItem';

const Stage = () => {
    const items = useStore((state) => state.items);
    const setSelection = useStore((state) => state.setSelection);

    // Deselect on miss
    const onMiss = (e) => {
        if (e.type === 'click') setSelection([]);
    };

    return (
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }} onPointerMissed={onMiss}>
            {/* Ambient Environment */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize={[2048, 2048]}
            />
            <Environment preset="city" />

            {/* Controls */}
            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

            {/* Floor / Grid */}
            <Grid
                args={[20, 20]}
                cellSize={1}
                cellThickness={0.5}
                cellColor="#2A2E35"
                sectionSize={5}
                sectionThickness={1}
                sectionColor="#9A8C74"
                fadeDistance={50}
                infiniteGrid
            />

            {/* Placeholder Plane to catch shadows/clicks */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#16191D" />
            </mesh>

            {/* Items Rendering Loop */}
            {items.map((item) => (
                <SceneItem key={item.id} item={item} />
            ))}

        </Canvas>
    );
};

export default Stage;
