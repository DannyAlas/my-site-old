import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/projects'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="DGG_Chat_Browser_Extension">
      <Container>
        <Title>
        An image analysis tool built in PyQt <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, MacOS, Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Home Page</Meta>
            <Link href="https://wildrootlab.github.io/root-viewer/intro.html">
              Root Viewer v0.0.1a
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/wildrootlab/root-viewer">
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Language</Meta>
            <span>Python</span>
          </ListItem>
          <ListItem>
            <Meta>Status</Meta>
            <span>Active Development</span>
          </ListItem>
        </List>
        <P> 
        This is a project I&apos;m endeavoring on for my thesis to create a tool for image analysis. The tool is built in PyQt for the GUI, VisPy for 3D visualization, and a multitude of analysis tools to perform neuronal segmentation. The tool is designed to be used by neuroscience researchers to analyze various multi-dimensional data sets. The tool is still in development, but the current version is able to perform basic image analysis such as auto-segmenting neurons using Stardist and Cellpose ML algorithms, manual ROI manipulation, data filtering and thresholding, and measuring the properties of identified neurons.
        </P>
      </Container>
    </Layout>

  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  