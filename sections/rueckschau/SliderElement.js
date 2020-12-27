import styles from './Slider.module.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SliderElement(props) {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const variants = {
        content: {
          open: { y: 0, opacity: 1, zIndex: 400},
          closed: { y: "100vh", opacity: 0, zIndex: 400, transition: {
            when: "afterChildren",
          }, },
        }
      }

    useEffect(() => {
    if(props.wasDotClicked && props.isFocused == 2) {
        setToggled(true);
    }
    });

  return (
      <div>
    <div onClick={toggleTrueFalse} onMouseEnter={() => props.setFocusedElement(2)} onMouseLeave={() => props.setFocusedElement(0)} style={{backgroundColor: props.isFocused == 2 ? "red" : "seagreen"}} className={styles.slide_element}></div>
          
        <motion.div initial="closed" animate={isToggled ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 0.2 }} variants={variants.content} className={styles.content_wrapper}>
        <div>
        <p className={styles.left_value}>Jetzt</p>
        <p className={styles.right_value}>1990</p>
        </div>
    </motion.div>
  </div>
  )
}
