import { defineConfig } from 'vitepress'
import { all } from '@nl/data'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nippon Lyrics',
  description: '为日语初学者准备的注音版日语歌词。',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '歌曲', link: `/yoasobi-セブンティーン` },
    ],

    sidebar: Object.entries(all).map(([singer, songs]) => ({
      text: singer,
      items: Object.keys(songs).map((song) => ({
        text: song,
        link: `/${singer}-${song}`,
      })),
    })),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
