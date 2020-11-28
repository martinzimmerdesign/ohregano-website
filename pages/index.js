import Head from 'next/head'
import Button from '../components/button/Button.js'
import Title from '../components/title/Title.js'
import Paragraph from '../components/paragraph/Paragraph.js'
import Landing from '../sections/landing/Landing.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import { motion } from 'framer-motion'
import List from '../components/menu/List.js'
import useWindowSize from '../hooks/useWindowSize.js'
import styles from '../styles/Startseite.module.css'
import Footer from '../components/footer/Footer.js'
import { useState, useEffect, useRef } from 'react'

export default function Startseite({ data }) {

  // get width and height
  const size = useWindowSize();

  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!isVisible);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Refresh state directly once
      setGoingUp(true);
      // width from hook via index.js
      if(size.width > 1280) {
        if (currentScrollY < 500) {
          setVisibility(false);
        } else {
          setVisibility(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const variants = {
    basic: {
      enter: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 }
    },
  };

  return (
    <div>
    {/* If width < 1280 set visibility to be always true, else depending on y scroll */}
    <PageContainer withFooter={false} menuTypeLanding={true} menuVisibility={size.width > 1280 ? isVisible : true}>
      {/* Pass width to landing section */}
      <Landing List={<List />} width={size.width}/>

      <ContentContainer>
        <SectionContainer>
          <Title title="Ohregano" caps={true} />
          <div className={styles.start_wrapper}>
            <div>
              <Paragraph sectionTitle={false} title="Lüneburgs gemischter Chor." text="Unser Chor wurde 1990 in Lüneburg gegründet und bestand zunächst aus einem kleinen privaten, singbegeisterten Freundeskreis. Mittlerweile sind wir gut 40 aktive Sängerinnen und Sänger." />
              <Button title="kontakt" link="kontakt" />
            </div>
            <motion.div variants={variants.basic} className={styles.termin_container}>
              <img className={styles.icon} src="/icons/calendar.png" alt="Calendar Icon" />
              <div className={styles.termin_text}>
                <p className={"paragraph " + styles.text}><b>MITSINGEN</b><br />Wöchentliche Probe:<br />Mittwochs  20 – 22 Uhr<br />Musikschule Lüneburg<br /></p>
                <p className="note" style={{color: "gray", fontStyle: "italic"}}>(Nicht in den Schulferien)</p>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </ContentContainer>

      <div className={styles.container}>
        <img className={styles.left} src="/covers/2006gross.jpg" alt="Chor Cover 1" />
        <img className={styles.middle} src="/covers/2012tanz_gross.jpg" alt="Chor Cover 2" />
        <img className={styles.right} src="/covers/2008gross.png" alt="Chor Cover 3" />

        <svg className={styles.svg_mobile} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 620">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L120,256C240,224,480,160,720,133.3C960,107,1200,117,1320,122.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--color-bg-shape)" fillOpacity="1" d="M0,32L120,74.7C240,117,480,203,720,213.3C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>

        <div className={styles.wrapper}>
          <ContentContainer>
            <SectionContainer>
              <Paragraph sectionTitle={true} title="Diversität." text="Große Gesamtwerke, wie z. B. Carmina Burana von Carl Orff, Canto General von Mikis Theodorakis und Misa Criolla von Ariel Ramirez, wechseln sich ab mit Liederprogrammen: „Liebe zwischen den Zeilen“, „Lieder von Grau bis Schwarz“, „Meine erste Single“ oder „Liederliche Arbeit“." />
              <Button title="rückschau" link="kontakt" color="#F7882F" />
            </SectionContainer>
          </ContentContainer>
        </div>
        <Footer footerBg="var(--color-bg-shape)"/>
      </div>

    </PageContainer>
    </div>
  )
}
