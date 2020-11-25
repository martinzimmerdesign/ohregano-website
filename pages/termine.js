import Head from 'next/head'
import Title from '../components/title/Title.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import Paragraph from '../components/paragraph/Paragraph.js'

export default function Termine() {

  return (
    <div>
    <PageContainer withFooter={true} menuTypeLanding={false} menuVisibility={true}>
      <ContentContainer>

      <SectionContainer>
        <Title title="Termine" caps={false} />
        <Paragraph sectionTitle={false} title="Konzerte in Lüneburg und Umgebung." text="Aus Anlass der Covid-19 Pandemie ist es uns aktuell nicht möglich, einen Ausblick auf künftige Veranstaltungen unseres Chores zu geben. Sobald wir wieder Konzerte geben dürfen, informieren wir Sie an dieser Stelle darüber. Bleiben Sie gesund und uns gewogen. Ihr Chor Oregano." />
      </SectionContainer>

      </ContentContainer>
    </PageContainer>
    </div>
  )
}
