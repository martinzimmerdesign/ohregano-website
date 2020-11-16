import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from "next/router";
import styles from './List.module.css'

export default function List() {

const router = useRouter();

  const variants = {
        link: {
          enter: { x: 0, opacity: 1 },
          exit: { x: -50, opacity: 0 }
        },
      };

  return (
    <ul className={styles.list  + " disable_select"}>
      <Link href="/"><motion.li className={router.pathname == "/" ? styles.active : ""} variants={variants.link}>Startseite</motion.li></Link>
      <motion.li variants={variants.link}>Musikalische Leitung</motion.li>
      <motion.li variants={variants.link}>Rückschau</motion.li>
      <motion.li variants={variants.link}>Mitgliederbereich</motion.li>
      <motion.li variants={variants.link}>Test</motion.li>
      <Link href="/kontakt"><motion.li className={router.pathname == "/kontakt" ? styles.active : ""} variants={variants.link}>Kontakt</motion.li></Link>
    </ul>
  )
}
