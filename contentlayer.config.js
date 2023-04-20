import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files'

import { remarkCodeHike } from '@code-hike/mdx'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const theme = require('shiki/themes/nord.json')

const Tags = defineNestedType(() => ({
  name: 'Tags',
  fields: {
    meta: {
      type: 'string',
      required: true
    },
    text: {
      type: 'string'
    },
    link: {
      type: 'string'
    }
  }
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    },
    thumbnail: {
      type: 'string',
      description: 'The tumbnail of the post',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'json', of: Tags }
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/posts/${doc._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]]
  }
})
