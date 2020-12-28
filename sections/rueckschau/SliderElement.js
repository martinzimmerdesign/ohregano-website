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
    if(props.wasDotClicked && props.isFocused == props.id) {
        setToggled(true);
    }
    });

  return (
    <div>
        <div onClick={props.isDragging == false ? toggleTrueFalse : console.log("nein") } onMouseEnter={() => props.setFocusedElement(props.id)} onMouseLeave={() => props.setFocusedElement(0)} style={{backgroundColor: props.isFocused == props.id ? "red" : "seagreen"}} className={styles.slide_element}></div>
        {isToggled ?
        <motion.div initial="closed" animate={isToggled ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 0.2 }} variants={variants.content}>
            <div>
                <p className={styles.left_value}>Jetzt</p>
                <p className={styles.right_value}>1990</p>
            </div>
        </motion.div>
        : <div></div>}
    </div>
  )
}

/* 
TODO:
- Jahreszahl über Slider D1
- Horizontal Scrolling with dragging D1
- Button to move right/left horizontally
- Detail Layout for every image
*/