import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NLP Witcher">
    <Container>
      <Title>
        Natural Language Processing the Witcher Books <Badge>2022</Badge>
      </Title>
      <List ml={3} my={2}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/NLP-Witcher-Character-Relationships">
          GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python, Jupyter Notebook</span>
        </ListItem>
      </List>
      <P>
      A natural language project where I scraped data from the Witcher books and use Spacy to analyze character relationships. Web scraping was performed on the Witcher Books Fandom page to extract all characters within the series. The book text was scraped from <Link href="https://github.com/dworschak/Witcher" target="_blank">this</Link> repository. Spacy was used to analyze the book text and extract characters which would then be checked against the scraped character list from the web. A rolling window was used to analyze relationships in the text where relationships where established whenever characters apaeared together within the winodow. When more than two characters appeared within the window, each character is assumed to have a relationship with all other characters in the window. Analysis was then performed and visualzations were created Pandas.
      </P>
      <WorkImage src="https://raw.githubusercontent.com/DannyAlas/NLP-Witcher-Character-Relationships/main/img/network.png" alt="Network" />
      <WorkImage src="https://raw.githubusercontent.com/DannyAlas/NLP-Witcher-Character-Relationships/main/img/top_10_characters.png" alt="top10" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
