const router = require("express").Router();

router.route('/google').get((req, res) => {res.status(202).send("working")});

// router.route("/facebook")
// .get("...")

module.exports = router;