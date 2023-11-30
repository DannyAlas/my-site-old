import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Jazzy Image Host">
    <Container>
      <Title>
        A simple image and file host. <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, MacOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Home Page</Meta>
          <Link href="https://host.danielalas.com/all">
            Hosted Images <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/jazzyhost">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python, JS</span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span>Active Development</span>
        </ListItem>
      </List>
      <P>
        This is a project I&apos;m working on to create a simple image and file
        host. The tool is built in Python using FastAPI for the backend and
        a static frontend. The tool is designed to be used mainly by myself
        to upload and share images and files on the web. As such, uploading is allowed
        only by me and some trusted users.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
