import Head from 'next/head'
import styles from './Slider.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SliderElement from './SliderElement.js';
import rueckschau_data from './RueckschauData.js';
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Slider() {

  // Welcher/es Dot/Plakat wird gerade fokussiert?
  const [isFocused, setFocusedElement] = useState(-1);
  // Wurde ein Dot geklickt?
  const [wasDotClicked, setWasDotClicked] = useState(false);
  // Wird gerade gedraggt?
  const [isDragging, setIsDragging] = useState(false);
  // Bild oder Dot geklickt
  const [wasClicked, setWasClicked] = useState(-1);
  // Detail Ansicht
  const [isToggled, setToggled] = useState(false);
  // Scroll Value für die Buttons
  const [scrollValue, setScrollValue] = useState(0);

  const onClickHandler = () => {
    setToggled(true);
    setWasClicked(isFocused);
  }

  const resetDot = () => {
    setFocusedElement(-1);
    setWasDotClicked(false);
  }

  const resetDragState = () => {
    setTimeout(function() {
      setIsDragging(false)
    }, 1200);
  }

  const variants = {
    content2: {
      open: { y: 0, opacity: 1, zIndex: 200},
      closed: { y: "100vh", opacity: 0, zIndex: -100, transition: {
        when: "afterChildren",
      }, },
    },
    content: {
      open: { opacity: 1, zIndex: 200},
      closed: { opacity: 0, zIndex: -100, transition: {
        when: "afterChildren",
      }, },
    },
    img: {
      hover: { scale: 1.05},
      notHover: { scale: 1}
    },
    focusedDot: {
      enter: { backgroundColor: "#b4a58e" , padding: "10px", border: "10px solid rgba(255,255,255,0.95)" },
      exit: { backgroundColor: "#ffffff", border: "2px solid rgba(255,255,255,0)", padding: "0px" }
    },
    focusedDate: {
      enter: { opacity: 1 , paddingLeft: "10px" },
      exit: { opacity: 0, paddingLeft: "0px" }
    },
  } 

  return (
    <div style={{overflow: "hidden"}}>
        <div className={styles.time_slider}>
          <div className="content_container">
            <div className={styles.timeline_wrapper}>
              <div className={styles.timeline}></div>
              <div className={styles.values_bottom}>
              <p className={styles.left_value}>Jetzt</p>
              <p className={styles.right_value}>1990</p>
            </div>
              {/* Mappen einen Dot für jedes Plakat */}
              <div className={styles.dots}>
              {rueckschau_data.map((dataElement, index) =>
              <div key={`Key${index}`}>
                <motion.div transition={{ ease: "easeInOut", duration: 0.2 }} animate={isFocused == dataElement.id ? "enter" : "exit"} variants={variants.focusedDot} key={dataElement.id} onClick={onClickHandler} className={styles.dot} onMouseEnter={() => setFocusedElement(dataElement.id)} onMouseLeave={resetDot}></motion.div>
                <motion.p transition={{ ease: "easeInOut", duration: 0.2 }} animate={isFocused == dataElement.id ? "enter" : "exit"} variants={variants.focusedDate} className={styles.year}>{isFocused == dataElement.id ? dataElement.year : ""}</motion.p>
              </div>
              )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img_slider}>
        <motion.img transition={{ ease: "easeInOut", duration: 0.2 }} style={{left: "var(--border-width)"}} onClick={() => setScrollValue(scrollValue + 70)} className={styles.imgButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} src="/icons/left-chevron.png" alt="Next Icon" />
        <motion.img transition={{ ease: "easeInOut", duration: 0.2 }} style={{right: "var(--border-width)"}} onClick={() => setScrollValue(scrollValue - 70)} className={styles.imgButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} src="/icons/right-chevron.png" alt="Next Icon" />
        
        <ScrollContainer className={styles.scroll_container}>
            <motion.div transition={{ ease: "easeInOut", duration: 0.8 }} animate={{x: scrollValue + "vw"}} className={styles.cover_wrapper}>
              {rueckschau_data.map((dataElement, index) =>
                  <motion.div key={`Key${index}`} className="handle" style={{display: "inline-flex", marginRight: "-100px"}}>
                    <SliderElement key={dataElement.id} dataElement={dataElement} onClickHandler={onClickHandler} isFocused={isFocused} setFocusedElement={setFocusedElement} isDragging={isDragging}/>
                  </motion.div>
              )}
            </motion.div>  
          </ScrollContainer>
          
          <motion.div initial="closed" animate={isToggled ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 0.2 }} variants={variants.content} className={styles.detailView}>
            {wasClicked >= 0 ?
            <div className="content_container">
              <motion.img whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.90 }} className={styles.detailClose} onClick={() => setToggled(false)} draggable="false" src="/icons/error.png" alt="Back Button Icon" />
              <div style={{display: "flex"}}>
                <div>
                  <motion.img whileHover={{ scale: 1.05 }} className={styles.detailImg} draggable="false" src={rueckschau_data[wasClicked].img} alt="Arrow Icon" />
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <p className={styles.detailTitle}>{rueckschau_data[wasClicked].title}</p>
                  <div className={styles.line}></div>
                  <p className={styles.detailDate}>{rueckschau_data[wasClicked].date}</p>
                  <p className={styles.detailText}>{rueckschau_data[wasClicked].text}</p>
                </div>
              </div>
            </div> : <div></div>}
          </motion.div>
        </div>
    </div>
  )
}
