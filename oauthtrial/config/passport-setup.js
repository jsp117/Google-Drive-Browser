const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();

passport.use(
    new GoogleStrategy({
        // option for google strat
        callbackURL: '/auth/google/redirect',
        clientID: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET
    }, () => {

    })
)