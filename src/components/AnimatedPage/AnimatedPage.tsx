// src/components/AnimatedPage/AnimatedPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

// --- The Fix: More Subtle Animation Variants ---
// We've changed the slide from a full viewport width ('100vw') to a smaller,
// more professional '100px' push, inspired by your hero's '30px' slide.
const pageVariants = {
    initial: {
        opacity: 0,
        x: 100, // Start 100px to the right
    },
    in: {
        opacity: 1,
        x: 0, // Animate to the center
    },
    out: {
        opacity: 0,
        x: -100, // Exit 100px to the left
    },
};

// --- The Fix: Smoother, Slower Transition ---
// We've updated the duration and easing to match the feel of your hero animation.
const pageTransition = {
    type: 'tween',
    ease: 'easeOut', // A smooth deceleration, like your hero's 'ease-out'
    duration: 0.8,    // Increased from 0.5s to 0.8s for a slower, more graceful effect
} as const;

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;