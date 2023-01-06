import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  AspectRatio,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="DGG_Chat_Browser_Extension">
    <Container>
      <Title>
        DGG Chat Browser Extension <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Chrome, Edge, FireFox, Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Download for Chrome</Meta>
          <Link href="https://chrome.google.com/webstore/detail/dgg-chat-for-youtube/ncbnabljhfmaedpkdgcoembdcpdbnkma?hl=en&authuser=0">
            v0.1.1
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/Neural-Network-1">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Javascript, HTML, CSS</span>
        </ListItem>
      </List>
      <Image
        style={{ height: 100 }}
        src="https://raw.githubusercontent.com/DannyAlas/DGG-For-Youtube/main/img/dgg.png"
        alt="DGG Chat"
      />
      <P>
        In this project I created a lightweight extension that replaces the
        native Youtube Live chat and Twitch chat with an embeded destiny.gg
        chat.
      </P>
      <P>
        This was the first time I ever built a browser extension. I used the
        chromium extension API to create both the manifest version 3 for
        browsers like Chrome and Edge and then manifest versin 2 for Firefox and
        Safari browsers. The extension uses Jquery to identify and manipulate
        DOM elements in the content page of a browser to show an custom built
        embed of the destiny.gg chat. It also uses the Youtube API to give
        helpful statistics about when a Youtuber is live as well as their latest
        video. Here&apos;s and implementation of the chat portion of extension
        in action:
      </P>
      <center>
        <AspectRatio ratio={1}>
          <iframe
            src="https://www.destiny.gg/embed/chat"
            title="Destiny.gg Chat"
            frameBorder="0"
            allow="clipboard-write; encrypted-media"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </center>
      <center>
        <AspectRatio ratio={1.7} my={10}>
          <iframe
            src="https://www.youtube.com/embed/vyIXHYPlO-w"
            title="Destiny.gg Chat"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </center>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          User reviews&nbsp;
          <Link
            target="_blank"
            href="https://chrome.google.com/webstore/detail/dgg-chat-for-youtube/ncbnabljhfmaedpkdgcoembdcpdbnkma?hl=en&authuser=0"
          >
            From Chrome
          </Link>
        </Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
