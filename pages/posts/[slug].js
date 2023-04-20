// pages/posts/[slug].js
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/posts'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return {
    props: {
      post,
    },
  }
}



const PostLayout = ({ post }) => {

  const Content = getMDXComponent(
    post.body.code

  )
  
  return (

    <Layout title={post.title}>
      {/* FIXME: find a way to style only the arctile, using jsx without global doesn't work */}
    <Container maxW="container.l">
      <Title>
        {post.title} <Badge><time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time></Badge>
      </Title>
      <List ml={4} my={4}>
        {post.tags.map((tag, idx) => (
          <ListItem key={idx}>
            <Meta>{tag.meta}</Meta>
            {tag.link && <Link href={tag.link}>{tag.text} <ExternalLinkIcon mx="2px" /></Link>}
            {!tag.link && <span>{tag.text}</span>}
          </ListItem>
        ))}
      </List>
      <Container maxW="container.l" className='postContent' >
        <Content />
      </Container>
    </Container>
  </Layout>
  )
}

export default PostLayout