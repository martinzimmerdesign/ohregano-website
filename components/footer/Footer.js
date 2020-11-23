import styles from './Footer.module.css'
import Link from 'next/link'
import SectionContainer from '../container/SectionContainer.js'
import { motion } from "framer-motion"

const variants = {
  basic: {
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
  },
};

export default function Footer({ footerBg }) {
  return (
      <div className={styles.container} style={{backgroundColor: footerBg == undefined ? "rgba(0,0,0,0)" : footerBg.toString() }}>

        {/*
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="var(--color-footer-secondary)" fillOpacity="1" d="M0,256L120,224C240,192,480,128,720,101.3C960,75,1200,85,1320,90.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            <path fill="var(--color-footer-main)" fillOpacity="1" d="M0,288L120,266.7C240,245,480,203,720,197.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
        */}

          <div className={styles.content_wrapper}>
          <div className={"content_container " + styles.inner}>
          <SectionContainer>
            <div className={styles.top}>
                <motion.div variants={variants.basic} className={styles.first + styles.line}></motion.div>
                <motion.div variants={variants.basic} className={styles.top_inner} style={{display: "flex", flexDirection: "column"}}>
                  <p className={styles.text}><b>Wöchentliche Probe:</b><br />Mittwochs  20 – 22 Uhr<br />Musikschule Lüneburg<br /></p>
                  <p className="note" style={{color: "gray", fontStyle: "italic"}}>(Nicht in den Schulferien)</p>
                </motion.div>

                <motion.div variants={variants.basic} className={styles.line}></motion.div>
                <motion.p variants={variants.basic} className={styles.links}>
                  <Link href="/termine"><a><b>Aktuelle Termine</b></a></Link><br />
                  <Link href="/kontakt"><a><b>Kontakt</b></a></Link><br />
                  <Link href="/impressum"><a>Impressum</a></Link><br />
                  <Link href="/datenschutzerklaerung"><a>Datenschutzerklärung</a></Link><br />
                </motion.p>
            </div>
            <motion.div variants={variants.basic} className={styles.bottom}>
            <p className="note" style={{color: "white", opacity: "0.4", padding: "20px 0px"}}>Copyright © 2020 Ohregano - Alle Rechte vorbehalten.</p>
            <img className={styles.logo} src="/icons/logo-mzd.png" alt="Martin Zimmer Design Logo" />
            </motion.div>
          </SectionContainer>
        </div>
        </div>
      </div>
  )
}
