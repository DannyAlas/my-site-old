import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem2 } from '../components/grid-item'
import thumbHomeLab from '../public/images/posts/eris.jpg'

const Blog = () => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Blog
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem2
            id="Home_Lab"
            title="My Home Lab (Late 2022)"
            thumbnail={thumbHomeLab}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../components/chakra'
