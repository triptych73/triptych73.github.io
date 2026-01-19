import React, { forwardRef } from 'react';
import { Box } from '@react-three/drei';

const Wall = forwardRef(({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    width = 2.0, // Length of wall
    depth = 0.15, // Thickness
    height = 2.4, // Ceiling height
    ...props
}, ref) => {

    return (
        <group ref={ref} position={position} rotation={rotation} {...props}>
            <Box
                args={[width, height, depth]}
                position={[0, height / 2, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial color="#E5E5E5" roughness={0.8} />
            </Box>
        </group>
    );
});

export default Wall;
