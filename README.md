## START DEVELOPMENT
npm start

## Setting up landing pages
to setup the route of pages, you can add or remove itin webpack.config.js, its using HtmlWebpackPlugin to generate html for each route

example to setup a page, add this sample code in the plugins attribute:

```
new HtmlWebpackPlugin(
    Object.assign(
        {},
        {
        inject: false,
        template: 'public/australian-pink-clay-pore-tight-kit.html',
        filename: 'australian-pink-clay-pore-tight-kit/index.html'
        },
        isEnvProduction
        ? {
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            }
        : undefined
    )
),
```

the block of code above will setup a page with route `https://lp.sandandsky.com/australian-pink-clay-pore-tight-kit/`

## Deploy to staging
This LP is stagin version is hosted on github pages, to deploy: run `npm run deploy`

## Deploy to production
production is served in cloudflare pages, connected to git, to deploy just need to push to master branch