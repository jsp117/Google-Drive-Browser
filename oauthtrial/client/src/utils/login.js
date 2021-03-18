const cors = require('cors');
const passport = require('passport');

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

