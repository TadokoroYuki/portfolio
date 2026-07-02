'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

interface CursorUIState {
  isPointer: boolean;
  isHidden: boolean;
}

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Position is managed via ref to avoid re-renders on every mouse move
  const cursorPositionRef = useRef({ x: -100, y: -100 });

  // Only UI state triggers re-renders
  const [uiState, setUiState] = useState<CursorUIState>({
    isPointer: false,
    isHidden: true,
  });

  // Smooth spring animation for outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia('(pointer: coarse)').matches
      );
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  // Check if element is interactive
  const isInteractiveElement = useCallback((element: Element | null): boolean => {
    if (!element) return false;

    const interactiveSelectors = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      '[role="button"]',
      '[role="link"]',
      '[data-cursor-pointer]',
    ];

    // Check element and its parents
    let currentElement: Element | null = element;
    while (currentElement) {
      if (interactiveSelectors.some((selector) => currentElement?.matches(selector))) {
        return true;
      }
      // Check for cursor style
      const computedStyle = window.getComputedStyle(currentElement);
      if (computedStyle.cursor === 'pointer') {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Update position ref (no re-render)
      cursorPositionRef.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Only update state if UI state changes
      const isPointer = isInteractiveElement(e.target as Element);
      setUiState((prev) => {
        if (prev.isPointer === isPointer && !prev.isHidden) {
          return prev; // Return same reference to avoid re-render
        }
        return { isPointer, isHidden: false };
      });
    },
    [isInteractiveElement, cursorX, cursorY]
  );

  // Mouse leave handler
  const handleMouseLeave = useCallback(() => {
    setUiState((prev) => ({ ...prev, isHidden: true }));
  }, []);

  // Mouse enter handler
  const handleMouseEnter = useCallback(() => {
    setUiState((prev) => ({ ...prev, isHidden: false }));
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = '';
    };
  }, [isTouchDevice, prefersReducedMotion, handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices or with reduced motion
  if (isTouchDevice || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Inner dot - follows mouse exactly via spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: uiState.isPointer ? 0.5 : 1,
          opacity: uiState.isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </motion.div>

      {/* Outer ring - follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: uiState.isPointer ? 1.5 : 1,
          opacity: uiState.isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
      </motion.div>
    </>
  );
}
