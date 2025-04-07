const MY_SECRET_PASSWORD = "asdf1234"

function AuthMiddleware(req, res, next) {
    const headers = req.headers;
    console.log(headers, 'headers');
    const passwordFromRequest = headers.authorization;

    if(passwordFromRequest === MY_SECRET_PASSWORD) {
        next();
    } else {
        res.status(403).json({message: "Hey please login"});
    }
    
}

module.exports = AuthMiddleware;