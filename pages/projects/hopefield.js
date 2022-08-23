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
      In this project, I endeavored to create Hopfield neural network. These are a type of neural network designed to be capable of storing and retrieving many multitudes of memories. I created an implementation of a Hopfield network from scratch in a Python Jupiter Notebook. The network was trained on the MNIST handwritten dataset and used PyGame to visualize the output. I created two ways to test the capabilities of the network, firstly you can simply ask the network to draw a number. This will have the access all its memories regarding that number, and create a unique drawing of it. Secondly, you can input a scrambled up version of a number.  This will have the network use it's memories of numbers to create a best guess for the original unscrambeled number.
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
