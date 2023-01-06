import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNN from '../public/images/links/NN.png'
import thumbWitcher from '../public/images/projects/witcher_network.png'
import Hopefield from '../public/images/projects/hopefield.jpg'
import Rplace from '../public/images/projects/2022-final.png'
import thumbExtension from '../public/images/projects/dgg.png'
import thumbLinks from '../public/images/projects/links-page.png'
import thumbOld from '../public/images/projects/old-website.png'
import thumbRV from '../public/images/projects/root_viewer.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Some Recent Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="Root_Viewer"
            title="Root Viewer"
            thumbnail={thumbRV}
          >
            A scientific image analysis tool built in Python for analyzing and
            segmenting neurons.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Custom_NN"
            title="Custom Neural Network"
            thumbnail={thumbNN}
          >
            A Custom Neural Network built to analyze the MNIST handwritten digit
            dataset.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="NLP_Witcher_Relationships"
            title="NLP Witcher Books"
            thumbnail={thumbWitcher}
          >
            A NLP project to analyze relationships in the Witcher book&apos;s.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="hopefield"
            title="Hopefield Network"
            thumbnail={Hopefield}
          >
            A Hopefield network created to the analyze patterens in the MNIST
            handwritten digit dataset.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="r-place_Visulization"
            title="Reddit r/place Visulization"
            thumbnail={Rplace}
          >
            Formatting and visualizing the Reddit r/place event data (2022).
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Browser_Extension"
            title="Browser Extension"
            thumbnail={thumbExtension}
          >
            A custom browser extension built to replace the Youtube live chat
            with a thrid-party chat.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Links_Page"
            title="Links Page"
            thumbnail={thumbLinks}
          >
            A simple &apos;links in bio&apos; page built with HTML and CSS.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Old_Website"
            title="Old Website"
            thumbnail={thumbOld}
          >
            My old website built with native Javascript and Webflow animations
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
