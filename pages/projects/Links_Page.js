import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="DGG_Chat_Browser_Extension">
    <Container>
      <Title>
        Links In Bio Page <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/Web-Links">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>HTML, CSS</span>
        </ListItem>
      </List>
      <P>
        A lightweight and simple page that directs users to my relavent links. 
      </P>
      <center>
        <AspectRatio ratio={1}>
          <iframe
            src="https://links.danielalas.com/"
            title="Links Page"
            frameBorder="0"
            allow="clipboard-write; encrypted-media"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
