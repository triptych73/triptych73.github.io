import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment, TransformControls } from '@react-three/drei';
import useStore from '../store/useStore';
import Cabinet from './Cabinet';
import Wall from './Wall';

const Stage = () => {
    const items = useStore((state) => state.items);
    const selection = useStore((state) => state.selection);
    const setSelection = useStore((state) => state.setSelection);
    const updateItem = useStore((state) => state.updateItem);

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
            {/* Items Rendering Loop */}
            {items.map((item) => {
                const isSelected = selection.includes(item.id);
                const ItemComponent = item.isWall ? Wall : Cabinet;
                const props = {
                    key: item.id, // React Key (important)
                    position: item.position,
                    rotation: item.rotation,
                    width: item.width,
                    height: item.height,
                    depth: item.depth,
                    type: item.type,
                    onClick: (e) => {
                        e.stopPropagation();
                        setSelection([item.id]);
                    }
                };

                // The rendered item itself
                const renderedItem = <ItemComponent {...props} />;

                if (isSelected) {
                    return (
                        <TransformControls
                            key={item.id}
                            mode="translate"
                            onMouseUp={(e) => {
                                if (e?.target?.object) {
                                    updateItem(item.id, {
                                        position: [e.target.object.position.x, e.target.object.position.y, e.target.object.position.z],
                                        rotation: [e.target.object.rotation.x, e.target.object.rotation.y, e.target.object.rotation.z]
                                    });
                                }
                            }}
                        >
                            {renderedItem}
                        </TransformControls>
                    );
                }

                return renderedItem;
            })}

            {/* Demo Cabinet if empty */}
            {items.length === 0 && <Cabinet position={[0, 0, 0]} />}

        </Canvas>
    );
};

export default Stage;
