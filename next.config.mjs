import { withContentlayer } from 'next-contentlayer'
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '.',
    domains: ['raw.githubusercontent.com', 'cdn.britannica.com'],

  },
}

export default withContentlayer(nextConfig)
