import styles from './SliderElement.module.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

export default function SliderElement(props) {

    const [ref, inView, entry] = useInView({
      threshold: 0.1,
      triggerOnce: true,
      delay: 0.1
    })

    const onClick = () => {
        props.setFocusedElement(props.dataElement.id);
        props.onClickHandler();
    }

    const variants = {
        basic: {
          enter: { x: 0, opacity: 1, zIndex: 30 },
          exit: { x: 150, opacity: 0, zIndex: 20 }
        },
        frame: {
            enter: { border: "2px solid rgba(255,255,255,1)", padding: "20px" },
            exit: { border: "2px solid rgba(0,0,0,0)", padding: "0px" }
          },
      };

    let bool = props.isFocused == props.dataElement.id;

  return (
    <motion.div ref={ref}
    animate={inView ? "enter" : "exit"}
    initial="exit"
    variants={variants.basic} transition={{ ease: "easeInOut", duration: 0.4 }}>
        <motion.div animate={bool ? "enter" : "exit"} variants={props.width > 1280 ? variants.frame : ""} onClick={props.isDragging == false ? onClick : null} onMouseEnter={() => props.setFocusedElement(props.dataElement.id)} onMouseLeave={() => props.setFocusedElement(-1)} className={styles.slide_element}>
        <img onClick={props.isDragging == false ? onClick : null} draggable="false" className={styles.cover} src={props.dataElement.img} alt="Cover Img" />
        </motion.div>
    </motion.div>
  )
}