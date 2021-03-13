const router = require("express").Router();

router.route('/google').get((req, res) => {res.status(202).send("working")});
// handle with passport

// router.route("/facebook")
// .get("...")

module.exports = router;