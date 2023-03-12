import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Scroll({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: {
            scale: 1,
            y: 0,
            transition: {
              delay: 0.8,
              duration: 0.8,
              type: "spring",
              //   delayChildren: 0.2,
              //   staggerChildren: 0.1,
            },
          },
          hidden: { scale: 1, y: -250 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Scroll;
