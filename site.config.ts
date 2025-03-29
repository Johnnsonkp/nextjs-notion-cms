import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: '7875426197cf461698809def95960ebf',
  rootNotionPageId: '34a6187ed52749949253bfae09c45bbe',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'CHINONSO.io/blog',
  // domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  domain: 'nextjs-notion-cms-git-main-johnnsonkps-projects.vercel.app',
  author: 'John Nkpolukwu',

  // open graph metadata (optional)
  description: 'Welcome to my blogging site. Follow me on my programming joining, one blog post as a time.',

  // social usernames (optional)
  // twitter: '#',
  github: 'Johnnsonkp',

  linkedin: 'john-nkpolukwu-521201138',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@chinonso_io', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'c6e81101b05945bb8af6072b93cc5390'
    },
    {
      title: 'Projects',
      pageId: '11b0daab79388016ba36c2664a923ec0'
    },
    // {
    //   title: 'Blog',
    //   pageId: '11b0daab793880eaa33fe57b695d5a6e'
    // },
    {
      title: 'Contact',
      pageId: '22e4f87845a44e70830a976b16a27ed2'
    },
  ]
})
