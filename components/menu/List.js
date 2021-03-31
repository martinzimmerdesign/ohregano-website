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
      <Link href="/leitung"><motion.li className={router.pathname == "/leitung" ? styles.active : ""} variants={variants.link}>Musikalische Leitung</motion.li></Link>
      <Link href="/rueckschau"><motion.li className={router.pathname == "/rueckschau" ? styles.active : ""} variants={variants.link}>Rückschau</motion.li></Link>
      <Link href="/mitgliederbereich"><motion.li className={router.pathname == "/mitgliederbereich" ? styles.active : ""} variants={variants.link}>Mitgliederbereich</motion.li></Link>
      <Link href="/termine"><motion.li className={router.pathname == "/termine" ? styles.active : ""} variants={variants.link}>Termine</motion.li></Link>
      <Link href="/kontakt"><motion.li className={router.pathname == "/kontakt" ? styles.active : ""} variants={variants.link}>Kontakt</motion.li></Link>
    </ul>
  )
}
