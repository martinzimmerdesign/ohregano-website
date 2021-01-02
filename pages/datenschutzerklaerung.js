import Head from 'next/head'
import Title from '../components/title/Title.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import Paragraph from '../components/paragraph/Paragraph.js'

export default function Datenschutzerklärung() {

  return (
    <div>
    <PageContainer withFooter={true} menuTypeLanding={false} menuVisibility={true}>
      <ContentContainer>
        <SectionContainer>
            <Title title="Datenschutzerklärung" caps={false} />

        </SectionContainer>
      </ContentContainer>
    </PageContainer>
    </div>
  )
}
