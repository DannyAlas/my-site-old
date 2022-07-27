import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hopefield Neural Network">
    <Container>
      <Title>
        Hopefield Neural Network <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/hopefeild-nn">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python [Pygame], Jupyter Notebook</span>
        </ListItem>
      </List>
      <P>
      In this project, I endeavored to create Hopfield neural network. These are neural networks designed to be capable of storing and retrieving many multitudes of memories. I created an implementation of a Hopfield network from scratch in a python Jupiter notebook. The network was trained on the MNIST handwritten dataset and used PyGame to visualize the output. To test the capabilities of the network, I would feed it an initial scrambled image of a number from the dataset and then have it reconstruct/fix the number from memory.
      </P>
      <WorkImage
        src="/images/projects/hopefield_prediction.webp"
        alt="prediction"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
