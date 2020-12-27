import styles from './Button.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Button({ title, link, color }) {

  const variants = {
    basic: {
      enter: { y: 0, opacity: 1 },
      hover: { scale: 1.05 },
      tap: { scale: 0.95 },
      exit: { y: 50, opacity: 0 }
    },
    arrow: {
      enter: {
        x: 0,
      },
      hover: { x: -10,
        transition: { repeat: Infinity, repeatType: "mirror", duration: 0.5, ease: "easeOut" },
      },
      exit: {
        x: 0,
      }
    }
  };

  return (
    <Link href={"/" + link}>
      {/* Change default-color to custom-color*/}
      <motion.div variants={variants.basic} style={{backgroundColor: color == undefined ? "var(--color-main)" : color.toString() }} className={styles.container + " disable_select"}>
        <a className={styles.title}>{title}</a>
        {/* Static img directly imported from public/ */}
        <motion.img variants={variants.arrow} className={styles.icon} src="/icons/arrow.png" alt="Button Icon" />
      </motion.div>
    </Link>
  )
}
