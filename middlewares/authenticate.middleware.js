const jwt=require("jsonwebtoken")
require("dotenv").config();

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (token) {
            const decoded = jwt.verify(token, process.env.key, function (err, decoded) {
                if (decoded) {
                    const userID = decoded.userID;
                    req.body.userID = userID;
                    next()
                } else {
                    res.send({ 'Error': err.message })
                }
            });
        
        } else {
            console.log('No Token');
        }
    } catch (error) {
        console.log({ 'Error': error.message });
        res.send({ 'Error': error.message })
    }
};

module.exports={authenticate}