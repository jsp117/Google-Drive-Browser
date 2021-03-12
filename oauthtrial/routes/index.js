// requiring router and and our api routes. 
const router = require("express").Router();
const apiRoutes = require("./login");

// adding api routes
router.use("/api", apiRoutes);

// If no API routes are hit, send status 404
router.use(function(req, res) {
  res.status(404).send('Not Found');
});

module.exports = router;