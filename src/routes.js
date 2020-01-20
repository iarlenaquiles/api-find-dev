const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "hello worldddd" });
});

module.exports = routes;
