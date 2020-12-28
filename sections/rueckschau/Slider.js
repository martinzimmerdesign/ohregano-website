import Head from 'next/head'
import styles from './Slider.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SliderElement from './SliderElement.js';
import rueckschau_data from './RueckschauData.js';
import Draggable from 'react-draggable';

export default function Slider() {

  const [isFocused, setFocusedElement] = useState(0);
  const [wasDotClicked, setWasDotClicked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const resetDot = () => {
    setFocusedElement(0);
    setWasDotClicked(false);
  }

  const resetDragState = () => {
    setTimeout(function() {
      setIsDragging(false)
    }, 2000);
  }

  console.log("isDragging: " + isDragging);

  return (
    <div>
        <div className={styles.time_slider}>
          <div className={styles.line}>
            {/* Mappen einen Dot für jedes Plakat */}
            {rueckschau_data.map((dataElement) =>
            <div>
              <div key={dataElement.id} onClick={() => setWasDotClicked(true)} className={styles.dot} onMouseEnter={() => setFocusedElement(dataElement.id)} onMouseLeave={resetDot} style={{backgroundColor: isFocused == dataElement.id ? "red" : "seagreen"}}></div>
              <p>{isFocused == dataElement.id ? dataElement.year : ""}</p>
            </div>
            )}
          </div>
          <div className={styles.values_bottom}>
            <p className={styles.left_value}>Jetzt</p>
            <p className={styles.right_value}>1990</p>
          </div>

        </div>
        <div className={styles.img_slider}>
          <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          onDrag={() => setIsDragging(true)}
          onStop={resetDragState}
          scale={1}>
            <div style={{display: "flex", height: "100%"}}>
              {/* Mappen für jedes Plakat das Bild im Slider, sowie die Detail-Ansicht (lazy) */}
              {rueckschau_data.map((dataElement) =>
                
                  <div className="handle" style={{display: "inline-flex"}}><SliderElement key={dataElement.id} id={dataElement.id} wasDotClicked={wasDotClicked} isFocused={isFocused} setFocusedElement={setFocusedElement} isDragging={isDragging}/></div>
                
              )}
            </div> 
          </Draggable>
        </div>
    </div>
  )
}
