





const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

var total = 0;

const Controller = { 

  

    show: async (req,res) => {

        const {id} = req.params

        const category = await prisma.storeCategory.findFirst({where: {
            slug: id
        }})

        const stores = await prisma.store.findMany({
            where: {
                categories: {
                    every: {
                        slug: id
                    }
                }
            }
        })
    
        res.json({
            category,stores
        })
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