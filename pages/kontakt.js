import Head from 'next/head'
import styles from '../styles/Kontakt.module.css'
import stylesFormular from '../sections/formular/Formular.module.css'
import Title from '../components/title/Title.js'
import Menu from '../components/menu/Menu.js'
import Footer from '../components/footer/Footer.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import { motion } from 'framer-motion'
import Paragraph from '../components/paragraph/Paragraph.js'
import Formular from '../sections/formular/Formular.js'
import Button from '../components/button/Button.js'

export default function Kontakt() {

  const variants = {
    basic: {
      enter: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 }
    },
  };

  return (
    <div>
    <PageContainer withFooter={true} menuTypeLanding={false} menuVisibility={true}>
      <ContentContainer>

      <SectionContainer>
        <Title title="Kontakt" caps={false} />
        <Paragraph sectionTitle={false} title="Interesse oder Fragen?" text="Haben Sie Interesse am Mitsingen oder allgemeine Fragen zum Chor? Dann nehmen Sie bitte gerne Kontakt zu uns auf!" />
        <Formular />
        <Paragraph sectionTitle={false} title="Hier proben wir." text="Sankt-Ursula-Weg 7, 21335 Lüneburg" />
        <motion.div variants={variants.basic} className={stylesFormular.line}></motion.div>
        <a href="#maps"><motion.div variants={variants.basic} className={styles.maps_container}>
          <motion.p variants={variants.basic} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.link}>Google Maps</motion.p>
        </motion.div></a>
      </SectionContainer>

      </ContentContainer>
    </PageContainer>
    </div>
  )
}
