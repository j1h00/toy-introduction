const debug = process.env.NODE_ENV !== "production";
const name = "portfolio";
// /${name}/
module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${name}/` : "",
  images: {
    loader: "akamai",
    path: "",
  },
};
