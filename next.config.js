const debug = process.env.NODE_ENV !== "production";
const name = "portfolio";
// /${name}/
module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? "https://j1h00.github.io/portfolio/" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};
