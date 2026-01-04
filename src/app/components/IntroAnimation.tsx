import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isWriting, setIsWriting] = useState(true);
  const text = "Mehoona";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (isWriting) {
      setTimeout(() => {
        setIsWriting(false);
      }, 500);
    }
  }, [index, isWriting, text]);

  useEffect(() => {
    if (!isWriting) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isWriting, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isWriting ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={
          isWriting
            ? { scale: 1, x: 0, y: 0 }
            : { scale: 0.4, x: "-45vw", y: "-45vh" }
        }
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-6xl md:text-8xl font-bold text-white tracking-wider"
      >
        {displayText}
        {isWriting && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
