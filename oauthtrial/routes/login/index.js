const router = require("express").Router();
const loginRoute = require("./login");

router.use("/login", loginRoute);

router.use("/logout", (req, res) => {
    res.send("logging out");
});

module.exports = router;