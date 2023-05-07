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
                    res.status(400).send({ 'Error': err.message })
                }
            });
        
        } else {
            console.log('No Token');
        }
    } catch (error) {
        res.status(400).send(
            {
                'Error': error.messsage
            }
        )
    }
};

module.exports={authenticate}