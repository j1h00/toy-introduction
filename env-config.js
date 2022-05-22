const debug = process.env.NODE_ENV !== "production";
const name = "toy-introduction";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};
