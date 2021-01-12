module.exports = {
  title: 'Yellow Messenger',
  tagline: 'Conversational AI Platform',
  //url: 'https://yellowmessenger.github.io',
  url: 'https://localhost',
  //baseUrl: '/ym-documentation/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'yellowmessenger', // Usually your GitHub org/user name.
  projectName: 'ym-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yellow Messenger',
      logo: {
        alt: 'My Site Logo',
        src: 'img/YM-Logo.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/yellowmessenger/ym-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://yellowmessenger.com/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/yellowmessenger/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/yellowmessenger?lang=en',
            },
            {
              label: 'Developer Community',
              href: 'https://community.yellowmessenger.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.yellowmessenger.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yellowmessenger',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yellow Messenger Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yellowmessenger/ym-documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://blog.yellowmessenger.com/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
