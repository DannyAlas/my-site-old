import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/projects'
import Image from 'next/image'

const Work = () => (
  <Layout title="Jazzy Image Host">
    <Container>
      <Title>
        Neuroscince Poster. <Badge>2023</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Presented</Meta>
          <span>McNair Research Conference</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <span>Part of Undergraduate Thesis</span>
        </ListItem>
      </List>
      <br />
      <Link 
      target='_blank'
      href="https://cdn.danielalas.com/complete_poster.pdf">
      <Image
          loader={({ src }) => {
            return src
          }}
          src="https://imagedelivery.net/OvKXaypYgeWbThyyP_BSVQ/b5503fa9-96da-460a-7a6a-6b5a219b5b00/public"
          alt="Poster"
          width={1000}
          height={700}
        />
      </Link>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
