import Head from 'next/head'
import styles from './Slider.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SliderElement from './SliderElement.js';
import rueckschau_data from './RueckschauData.js';
import Draggable from 'react-draggable';

export default function Slider() {

  // Welcher/es Dot/Plakat wird gerade fokussiert?
  const [isFocused, setFocusedElement] = useState(0);
  // Wurde ein Dot geklickt?
  const [wasDotClicked, setWasDotClicked] = useState(false);
  // Wird gerade gedraggt?
  const [isDragging, setIsDragging] = useState(false);
  // Bild oder Dot geklickt
  const [wasClicked, setWasClicked] = useState(0);
  // Detail Ansicht
  const [isToggled, setToggled] = useState(false);

  const onClickHandler = () => {
    setToggled(true);
    setWasClicked(isFocused);
  }

  const resetDot = () => {
    setFocusedElement(0);
    setWasDotClicked(false);
  }

  const resetDragState = () => {
    setTimeout(function() {
      setIsDragging(false)
    }, 2000);
  }

  const variants = {
    content: {
      open: { opacity: 1, zIndex: 400},
      closed: { opacity: 0, zIndex: -100, transition: {
        when: "afterChildren",
      }, },
    }
  }

  return (
    <div>
        <div className={styles.time_slider}>
          <div className="content_container">
            <div className={styles.timeline}>
              {/* Mappen einen Dot für jedes Plakat */}
              {rueckschau_data.map((dataElement) =>
              <div style={{marginTop: "-8px"}}>
                <div key={dataElement.id} onClick={onClickHandler} className={styles.dot} onMouseEnter={() => setFocusedElement(dataElement.id)} onMouseLeave={resetDot} style={{backgroundColor: isFocused == dataElement.id ? "white" : "#b4a58e"}}></div>
                <p className={styles.year} style={{textAlign: "center"}}>{isFocused == dataElement.id ? dataElement.year : ""}</p>
              </div>
              )}
            </div>
            <div className={styles.values_bottom}>
              <p className={styles.left_value}>Jetzt</p>
              <p className={styles.right_value}>1990</p>
            </div>
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
            <div style={{display: "flex", alignItems: "center"}}>
              {/* Mappen für jedes Plakat das Bild im Slider, sowie die Detail-Ansicht (lazy) */}
              {rueckschau_data.map((dataElement) =>
                  <div className="handle" style={{display: "inline-flex", marginRight: "-200px"}}>
                    <SliderElement key={dataElement.id} dataElement={dataElement} onClickHandler={onClickHandler} isFocused={isFocused} setFocusedElement={setFocusedElement} isDragging={isDragging}/>
                  </div>
              )}
            </div> 
          </Draggable>
          <motion.div initial="closed" animate={isToggled ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 0.2 }} variants={variants.content} className={styles.detailView}>
            <div className="content_container">
              <img className={styles.detailClose} onClick={() => setToggled(false)} draggable="false" src="/icons/error.png" alt="Back Button Icon" />
              <div style={{display: "flex"}}>
                <div>
                  <img className={styles.detailImg} draggable="false" src={rueckschau_data[wasClicked].img} alt="Arrow Icon" />
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <p className={styles.detailTitle}>{rueckschau_data[wasClicked].title}</p>
                  <div className={styles.line}></div>
                  <p className={styles.detailDate}>{rueckschau_data[wasClicked].date}</p>
                  <p className={styles.detailText}>{rueckschau_data[wasClicked].text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}
