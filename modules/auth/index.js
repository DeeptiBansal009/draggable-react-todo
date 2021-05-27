const passport = require("passport");
require("../../services/google");
const { createToken } = require(__basedir + "/middlewares");

module.exports = router => {
    // when login failed, send failed msg
    router.get("/login/failed", (req, res) => {
        res.status(401).json({
            success: false,
            message: "user failed to authenticate."
        });
    });
    
    // When logout, redirect to client
    router.get("/logout", (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile','email']
        }),
    );


    router.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login/failed' }),
        async function(req, res) {
            let user;
            if(req.user && req.user._doc){
                user = req.user._doc;
            }else{
                user = req.user
            }
            const token = await createToken(user);
            const redirecturl = `/login?token=${token}`;
            res.redirect(redirecturl);
        });
}