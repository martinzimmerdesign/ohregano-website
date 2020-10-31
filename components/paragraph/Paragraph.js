import styles from './Paragraph.module.css'
import { motion } from 'framer-motion'

export default function Paragraph({ title, text, sectionTitle }) {

  const variants = {
    basic: {
      enter: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 }
    },
  };

  return (
      <div>
        <motion.h1 variants={variants.basic} className={sectionTitle ? styles.section_title : styles.paragraph_title}>{title}</motion.h1>
        <motion.p variants={variants.basic} className={styles.paragraph}>{text}</motion.p>
      </div>
  )
}
