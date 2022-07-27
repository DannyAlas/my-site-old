import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Reddit R/Place Visualization">
    <Container>
      <Title>
        Reddit R/Place Visualization <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/r-place">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python, Jupyter Notebook</span>
        </ListItem>
      </List>
      <P>
        In 2017 Reddit ran an experiment that involved an online canvas of 1000x1000 pixels
        located at the subreddit known as r/place. Registered users could edit
        the canvas by changing the color of a single pixel with a one of their choice from a 16-color palette. After each pixel was placed, a timer prevented the user from placing any more pixels for a period of time varying from 5 to 20 minutes. Much of the user enjoyment came out of the limited power any individual user possessed to change the canvas. Due to the time limit, users were
        forced to colloborate in groups to create large artworks and defend them from other users, who would often place pixels their art. The experiment was ended by Reddit administrators about 72 hours after its creation, on 3 April 2017. Over 1 million users edited the canvas, placing a total of approximately 16 million pixels, and, at the time the experiment was ended, over 90,000 users were actively viewing or editing the canvas.
      </P>

      <P>
        On 1 April 2022, Reddit began a reboot of the experiment that lasted for four days. It included two expansions of the canvas to allow for more space alongside two color palette expansions on the second and third days. Unlike in 2017, individual subreddits immediately began to coordinate in designing pixel art, and large communities were formed on Discord and Twitch in attempts to expand existing art, replace defaced pixels, and superimpose new images over existing ones. By the 3rd of April, nearly 72 million pixels were placed by over 6 million users, at a pace of more than 2.5
        million pixels placed per hour. On the final day, a few hours before the 2022 Place event ended, users became restricted to placing only white pixels. The entire canvas was gradually filled with white space, returning it to its original blank state.
      </P>

      <P>
        In this project, I attempt to analyze the 2022 event using data collected from personal bots, the official release data, and other wonderful data collection efforts. The data ended up being around 40+ Gb’s, and thus formatting, synchronization, and storage become a large concern. The largest part of this project was actually creating a usable dataset, which is now hosted on Kaggle. It is a parquet data file that contains ordered time, user, and pixel data for the entire event. I have also used the data for the statistics you see here alongside heat map visualizations of the most popular places on the canvas. As time allows, I intend to continue analyzing the data, with prospects to identify bot-placed pixels, video recreations of the event, and user rankings for statistics such as most helpful, most destructive, most active, etcetera.
      </P>

      <center>
        2017 Final Canvas
        <WorkImage src="/images/works/2017-final.png" alt="R/Place 2017" />
      </center>
      <center>
        2022 Final Canvas
        <WorkImage src="/images/works/2022-final.png" alt="R/Place 2020" />
      </center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
