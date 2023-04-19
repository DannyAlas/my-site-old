import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItemPosts } from '../components/grid-item'
import thumbHomeLab from '../public/images/posts/eris.jpg'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'


export default function Posts() { 
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

return (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Blog
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {posts.map((post, idx) => (
            <WorkGridItemPosts
              key={idx}
              post={post}
            ></WorkGridItemPosts>
          ))}
              
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)}

