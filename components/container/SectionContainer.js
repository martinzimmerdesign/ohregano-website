import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

function SectionContainer (props) {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
    delay: 0.3
  })

  const variants = {
    initial: {
    },
    enter: { transition: { staggerChildren: 0.12 }
    },
    exit: {
    }
  };

  return (
    <motion.div
    ref={ref}
    variants={variants}
    initial="exit"
    animate={inView ? "enter" : "exit"}
    exit="exit" >
    <div>
      {props.children}
      </div>
    </motion.div>
  );
}
export default SectionContainer;
