import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  UnorderedList,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube, IoLogOut } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/NN.png'
import thumbInkdrop from '../public/images/links/Complexity.webp'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        An inquisitive introspective introvert based in Boulder, Colorado.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Alas
          </Heading>
          <p>Curious ( Researcher / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/dog.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Bio
        </Heading>
        <Paragraph>
            With what seems like passion for a bit of everything, I&apos;m often called a jack of all trades. From neuroscience and philosophy to computer science, photography, business, and robotics, it&apos;s hard to find things I&apos;m not interested in.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Professional Interests
          </Heading>
          <li padding={1}>
            Machine-Brain Interfaces
          </li>
          <li padding={1}>
            Neural Networks
          </li>
          <li padding={1}>
            Machine Learning
          </li>
          <li padding={1}>
            Network/Graph Analaysis
          </li>
          <li padding={1}>
            Systems Administration
          </li>
          <li padding={1}>
            Data Science
          </li>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Personal Interests
        </Heading>
        <UnorderedList>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=GQjGzl2w6uE" target="_blank">
              Photography
            </Link>
          </ListItem>
          <ListItem>
          Videography
          </ListItem>
          <ListItem>
            <Link herf="https://case-studies-fd0b94.webflow.io" target="_blank">
            Entrepreneurship
            </Link>
          </ListItem>
          <ListItem>
          Digital Marketing
          </ListItem>
          <ListItem>
          Gaming
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Notable Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/works/Custom_NN"
            title="Custom Neurul Network"
            thumbnail={thumbYouTube}
          >
            Custom Built Neural Network in Python
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Free Agent Simulation"
            thumbnail={thumbInkdrop}
          >
            Physarum Transport simulation built in Unity 
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find Me
        </Heading>
          <List >
          <SimpleGrid columns={4} gap={2}>
            <ListItem>
              <Link href="https://github.com/DannyAlas" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.youtube.com/channel/UCWdoRUs7EwO1vxkekbkCSxw" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoYoutube />}
                >
                  YouTube
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:danielalas65@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogOut />}
                >
                  Contact
                </Button>
              </Link>
          </ListItem>
          </SimpleGrid>
        </List>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'