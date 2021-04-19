const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const Controller = { 

    login: async (req,res) => {

        const {email} = req.query;  

        if(email) { 
            const user = await prisma.storeUser.findFirst({where: {
                email
            }})


            return res.status(200).json(user)
        }
    },

    

   

   
    

}

module.exports = Controller