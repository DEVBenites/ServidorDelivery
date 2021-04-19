const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();



module.exports =  (req, res, next) => {
   /* const header = req.headers.authorization;*/
    const header = req.headers.authorization;
 
    if(!header)
        return res.status(401).send({error: "No token provided"});
    
    const parts = header.split(" ");

    if(!parts.length === 2)
        return res.status(401).send({error: "Token error"});
    
    
    const [ scheme, token ] = parts;
    
    if(!scheme == "Bearer")
        return res.status(401).send({error: "Token malformatted"});
    
    jwt.verify(token, secretKey, async (err,decoded) => {
        if(err)
            return res.status(401).send({error: "Token invalid"});
        
        const auth = await prisma.users.findUnique({where: {id: decoded.id}})

        if(!auth)
            return res.status(401).send({error: "Token invalid (user not found)"});

        req.auth = auth;
    
        return next();
        
    });
    
}