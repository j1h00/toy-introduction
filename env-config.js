const debug = process.env.NODE_ENV !== "production";
const name = "portfolio";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};
