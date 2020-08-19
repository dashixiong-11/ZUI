const HtmlwebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({},base,{
    mode: "development",
   entry: {
       example:"./example.tsx"
   },
   plugins: [
      new HtmlwebpackPlugin({
         title: 'ORZUI - react',
         template: 'example.html'
      })
   ],
})
