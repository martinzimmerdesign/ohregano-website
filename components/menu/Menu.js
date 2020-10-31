import styles from './Menu.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import List from './List.js'

export default function Menu({ visibility }) {

const [isToggled, setToggled] = useState(false);
const toggleTrueFalse = () => setToggled(!isToggled);

const variants = {
  button: {
    visible: { scale: 1, opacity: 1},
    invisble: { scale: 0.7, opacity: 0 },
  },
  top: {
    open: { rotate: 45, y: 10 },
    closed: { rotate: 0, y: 0 },
  },
  middle: {
    open: { width: "0px" },
    closed: { width: "34px" },
  },
  bottom: {
    open: { rotate: -45, y: -10 },
    closed: { rotate: 0, y: 0 },
  },
  content: {
    open: { y: 0, opacity: 1, zIndex: 400},
    closed: { y: "100vh", opacity: 0, zIndex: 400, transition: {
      when: "afterChildren",
    }, },
  }
}

  return (
      <div className={styles.container}>
        <motion.div className={styles.button} initial="invisble" transition={{ duration: 0.2 }} animate={isToggled ? (visibility ? "visible" : "visible") : (visibility ? "visible" : "invisble") } style={{backgroundColor: isToggled ? "var(--color-secondary)" : "var(--color-main)"}} variants={variants.button} onClick={toggleTrueFalse} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <p className={styles.button_text + " disable_select"}>Menü</p>
          <div className={styles.hamburger}>
            <motion.div className={styles.top} animate={isToggled ? "open" : "closed"} variants={variants.top}></motion.div>
            <motion.div className={styles.middle} animate={isToggled ? "open" : "closed"} variants={variants.middle}></motion.div>
            <motion.div className={styles.bottom} animate={isToggled ? "open" : "closed"} variants={variants.bottom}></motion.div>
          </div>
        </motion.div>
        {/* TEMP: erstmal die Funktionalität */}
        <motion.div initial="closed" animate={isToggled ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 0.2 }} variants={variants.content} className={styles.content_wrapper}>
          <div>
            <List />
          </div>
        </motion.div>
      </div>
  )
}
