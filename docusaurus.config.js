// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '歡迎來到十月模組教學',
  tagline: '各種模組教學',
  favicon: 'img/logo-blink-2.gif',

  // Set the production url of your site here
  url: 'https://octoberserver.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tutorials',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '十月模組伺服器', // Usually your GitHub org/user name.
  projectName: '十月模組教學', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '十月模組教學',
        logo: {
          alt: '各種模組教學',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教學',
          },
          {to: '/blog', label: '主題文章', position: 'left'},
          {
            href: 'https://github.com/octoberserver',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教學',
            items: [
              {
                label: '十月模組伺服器教學',
                to: '/docs/intro',
              },
              {
                label: '其他模組教學',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: '官網',
                href: 'http://octoberserver.net/',
              },
              {
                label: '模組論壇(尚未完成)',
                href: 'https://尚未完成',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/y8tjbRmxdY',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCK9nrECvpyrM9urPFOBT0aQ',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '主題文章',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/octoberserver',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 十月模組伺服器, Inc.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
