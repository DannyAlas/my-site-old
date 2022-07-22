import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Custon Neural Network">
    <Container>
      <Title>
        Custon Neural Network <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/Neural-Network-1">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python, Jupyter Notebook</span>
        </ListItem>
      </List>
      <P>
        Anyone with even some cursuory knowledge in AI/ML likely knows the
        basics about neural networks.You connect a few of layers of nodes with
        weights and biases, train it on some data, and bingo, you&apos;ve got a
        network that can recognize dogs or predict stock prices.
      </P>
      <P>
        I&apos;ve always found this high-level understanding a little
        wishy-washy, though. Even when working through Kaggle courses over the
        summer, fully building out these models in Tensorflow, I felt like I
        didn&apos;t understand what was going on or what I should be paying
        attention to in the code.
      </P>
      <P>
        I didn&apos;t begin building this intuition though until i took Andrew
        Ng&apos;s Intro to ML course on Coursera, which taught ML principles and
        design not using Tensorflow or Keras but Matlab instead. For me, this
        more concrete technical understanding was a huge boost for my
        understanding of ML overall. To further solidify my learning, I spent a
        few hours over the past few days building a simple neural network from
        scratch, and trained it to recognize handwritten digits from the MNIST
        dataset.
      </P>
      <P>
        In the{' '}
        <Link href="https://github.com/dworschak/Witcher" target="_blank">
          Jupyter Notebook{' '}
        </Link>
        I give a more detailed walkthourgh of my process and code design.
      </P>
      <P>
        The dataset used is the MNIST handwritten digit dataset. It contains 28
        x 28 grayscale images of handwritten digits. Each image is accompanied
        by a label of what digit it belongs to, from 0 to 9. The task is to
        build a network that takes in an image and predicts the written digit.
      </P>

      <WorkImage
        src="https://raw.githubusercontent.com/DannyAlas/Neural-Network-1/main/img/NN_Learning_Curve.png"
        alt="NN Learning Curve"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
