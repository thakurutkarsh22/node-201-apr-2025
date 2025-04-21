const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// const GoogleStratergy = require("passport-google").Strategy;
const JWT_KEY = "askjdhaskldjahslkfjdh123412l3kj12hkj3";


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
}


const stratergy  = new JwtStrategy(options, (payload, done) => {
    console.log('payload', payload); // google 

    const {username} = payload; // thakurutkarsh2@gmail.co

    try {
        // we can find the user and check, username // youser service 

        return done(null, true);
    } catch(error) {
        return done(error, false);
    }

});

module.exports = (passport) => {
    passport.use(stratergy);
}


// const googleStratergy = new GoogleStratergy(options, (payload, done) => {
//     console.log('payload', payload);

//     try {
//         // we can find the user and check, 
//         return done(null, user);
//     } catch(error) {
//         return done(error, false);
//     }

// })