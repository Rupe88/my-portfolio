"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Tooltip = ({
    content,
    children,
    containerClassName,
}: {
    content: string | React.ReactNode;
    children: React.ReactNode;
    containerClassName?: string;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [height, setHeight] = useState(0);
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isVisible, content]);

    const calculatePosition = (mouseX: number, mouseY: number) => {
        if (!contentRef.current || !containerRef.current)
            return { x: mouseX + 12, y: mouseY + 12 };

        const tooltip = contentRef.current;
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get tooltip dimensions
        const tooltipWidth = 240; // min-w-[15rem] = 240px
        const tooltipHeight = tooltip.scrollHeight;

        // Calculate absolute position relative to viewport
        const absoluteX = containerRect.left + mouseX;
        const absoluteY = containerRect.top + mouseY;

        let finalX = mouseX + 12;
        let finalY = mouseY + 12;

        // Check if tooltip goes beyond right edge
        if (absoluteX + 12 + tooltipWidth > viewportWidth) {
            finalX = mouseX - tooltipWidth - 12;
        }

        // Check if tooltip goes beyond left edge
        if (absoluteX + finalX < 0) {
            finalX = -containerRect.left + 12;
        }

        // Check if tooltip goes beyond bottom edge
        if (absoluteY + 12 + tooltipHeight > viewportHeight) {
            finalY = mouseY - tooltipHeight - 12;
        }

        // Check if tooltip goes beyond top edge
        if (absoluteY + finalY < 0) {
            finalY = -containerRect.top + 12;
        }

        return { x: finalX, y: finalY };
    };

    const updateMousePosition = (mouseX: number, mouseY: number) => {
        setMouse({ x: mouseX, y: mouseY });
        const newPosition = calculatePosition(mouseX, mouseY);
        setPosition(newPosition);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsVisible(true);
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        updateMousePosition(mouseX, mouseY);
    };

    const handleMouseLeave = () => {
        setMouse({ x: 0, y: 0 });
        setPosition({ x: 0, y: 0 });
        setIsVisible(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isVisible) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        updateMousePosition(mouseX, mouseY);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!window.matchMedia("(hover: none)").matches) return;
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;
        updateMousePosition(mouseX, mouseY);
        setIsVisible(true);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Keep tooltip open on mobile tap and close only on outside tap.
        if (window.matchMedia("(hover: none)").matches) {
            e.preventDefault();
            if (!isVisible) {
                const rect = e.currentTarget.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                updateMousePosition(mouseX, mouseY);
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        if (!isVisible) return;

        const closeTooltip = () => {
            setIsVisible(false);
            setMouse({ x: 0, y: 0 });
            setPosition({ x: 0, y: 0 });
        };

        const handlePointerDown = (event: PointerEvent) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(event.target as Node)) {
                closeTooltip();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeTooltip();
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isVisible]);

    // Update position when tooltip becomes visible or content changes
    useEffect(() => {
        if (isVisible && contentRef.current) {
            const newPosition = calculatePosition(mouse.x, mouse.y);
            setPosition(newPosition);
        }
    }, [isVisible, height, mouse.x, mouse.y]);

    return (
        <div
            ref={containerRef}
            className={cn("relative inline-block", containerClassName)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onClick={handleClick}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key={String(isVisible)}
                        initial={{ height: 0, opacity: 1 }}
                        animate={{ height, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        className="pointer-events-none absolute z-50 max-w-[min(90vw,20rem)] min-w-[13rem] overflow-hidden rounded-md border border-transparent bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-900 dark:shadow-white/10 dark:ring-white/5 md:min-w-[15rem]"
                        style={{
                            top: position.y,
                            left: position.x,
                        }}
                    >
                        <div
                            ref={contentRef}
                            className="p-2 text-sm text-neutral-600 md:p-4 dark:text-neutral-400"
                        >
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
