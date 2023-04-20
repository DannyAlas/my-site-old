// contentlayer.config.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files'
import { remarkCodeHike } from '@code-hike/mdx'
import { createRequire } from 'module'
var require2 = createRequire(import.meta.url)
var theme = require2('shiki/themes/nord.json')
var Tags = defineNestedType(() => ({
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
var Post = defineDocumentType(() => ({
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
var contentlayer_config_default = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]]
  }
})
export { contentlayer_config_default as default }
//# sourceMappingURL=compiled-contentlayer-config-OF2WUWIB.mjs.map
