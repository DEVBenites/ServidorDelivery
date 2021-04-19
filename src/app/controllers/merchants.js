





const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

var total = 0;

const Controller = { 

    show: async (req,res) => {

        const {id} = req.params;
    
        const store = await prisma.store.findFirst({
            where: {slug: id},
            include: {
                menus: {
                    include: {
                        products: {
                            include: {
                                choices: {
                                    include: {
                                        garnishItems: true
                                    }
                                }
                            }
                        }
                    }
                },
                delivery: true
            }
        });

        return res.status(200).json(store)
    },

    
    index: async (req,res) => {
        
        
        
        const products = await prisma.menu.findMany({
            select: { id: true,name: true,
            products: {
                select: {
                    id: true,
                    name: true,
                    picture: true,
                    unitPrice: true
                    
                },
                orderBy:{
                    unitPrice: "asc"
                }
            },
            
            
            },
            
            orderBy: {
                index: "asc"
            }
        })

        
        console.log("get products")
        res.json(products)
      
    },

  
}

module.exports = Controller