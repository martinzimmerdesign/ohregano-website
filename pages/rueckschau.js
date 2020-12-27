import Head from 'next/head'
import styles from '../styles/Rueckschau.module.css'
import Title from '../components/title/Title.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import Paragraph from '../components/paragraph/Paragraph.js'
import Slider from '../sections/rueckschau/Slider.js'

export default function Rueckschau() {


  return (
    <div>
    <PageContainer withFooter={true} menuTypeLanding={false} menuVisibility={true} noMargin={true}>
      <ContentContainer>
        <SectionContainer>
            <Title title="Rückschau" caps={false} />
            <Paragraph sectionTitle={false} title="Wir haben viel erlebt." text="Unser Chor wurde 1990 in Lüneburg gegründet und bestand zunächst aus einem kleinen privaten, singbegeisterten Freundeskreis." />
            <Paragraph sectionTitle={false} text="Klicke und bewege die Plakate für mehr Informationen." />
        </SectionContainer>
      </ContentContainer>
      <Slider />
    </PageContainer>
    </div>
  )
}
