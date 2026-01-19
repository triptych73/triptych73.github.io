import React, { useRef } from 'react';
import { TransformControls } from '@react-three/drei';
import Cabinet from './Cabinet';
import Wall from './Wall';
import useStore from '../store/useStore';

const SceneItem = ({ item }) => {
    const objectRef = useRef();
    const selection = useStore((state) => state.selection);
    const setSelection = useStore((state) => state.setSelection);
    const updateItem = useStore((state) => state.updateItem);

    const isSelected = selection.includes(item.id);
    const ItemComponent = item.isWall ? Wall : Cabinet;

    return (
        <>
            <ItemComponent
                ref={objectRef}
                position={item.position}
                rotation={item.rotation}
                width={item.width}
                height={item.height}
                depth={item.depth}
                type={item.type}
                onClick={(e) => {
                    e.stopPropagation();
                    setSelection([item.id]);
                }}
            />
            {isSelected && (
                <TransformControls
                    object={objectRef}
                    mode="translate"
                    showY={false}
                    translationSnap={null}
                    onMouseUp={(e) => {
                        if (e?.target?.object) {
                            // Read new transforms from the object itself
                            const obj = e.target.object;
                            updateItem(item.id, {
                                position: [obj.position.x, 0, obj.position.z], // Enforce Y=0
                                rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z]
                            });
                        }
                    }}
                />
            )}
        </>
    );
};

export default SceneItem;
