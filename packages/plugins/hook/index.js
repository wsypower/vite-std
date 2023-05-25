/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 22:18:33
 * @LastEditTime: 2023-05-25 20:45:53
 * @LastEditors: wsy
 */
export default function hooks() {
  return {
    name: 'vite-plugin-hooks',
    options(InputOptions) {
    },
    async config(config, env) {
    },
    async configResolved(config) {
      config.env.VITE_APP_TITLE = 1
    },
    async configureServer(server) {
      server.middlewares.use((req, res, next) => {
        next()
      })
    },
    async handleHotUpdate(ctx) {
    },
    // async transformIndexHtml(html, ctx) {
    //   html = html.replace(
    //     /<title>(.*?)<\/title>/,
    //     '<title>Title replaced!</title>',
    //   )
    //   return {
    //     html,
    //     tags: [
    //       {
    //         tag: 'script',
    //         attrs: {
    //           src: 'https://example.com/script.js',
    //           async: true,
    //         },
    //         injectTo: 'body',
    //       },
    //       {
    //         tag: 'link',
    //         attrs: {
    //           rel: 'stylesheet',
    //           href: 'https://example.com/styles.css',
    //         },
    //         injectTo: 'head-prepend',
    //       },
    //     ],
    //   }
    // },
  }
}
