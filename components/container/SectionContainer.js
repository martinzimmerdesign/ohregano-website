import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

function SectionContainer (props) {

    let thres = props.threshold

    const [ref, inView, entry] = useInView({
      threshold: thres === undefined ? 0.2 : thres,
      triggerOnce: true,
      delay: 0.3
    })

   const variants = {
    initial: {
    },
    enter: { transition: { staggerChildren: 0.12 }
    },
    exit: {
    },
    hover: { },
    tap: { },
  }; 

  return (
    <motion.div
    ref={ref}
    animate={inView ? "enter" : "exit"}
    initial="exit"
    variants={variants}>
    <div>
      {props.children}
      </div>
    </motion.div>
  );
}
export default SectionContainer;
