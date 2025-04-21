const JWT_KEY = "askjdhaskldjahslkfjdh123412l3kj12hkj3"

const MY_SECRET_PASSWORD = "asdf1234"
const jwt = require('jsonwebtoken');


//  what technique I am using hre to auth ? (JTW/ password)
// in modern websited we have Google login, fb, githublogin, apple login 


// this AuthMiddleware is only just for JWT authentication 
function AuthMiddleware(req, res, next) {
    const headers = req.headers;
    const authorization = headers.authorization;
    const token = authorization.split(" ")[1];

    if(!token) {
        res.status(401).json({message: "please login!!"});
    } else {
        // 1. VERiFY THE TOKEN

        jwt.verify(token, JWT_KEY, (err, decodedJwtToken) => {
            console.log(decodedJwtToken, 'decodedJwtToken')
            if(err) {
                // 1. someone is trying to hack you by giving the wrong token 
                // 2. genuinely my expiery time is there 
                res.status(401).json({message: "please re - login!!"});
            } else {
                req.username = decodedJwtToken.username;
                next();
            }
        } )
    }

    
    
}



module.exports = AuthMiddleware;