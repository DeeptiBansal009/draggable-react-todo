"use strict";
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { constants } = require(__basedir + "/config");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = constants;
const { addUserData } = require("../modules/user/actions");


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL,
        //scope: ['r_emailaddress', 'r_liteprofile']
    },
    function(token, tokenSecret, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(async function () {
           const { _json } = profile;
            const userData = {
                id: _json.sub,
                email:  _json.email,
                name: _json.name,
                avatar: _json.picture
            }
            const userInfo= await addUserData(userData);
            return done(null, userInfo.user);
        });
    }
));