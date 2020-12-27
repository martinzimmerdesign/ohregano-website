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

export default function Footer({ footerBg, noMargin }) {
  return (
      <div className={styles.container} style={{marginTop: noMargin == undefined ? "var(--border-width)" : "0", backgroundColor: footerBg == undefined ? "rgba(0,0,0,0)" : footerBg.toString() }}>
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
