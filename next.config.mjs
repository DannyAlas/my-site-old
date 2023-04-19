import { withContentlayer } from 'next-contentlayer'
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '.'
  },
}

export default withContentlayer(nextConfig)
