const passport = require('passport');
const googleStrat = require('passport-google-oauth20');

passport.use(
    new googleStrat({
// option for google strat
        callbackURL: '/auth/google/redirect',
        clientID: process.env.REACT_APP_CLIENTID,
        clientSecret: process.env.REACT_APP_CLIENTSECRET
}), ()=>{}
// passport callback function
)