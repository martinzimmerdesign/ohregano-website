import Head from 'next/head'
import styles from './Slider.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SliderElement from './SliderElement.js';
export default function Slider() {

  const [isFocused, setFocusedElement] = useState(0);
  console.log(isFocused);

  const [wasDotClicked, setWasDotClicked] = useState(false);
  console.log(wasDotClicked);

  const resetDot = () => {
    setFocusedElement(0);
    setWasDotClicked(false);
  }

  return (
    <div>
        <div className={styles.time_slider}>
          <div className={styles.line}>
            {/* Mappen einen Dot für jedes Plakat */}
            <div className={styles.dot} onMouseEnter={() => setFocusedElement(1)} onMouseLeave={() => setFocusedElement(0)} style={{backgroundColor: isFocused == 1 ? "red" : "seagreen"}}></div>
            <div onClick={() => setWasDotClicked(true)} className={styles.dot} onMouseEnter={() => setFocusedElement(2)} onMouseLeave={resetDot} style={{backgroundColor: isFocused == 2 ? "red" : "seagreen"}}></div>
          </div>
          <div className={styles.values_bottom}>
            <p className={styles.left_value}>Jetzt</p>
            <p className={styles.right_value}>1990</p>
          </div>

        </div>
        <div className={styles.img_slider}>
          <div onMouseEnter={() => setFocusedElement(1)} onMouseLeave={() => setFocusedElement(0)} style={{backgroundColor: isFocused == 1 ? "red" : "seagreen"}} className={styles.slide_element}></div>
          <SliderElement wasDotClicked={wasDotClicked} isFocused={isFocused} setFocusedElement={setFocusedElement}/>
        </div>
    </div>
  )
}
