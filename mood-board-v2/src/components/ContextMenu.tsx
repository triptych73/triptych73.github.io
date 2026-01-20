"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

export interface ContextMenuAction {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    danger?: boolean;
    disabled?: boolean;
}

interface ContextMenuProps {
    position: { x: number; y: number };
    onClose: () => void;
    actions: ContextMenuAction[];
}

export function ContextMenu({ position, onClose, actions }: ContextMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on click outside or escape
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    // Adjust position to keep in viewport (basic implementation)
    // For a robust solution, we'd use something like @floating-ui/react
    const style = {
        top: position.y,
        left: position.x,
    };

    return createPortal(
        <div
            ref={menuRef}
            style={style}
            className="fixed z-50 bg-[#1A1D23] border border-[#2C3038] rounded-md shadow-2xl min-w-[160px] py-1 animate-in fade-in zoom-in-95 duration-100"
            onContextMenu={(e) => e.preventDefault()} // Prevent native menu on custom menu
        >
            {actions.map((action, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (!action.disabled) {
                            action.onClick();
                            onClose();
                        }
                    }}
                    disabled={action.disabled}
                    className={cn(
                        "w-full text-left px-3 py-2 text-xs flex items-center gap-2 transition-colors",
                        action.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[#2C3038]",
                        action.danger ? "text-red-400 hover:text-red-300" : "text-[#F5F5F0]"
                    )}
                >
                    {action.icon && <span className="w-4 h-4 flex items-center justify-center">{action.icon}</span>}
                    {action.label}
                </button>
            ))}
        </div>,
        document.body
    );
}
