





const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

var total = 0;

const Controller = { 

    // show: async (req,res) => {

    //     const {id} = req.params;
    //     console.log(id)

    //     const product = await prisma.product.findUnique({
    //         where: {id}
    //     });

    //     return res.status(200).json(product)
    // },

    
    // index: async (req,res) => {
        
        
        
    //     const products = await prisma.menu.findMany({
    //         select: { id: true,name: true,
    //         products: {
    //             select: {
    //                 id: true,
    //                 name: true,
    //                 picture: true,
    //                 unitPrice: true
                    
    //             },
    //             orderBy:{
    //                 unitPrice: "asc"
    //             }
    //         }
    //         },
    //         orderBy: {
    //             index: "asc"
    //         }
    //     })

        
    //     console.log("get products")
    //     res.json(products)
      
    // },

    stores: async (req,res) => {
        const response = await prisma.store.findMany({
            take: 30
        })
    
        res.json(response)
    },

    categories: async (req,res) => {
        const response = await prisma.storeCategory.findMany({
            select: { name: true,slug: true,picture: true } 
        })
    
        res.json(response)
    },
    promotions: async (req,res) => {
        const response = await prisma.promotion.findMany({
            select: { name: true,slug: true,picture: true } 
        })
    
        res.json(response)
    },

    // show: async (req,res) => {

    //     const { id } = req.params;

    //     const product = await prisma.products.findUnique({where: {id},include: {
    //         choices: {
    //             include: {
    //                 garnishitems: true
    //             }
    //         }
    //     }})
    
    //     res.json(product)
    // },
    

  
    // reorder:  async (req,res) =>
    // {
    //     //Mc duplo, maça
    //     let {list} = req.query;
    //     list = JSON.parse(list)
    //     console.log(list);

    //     const func = async (key) => {
            
    //         let pos = list[key];

    //         let lastpos = await prisma.menu.findUnique({select: {index: true},where: {id: key}});
    //         console.log(key,pos,lastpos.index)
    //         let result;
    //         if(pos < lastpos.index)
    //             result = await prisma.$queryRaw(`
    //             WITH a AS (SELECT index FROM menu WHERE id = '${key}'),
    //             b AS (UPDATE menu SET index=${pos} WHERE id = '${key}')

    //             UPDATE menu
    //             SET index=index+1
    //             WHERE index >= ${pos} AND index <= ${lastpos.index} AND id <> '${key}';

    //         `)
    //         else if(pos > lastpos.index){
             
    //             result = await prisma.$queryRaw(`
    //             WITH a AS (SELECT index FROM menu WHERE id = '${key}'),
    //             b AS (UPDATE menu SET index=${pos} WHERE id = '${key}')

    //             UPDATE menu
    //             SET index=index-1
    //             WHERE index >= ${lastpos.index} AND index <= ${pos} AND id <> '${key}';

    //         `)
    //         }

    //         return result
    //     }

      
    //     Object.keys(list).map(async (key) =>  {


    //         return func(key);
          

          

            
    //     })

    //     return res.status(200).send("concluido")
    // }

}

module.exports = Controller