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

  const Content = getMDXComponent(post.body.code)

  return (
    <Layout title="Links in Bio Page">
    <Container>
      <Title>
        {post.title} <Badge><time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time></Badge>
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
      <Content />
    </Container>
  </Layout>
  )
}

export default PostLayout