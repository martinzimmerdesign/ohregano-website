import styles from './SliderElement.module.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SliderElement(props) {



    const onClick = () => {
        console.log("Wird geklickt");
        props.setFocusedElement(props.dataElement.id);
        props.onClickHandler();
    }

    const variants = {
        basic: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 50, opacity: 0 }
        },
        frame: {
            enter: { border: "2px solid rgba(255,255,255,1)", padding: "20px" },
            exit: { border: "2px solid rgba(0,0,0,0)", padding: "0px" }
          },
      };

    let bool = props.isFocused == props.dataElement.id;

  return (
    <div>
        <motion.div animate={bool ? "enter" : "exit"} variants={variants.frame} onClick={props.isDragging == false ? onClick : null} onMouseEnter={() => props.setFocusedElement(props.dataElement.id)} onMouseLeave={() => props.setFocusedElement(-1)} className={styles.slide_element}>
        <img onClick={props.isDragging == false ? onClick : null} draggable="false" className={styles.cover} src={props.dataElement.img} alt="Cover Img" />
        </motion.div>
    </div>
  )
}