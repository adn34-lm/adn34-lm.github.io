import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-gold-400 via-yellow-400 to-gold-500 origin-left"
      style={{ scaleX }}
    />
  );
}
