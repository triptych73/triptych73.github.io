import React, { forwardRef } from 'react';
import { Box } from '@react-three/drei';

const Cabinet = forwardRef(({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    width = 0.6,
    depth = 0.6,
    height = 0.87,
    type = 'base',
    showWorktop = true,
    doorMaterial = 'white',
    withPlinth = true,
    ...props // Capture onClick and other events
}, ref) => {

    // Derived Dimensions
    const plinthHeight = 0.15; // 150mm
    const carcassHeight = height - (withPlinth ? plinthHeight : 0);
    const worktopHeight = 0.04; // 40mm

    // Materials (Placeholder colors for MVP)
    const carcassColor = '#E5E7EB'; // gray-200
    const doorColor = doorMaterial === 'white' ? '#F9FAFB' : '#4B5563'; // gray-50 or gray-600
    const worktopColor = '#D1D5DB'; // gray-300
    const plinthColor = '#1F2937'; // gray-800

    return (
        <group ref={ref} position={position} rotation={rotation} {...props}>
            {/* 1. PLINTH (Recessed) */}
            {withPlinth && (
                <Box
                    args={[width - 0.04, plinthHeight, depth - 0.05]}
                    position={[0, plinthHeight / 2, -0.025]}
                    castShadow
                >
                    <meshStandardMaterial color={plinthColor} />
                </Box>
            )}

            {/* 2. CARCASS */}
            <Box
                args={[width, carcassHeight, depth]}
                position={[0, (withPlinth ? plinthHeight : 0) + carcassHeight / 2, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial color={carcassColor} />
            </Box>

            {/* 3. DOOR (Front face) */}
            {/* Door is 20mm thick, slight gap around edges */}
            <Box
                args={[width - 0.004, carcassHeight - 0.004, 0.02]}
                position={[0, (withPlinth ? plinthHeight : 0) + carcassHeight / 2, depth / 2 + 0.01]}
                castShadow
            >
                <meshStandardMaterial color={doorColor} roughness={0.5} />
            </Box>

            {/* 4. WORKTOP */}
            {showWorktop && (
                <Box
                    args={[width, worktopHeight, depth + 0.02]} // Worktop overhangs door (depth + 20mm)
                    position={[0, height + worktopHeight / 2, 0.01]}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial color={worktopColor} roughness={0.8} />
                </Box>
            )}
        </group>
    );
}); // End forwardRef

export default Cabinet;
