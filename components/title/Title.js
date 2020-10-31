import styles from './Title.module.css'
import { motion } from 'framer-motion'

export default function Title({ title, caps }) {

  const variants = {
    basic: {
      enter: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 }
    },
  };

  return (
      <div className={styles.container}>
        {/* caps: Change to uppercase */}
        <motion.h1 variants={variants.basic} style={{textTransform: caps ? "uppercase" : "none" }} className={styles.title}>{title}</motion.h1>
        <motion.div variants={variants.basic} className={styles.line}></motion.div>
      </div>
  )
}
