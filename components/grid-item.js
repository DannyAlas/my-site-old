import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        width={500}
        height={350}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center" >
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          blurDataURL={thumbnail}
          width={500}
          height={350}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20} >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} >{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export function WorkGridItemPosts({ children, post }) { 
  return(
  <Box w="100%" textAlign="center" >
    <NextLink href={post.url} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
            loader={({ src }) => {
              return src
            }}
            src={post.thumbnail}
            alt={post.title}
            className="grid-item-thumbnail"
            placeholder="blur"
            blurDataURL={post.thumbnail}
            width={500}
            height={300}
          />
        <LinkOverlay href={post.url}>
          <Text mt={2} fontSize={20} >
            {post.title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
