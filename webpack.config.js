module.exports = [
  {
    entry: "./index.mjs",
    target: "web",
    mode: "production",
    output: {
      path: __dirname,
      filename: "bundle.web.mjs",
    },
  },
  {
    entry: "./index.mjs",
    target: "node",
    mode: "production",
    output: {
      path: __dirname,
      filename: "bundle.node.mjs"
    },
  },
];
