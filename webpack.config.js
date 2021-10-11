const webpack = require("webpack");
const path = require("path");

module.exports =   {
  entry: {
    app: "minimal-ipfs",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "index.js",
    library: {
      type: "commonjs2"
    },
  },
  mode: "development",
  target: "web",
  optimization: {
    nodeEnv: false,
  },
  externals: {
    //This feels good being able to separate the two scripts dependencies, God bless.
    fs: "fs",
    path: "path",
    net: "net",
    http: "http",
    https: "https",
    tls: "tls",
    crypto: "crypto",
    util: "util",
    stream: "stream",
    buffer: "buffer",
    os: "os",
    assert: "assert",
    url: "url",
    zlib: "zlib",
    querystring: "querystring",
    tty: "tty",
    child_process: "child_process",
    dns: "dns",
    constants: "constants",
    readline: "readline",
    console: "console",
    process: "process",

    "graceful-fs": "graceful-fs"
  }
}