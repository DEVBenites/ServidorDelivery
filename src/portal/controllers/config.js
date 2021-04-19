





const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const Controller = { 

    index: async (req,res) => {

      
    },

   

    show: async (req,res) => {

       // const { id } = req.params;
        console.log("oi")
        var store = await prisma.store.findFirst({include: {
            settings: true,
            delivery: true
        }})
        store = {...store,...store.settings}
        store.settings = undefined;
        store = {...store,...store.delivery}
        store.delivery = undefined;
        res.json(store)
    },
    

}

module.exports = Controller