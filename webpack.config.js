const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  dist: `${__dirname}/dist`,
  title: "title",
  //  favicon: `${__dirname}/favicon.ico`,
  favicon: void 0,
  splitSize: void 0
};
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.tsx"
  },
  optimization: {
    splitChunks: {
      maxSize: config.splitSize,
      name: "libs",
      chunks: "initial"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      favicon: config.favicon
    })
  ],
  output: {
    path: config.dist,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ogg|mp3|wav|mpe?g|webm)$/i,
        loader: "file-loader",
        options: {
          name: "[contenthash].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
