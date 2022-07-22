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
          <span>Python, Jupyter Notebook</span>
        </ListItem>
      </List>
      <P>
        Hopfield Networks are neural networks capable of storing and retrieving
        multiple memories. I created an implementation of Hopfield Networks from
        scratch in a python jupyter notebook. The network was trained on the
        MNIST handwritten dataset and using PyGame I had the network to
        recontruct images of numbers based of off scrambled initial images.
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
