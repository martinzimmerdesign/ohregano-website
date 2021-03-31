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
        <Paragraph sectionTitle={false} title="Interesse oder Fragen?" text="Der Chor freut sich jederzeit über neue Mitsängerinnen und Mitsänger. Kommen Sie doch einfach mal zum Reinschnuppern am Mittwochabend bei uns vorbei oder senden Sie uns eine Nachricht" />
        <Formular />
        <Paragraph sectionTitle={false} title="Hier proben wir." text="Sankt-Ursula-Weg 7, 21335 Lüneburg" />
        <motion.div variants={variants.basic} className={stylesFormular.line}></motion.div>
        <a href="https://www.google.com/maps/place/Musikschule,+Sankt-Ursula-Weg+7,+21335+L%C3%BCneburg/@53.2442604,10.4034871,17z/data=!3m1!4b1!4m5!3m4!1s0x47b1ddcc1c499b0b:0xb4dcc07c6484f61b!8m2!3d53.2442604!4d10.4056758"><motion.div variants={variants.basic} className={styles.maps_container}>
          <motion.p variants={variants.basic} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.link}>Google Maps</motion.p>
        </motion.div></a>
      </SectionContainer>

      </ContentContainer>
    </PageContainer>
    </div>
  )
}
