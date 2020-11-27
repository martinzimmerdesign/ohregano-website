import Head from 'next/head'
import styles from '../styles/Leitung.module.css'
import Title from '../components/title/Title.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import { motion } from 'framer-motion'
import Paragraph from '../components/paragraph/Paragraph.js'
export default function Leitung() {

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
            <Title title="Musikalische Leitung" caps={false} />
            <div className={styles.wrapper}>
                <div className={styles.img_wrapper}>
                    <motion.img variants={variants.basic} className={styles.img} src="/anka_fiedler.jpg" alt="Anka Fiedler Image" />
                </div>
                <motion.div variants={variants.basic} className={styles.line}></motion.div>
                <div className={styles.text}>
                    <Paragraph sectionTitle={false} title="Anka Fiedler" text="Ich bin studierte Musikerin sowie Atem-, Sprech- und Stimmlehrerin." />
                    <Paragraph sectionTitle={false} text="Seit vielen Jahren leite ich mehrere Chöre, darunter nun auch den gemischten Chor Ohregano in Lüneburg." />
                    <Paragraph sectionTitle={false} text="Damit das Singen der Lieder und Stücke – Pop, gelegentlich Klassik oder auch mal leicht Jazziges – richtig Spaß macht, starte ich die Chorproben mit einem Einsingen und gebe den SängerInnen zwischendurch auch mal stimmtechnische Tipps. Die Proben mit Ohregano machen mir viel Vergnügen, und ich freue mich schon auf unsere ersten Auftritte!" />
                    <Paragraph sectionTitle={false} text="Für Fragen und weitere Infos stehe ich gerne zur Verfügung." />
                </div>
            </div>
        </SectionContainer>
      </ContentContainer>
    </PageContainer>
    </div>
  )
}
