"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger offset in seconds, used when revealing a list of cards. */
  delay?: number;
  className?: string;
};

/**
 * Fades content in as it scrolls into view — once, then it stays put.
 *
 * Reduced motion is handled by neutralizing the animation (`initial: false`,
 * zero duration) rather than by rendering a different element: the server
 * can't know the visitor's preference and always emits the motion.div with
 * its hidden initial style, and React hydration adopts that DOM node without
 * clearing stale attributes. Keeping the same motion.div lets framer-motion
 * take over the style attribute on mount and snap content to visible.
 */
export default function Reveal({ children, delay = 0, className }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
