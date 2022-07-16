import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNN from '../public/images/links/NN.png'
import thumbWitcher from '../public/images/works/witcher_network.png'
import Hopefield from '../public/images/works/hopefield.jpg'
import Rplace from '../public/images/works/2022-final.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Recent Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
          id="Custom_NN" 
          title="Custom Neural Network" 
          thumbnail={thumbNN}>
          
          A Custom Neural Network built to analyze the MNIST handwritten digit dataset.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="NLP_Witcher_Relationships"
            title="NLP Witcher Books"
            thumbnail={thumbWitcher}
          >
            A NLP project to analyze relationships in the Witcher book's.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="hopefield"
            title="Hopefield Network"
            thumbnail={Hopefield}
          >
            A Hopefield network created to the analyze patterens in the MNIST handwritten digit dataset.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="r-place-Visulization" 
          title="Reddit r/place Visulization"
          thumbnail={Rplace} >
            Formatting and visualizing the Reddit r/place event data (2022).
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
