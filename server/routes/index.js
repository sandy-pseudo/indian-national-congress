const express = require("express");
const router = express.Router();

function routes(app) {
  router.get("/test", (req, res) => {
    res.end("We made it! And it's great");
  });
  
  router.get("/post/:id", (req, res) => {
    return app.render(req, res, "/post", { id: req.params.id });
  });

  return router;
};

module.exports = routes;