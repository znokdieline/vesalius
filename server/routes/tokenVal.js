const jwt = require('jsonwebtoken');

module.exports.authorization = (req, res, next) => {
    const token = req.headers['authorization'];

    console.log(req.headers)
    if ( !token ) {
        res.status(400).json({ message: 'no hay token' })
        return;
    }

    jwt.verify(token, 'SeVaListo',function (error, decoded){
        if (error) {
            res.status(401).json({message:' token no valido'});
            return;
        }

        req.userId = decoded.id
        next();
    })
}