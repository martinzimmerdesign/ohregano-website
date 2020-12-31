import styles from './SliderElement.module.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SliderElement(props) {

    const onClick = () => {
        console.log("run")
        props.setFocusedElement(props.dataElement.id);
        props.onClickHandler();
    }

  return (
    <div>
        <div onClick={props.isDragging == false ? onClick : null} onMouseEnter={() => props.setFocusedElement(props.dataElement.id)} onMouseLeave={() => props.setFocusedElement(0)} className={styles.slide_element}>
        <img draggable="false" className={styles.cover} src={props.dataElement.img} alt="Cover Img" />
        </div>
    </div>
  )
}