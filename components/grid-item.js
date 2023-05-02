import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
const toBase64 = (str) =>
typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str);

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        loader={({ src }) => {
                
          return src
        }}
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        width={500}
        height={350}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(10, 15)
          )}`}
        unoptimized
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(700, 475)
          )}`}
          width={500}
          height={350}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export function WorkGridItemPosts({ children, post }) {
  return (
    <Box w="100%" textAlign="center">
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
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(700, 475)
          )}`}
            width={500}
            height={300}
          />
          <LinkOverlay href={post.url}>
            <Text mt={2} fontSize={20}>
              {post.title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
