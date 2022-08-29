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
        My Old Website <Badge>2021</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/Dans-Production">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>HTML, CSS, Javascript, Webflow</span>
        </ListItem>
      </List>
      <P>
        This was my previous website. Build with native Javascript, it was my first endeavour into a personal landing page.
      </P>
      <center>
        <AspectRatio ratio={1}>
          <iframe
            src="https://old.danielalas.com/"
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
