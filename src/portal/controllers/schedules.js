





const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const Controller = { 

    show: async (req,res) => {
        const schedules = await prisma.storeSettings.findFirst({select: {
            schedules: true
        }})
        return res.status(200).json(schedules)
    },

    update: async (req,res) => {
        const { schedules } = req.body;
        console.log(schedules)
        const saved = await prisma.storeSettings.updateMany({data: {
            schedules
        }})

        return res.status(200).json(saved)
      
    },

   

   
    

}

module.exports = Controller