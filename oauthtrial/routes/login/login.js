const router = require('express').Router();
const passport = require('passport');
const cors = require('cors');

router.get('/google', cors(), passport.authenticate('google', {
    scope: ['profile']
}), (req, res)=>{
    res.send("working")
});

router.get('/google/redirect', (req, res)=>{
    res.send('you reached the callback URI')
})
// handle with passport

// router.route("/facebook")
// .get("...")

module.exports = router;