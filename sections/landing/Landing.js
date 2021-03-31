import styles from './Landing.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Slide } from "react-slideshow-image";

export default function Landing({ List, width }) {

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Refresh state directly once
      setGoingUp(true);
      // width from hook via index.js
      //let dots = document.getElementsByClassName("indicators");
      if(width > 1280) {
        if (currentScrollY < 500) {
          setToggled(false);
          //dots[0].style.opacity = 1;
        } else {
          setToggled(true);
          // Removes note from the document
          let element = document.getElementsByClassName(styles.scroll_note);
          element[0].style.opacity = 0;
          //dots[0].style.opacity = 0;
        }
      }
      if(width < 1280) {
        if (currentScrollY > 400) {
          let element = document.getElementsByClassName(styles.icon_mobile);
          element[0].style.opacity = 0;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const variants = {
        text: {
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.16,
              },
          },
          exit: { x: 0, opacity: 0 }
        },
        sidebar: {
          enter: {
            x: 0,
            transition: {
              staggerChildren: 0.16,
              easing: "circInOut",
              },
          },
          exit: {
            x: -550
          }
        },
        sidebarChildren: {
          enter: { x: 0 },
          exit: { x: -550 }
        },
        sidebar_mobile: {
          enter: { x: 0 },
          exit: { x: 0 }
        },

        list: {
          enter: {
            transition: {
              staggerChildren: 0.1,
              },
          },
          exit: {}
        },
        buttonSlider: {
          visible: { scale: 1, opacity: 1},
          invisble: { scale: 0.7, opacity: 0 },
        },
        logo: {
          enter: { opacity: 1, y: 0, transition: {
            delay: 0.2,
            easing: "easeOutCirc",
            },},
          exit: { opacity: 0, y: 30 },
        },
        logo_mobile: {
          enter: { opacity: 1, y: 0, transition: {
            delay: 0.2,
            easing: "easeOutCirc",
            },},
          exit: { opacity: 0, y: 30 },
        },

      };

      const properties = {
        duration: 4000,
        autoplay: width > 1280 ? true : false,
        pauseOnHover: false,
        transitionDuration: 800,
        arrows: false,
        infinite: true,
        easing: "cubic",
        indicators: (i) => <div className="indicator"></div>
      };

      const slideRef = useRef(null);

  return (
      <div className={styles.container}>
      {/* isToggled = true, wenn es weg ist. Daher !isToggle, damit enter und exit wieder Sinn ergibt */ }
        <motion.div
            variants={width > 1280 ? variants.sidebar : variants.sidebar_mobile}
            initial="exit"
            animate={!isToggled ? "enter" : "exit"}
            exit="exit"
            className={styles.left_container}>
          <motion.img variants={width > 1280 ? variants.logo : variants.logo_mobile} className={styles.logo} src="/logo.png" alt="Logo Image" />
          <div className={styles.menu}>
            <motion.div className={styles.line}></motion.div>
            <motion.div variants={variants.list}>
            {List}
            </motion.div>
          </div>
          <motion.div animate={{ y: -20 }}
    transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.2, ease: "easeOut" }} className={styles.scroll_note}>
            <motion.p variants={variants.text}>Scroll runter</motion.p>
            <img className={styles.icon} src="/icons/down-arrow-of-angle.png" alt="Arrow Icon" />
          </motion.div>
        </motion.div>

        {/* Für mobile */ }
        <motion.div className={styles.icon_mobile} animate={{ y: 50 }}
  transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.2, ease: "easeOut" }}>
          <img src="/icons/down-arrow-of-angle.png" alt="Arrow Icon" />
        </motion.div>

        <div className={styles.slider_button_container}>
        <motion.img animate={!isToggled ? "visible" : "invisble"} variants={variants.buttonSlider} className={styles.img_buttons + " disable_select"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => slideRef.current.goBack()} src="/icons/left-chevron.png" alt="Back Icon" />
        <motion.img animate={!isToggled ? "visible" : "invisble"} variants={variants.buttonSlider} className={styles.img_buttons + " disable_select"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => slideRef.current.goNext()} src="/icons/right-chevron.png" alt="Next Icon" />
        </div>

        <motion.div className={styles.slider_container}>
          <Slide ref={slideRef} {...properties}>
            <div className={styles.img6}></div>
            <div className={styles.img1}></div>
            <div className={styles.img3}></div>
            <div className={styles.img4}></div>
          </Slide>
        </motion.div>

      </div>
  )
}
