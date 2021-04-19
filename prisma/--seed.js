const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {

  const category1 = await prisma.category.create({
    data: {
        name: "Bebidas alcoólicas",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
    }
  })
  const category2 = await prisma.category.create({
    data: {
        name: "Produtos em geral",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/specialty_foods.jpg"
    }
  })
  const category3 = await prisma.category.create({
    data: {
        name: "Bolos e doces",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/dessert.png"
    }
  })
  const category4 = await prisma.category.create({
    data: {
        name: "Pizzas",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png"
    }
  })
  const category5 =  await prisma.category.create({
    data: {
        name: "Frituras",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/brazilian.png"
    }
  })

  const category6 = await prisma.category.create({
    data: {
        name: "Comida rápida",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png"
    }
  })

  const category7 = await prisma.category.create({
    data: {
        name: "Comida japonesa",
        photo: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/hawaiian.png"
    }
  })



  const portalpizzaria = await prisma.stores.create({data: {

        "name": "Portal Pizzaria 2",
        "email": "pizzaria2@gmail.com",
       "password": "123456",
       "pessoal_phone": "8357345",
       "category": "Pizzaria",
       "photo": "",
       "cover_photo": "",
       "lat": -21.379417,
       "long": -51.555387,
       "delivery_value": 5,
       "cnpj":"548678783",
       "schedules": "1,0800:2200|2,0800:2200|3,0800:2200|4,0800:2200|5,0800:2200",
       "category": [category1.id,category4.id].join(","),
       menu: {
           create: [
                {
                    "name": "Pizzas",
                    products: {
                        create: [
                           
                              {
                                "name": "Pizza Catupiry",
                                "value": 29.90,
                              
                                "photo": "",
                                choices: {
                                    create: [
                                        {

                                            "name": "Escolha os ingradientes",
                                            "min": 1,
                                            "max": 10,
                                            "type": 0,
                                            garnishitems: {
                                                create: [
                                                    {

                                                       
                                                        "name": "Catupity",
                                                       
                                                        "price": 0,
                                                  
                                                  
                                                      },
                                                      {

                                                    
                                                        "name": "Molho de tomate",
                                                        "price":0,
                                                  
                                                  
                                                      },
                                                      {
                                                        "name": "Azeitona",
                                                        "price": 0,
                                                      },
                                                      {
                                                        "name": "Mussarela",
                                                        "price": 0,
                                                      },
                                                      {
                                                        "name": "Provolone",
                                                        "price": 0,
                                                      },
                                                      
                                                ]
                                            }
                                            
                                      
                                          },
                                          {

                                           
                                            "name": "Tamanho",
                                            "min": 1,
                                            "max": 1,
                                            "type": 0,
                                            garnishitems: {
                                              create: [
                                                  {
                                                      "name": "6 Pedaços",
                                                      "price": 10,
                                                  },
                                                  {
                                                    "name": "8 Pedaços",
                                                    "price": 15,
                                                    },
                                                    {
                                                        "name": "12 Pedaços",
                                                        "price": 20,
                                                    },
                                                    {
                                                        "name": "16 Pedaços",
                                                        "price": 25,
                                                    },
                                                 
                                              ]
                                            }
                                      
                                          },
                                          
                                    ]
                                }
                          
                              }
                             
                        ]
                    }
                },
                {
                    "name": "bebidas",
                    products: {
                      create: [
                          {
                            "name": "Coca Cola",
                            "value": 2.90,
                            "photo": "https://thumbs.dreamstime.com/b/garrafa-e-lata-da-coca-cola-carbonatada-do-refresco-84849999.jpg",
                            choices: {
                              create: [
                                  {

                                    
                                      "name": "Tamanho",
                                      "min": 1,
                                      "max": 1,
                                      "type": 0,
                                      garnishitems: {
                                          create: [
                                              {
                                                  "name": "Lata (350ml)",
                                                  "price": 0,
                                                },
                                                {                                         
                                                  "name": "Copo Pequeno (400ml)",
                                                  "price": 1,
                                                },
                                                {                                         
                                                  "name": "Copo Médio (560ml)",
                                                  "price": 2,
                                                },
                                                {                                         
                                                  "name": "Copo Grande (700ml)",
                                                  "price": 3,
                                                },
                                                {                                         
                                                  "name": "Garrafa pequena 1L",
                                                  "price": 4.5,
                                                },
                                                {                                         
                                                  "name": "Garrafa pequena 2L",
                                                  "price": 8,
                                                },
                                              
                                          ]
                                      }
                                      
                                
                                    }
                                    
                              ]
                            }
                          },
                          {
                            "name": "Fanta",
                            "value": 1.90,
                            "photo": "https://1.bp.blogspot.com/-J7BQ4mvpvsM/X3k3_NjjIqI/AAAAAAAB0wo/AKAva0ygsxsQdYk8h-pcDu7VqzT81lDpgCLcBGAsYHQ/s16000/fanta%2B2.jpg",
                            choices: {
                              create: [
                                  {

                                    
                                      "name": "Tamanho",
                                      "min": 1,
                                      "max": 1,
                                      "type": 0,
                                      garnishitems: {
                                          create: [
                                              {
                                                  "name": "Lata (350ml)",
                                                  "price": 0,
                                                },
                                                {                                         
                                                  "name": "Copo Pequeno (400ml)",
                                                  "price": 1,
                                                },
                                                {                                         
                                                  "name": "Copo Médio (560ml)",
                                                  "price": 2,
                                                },
                                                {                                         
                                                  "name": "Copo Grande (700ml)",
                                                  "price": 3,
                                                },
                                                {                                         
                                                  "name": "Garrafa pequena 1L",
                                                  "price": 4.5,
                                                },
                                                {                                         
                                                  "name": "Garrafa pequena 2L",
                                                  "price": 8,
                                                },
                                              
                                          ]
                                      }
                                      
                                
                                    }
                                    
                              ]
                            }
                          },
                          {
                            "name": "Agua",
                            "value": 3.90,
                            "photo": "http://aguamineralecia.com.br/images/cia-agua-garrafa.jpg",
                            
                          }
                        ]
                    }
                }
           ]
       }
      }

    });

  const barbarosa = await prisma.stores.create({data: {

      "name": "BARBAROSA",
      "email": "barbarosa@gmail.com",
     "password": "123456",
     "pessoal_phone": "1234562",
     "category": "Água mineral, natural e Gás",
     "photo": "https://image.freepik.com/vetores-gratis/logotipo-de-vetor-de-gota-de-agua-com-folha-e-mao_94843-1.jpg",
     "cover_photo": "http://aguamineralecia.com.br/images/fotos/agua-mineral-cia-caixa.jpg",
     "lat": -21.389470,
     "long": -51.572948,
     "delivery_value": 2,
     "cnpj":"4444444441",
     "schedules": "1,0800:2200|2,0800:2200|3,0800:2200|4,0800:2200|5,0800:2200",
     menu: {
         create: [
              {
                  "name": "Águas",
                  products: {
                      create: [
                          {

                              "name": "Água Mineral",
                              "value": 2.90,
                              "photo": "https://a-static.mlcdn.com.br/618x463/agua-mineral-sem-gas-500ml-12-un-crystal-coca-cola/aeglecomercial/hsaaass/cd6057bd5f0576093127ea57b98d4191.jpg",
                              
                              choices: {
                                  create: [
                                      {

                                        
                                          "name": "Distribuidora",
                                          "min": 1,
                                          "max": 1,
                                          "type": 0,
                                          garnishitems: {
                                              create: [
                                                  { "name": "Santa Inês" },

                                                  { "name": "Crystal" },
                                                  { "name": "Bioleve" },
                                                  { "name": "Prata" },
                                                  { "name": "Sarandi" },
                                                  { "name": "Ingá" },
                                                  { "name": "Yara" },
                                                  { "name": "Indaia" },
                                                    
                                              ]
                                          }
                                          
                                    
                                        },
                                        {

                                         
                                          "name": "Tipo",
                                          "min": 1,
                                          "max": 1,
                                          "type": 0,
                                          garnishitems: {
                                            create: [

                                              { "name": "Garrafinha 200ml" },
                                              { "name": "Garrafinha 350ml" },

                                              { "name": "Garrafa 1L" },
                                              { "name": "Garrafa 2L" },


                                              { "name": "Galão 3L" },
                                              { "name": "Galão 4L" },
                                              { "name": "Galão 5L" },
                                            ]
                                          }
                                    
                                        }
                                  ]
                              }
                        
                            },
                            
                        
                            
                      ]
                  }
              },
              {
                  "name": "Gás",
                  products: {
                    create: [
                        {
                          "name": "Gás Convencional",
                          "value": 80,
                          "photo": "https://radioborborema.com.br/wp-content/uploads/2019/07/gas-cozinha-341x400.jpg"
                          
                        }
                        
                      ]
                  }
              }
         ]
     }
    }

  });

   const sergioeeliana = await prisma.stores.create({data: {

    "name": "Sérgio e Eliana",
    "email": "uvas@gmail.com",
   "password": "123456",
   "pessoal_phone": "+551234561",
   "category": "Uvas",
   "photo": "https://thumbs.dreamstime.com/b/molde-do-projeto-do-logotipo-do-vetor-ramo-da-uva-com-folhas-48145297.jpg",
   "cover_photo": "https://revistacampoenegocios.com.br/wp-content/uploads/2017/05/Foto-01-Cr%C3%A9ditos-Adilson-Pimentel-J%C3%BAnior.jpg",
   "lat": -21.379417,
   "long": -51.555387,
   "cnpj":"44455566621",
   "delivery_value": 10,
   "schedules": "1,0800:1100,1330:1700|2,0800:1100,1330:1700|3,0800:1100,1330:1700|4,0800:1100,1330:1700|5,0800:1100,1330:1700",
   menu: {
       create: [
            {
                "name": "Produtos",
                products: {
                    create: [
                        {

                            "name": "Uva Niagará",
                            "value": 5,
                            "photo": "https://cdn.awsli.com.br/800x800/1302/1302937/produto/62097016/cd2eb2f50f.jpg",
                            choices: {
                              create: [
                                  {

                                    
                                      "name": "Embalagem",
                                      "min": 1,
                                      "max": 1,
                                      "type": 0,
                                      garnishitems: {
                                          create: [
                                              { "name": "Sacola 1kg", "price": 0},
                                              { "name": "Sacola 2kg", "price": 5},
                                              { "name": "Caixote de madeira 5kg", "price": 20},
                                              { "name": "Caixa 10kg", "price": 45},
                                              { "name": "Caixa 20kg", "price": 95},
                                               
                                          ]
                                      }
                                      
                                
                                    },
                                    
                              ]
                          }
                      
                          },
                          {

                              "name": "Uva Vitória",
                              "value": 7,
                              "photo": "https://cdn.awsli.com.br/800x800/1302/1302937/produto/62097016/cd2eb2f50f.jpg",
                              choices: {
                                create: [
                                    {

                                      
                                        "name": "Embalagem",
                                        "min": 1,
                                        "max": 1,
                                        "type": 0,
                                        garnishitems: {
                                            create: [
                                              { "name": "Sacola 1kg", "price": 0},
                                                { "name": "Sacola 2kg", "price": 7},
                                                { "name": "Caixote de madeira 5kg", "price": 28},
                                                { "name": "Caixa 10kg", "price": 63},
                                                { "name": "Caixa 20kg", "price": 133},
                                                 
                                            ]
                                        }
                                        
                                  
                                      },
                                      
                                ]
                            }
                        
                            },
                          
                          {

                              "name": "Vinho artezanal Uva Niagara (1 litro)",
                              "value": 10,
                              "photo": "https://cdn.awsli.com.br/600x450/418/418969/produto/18284281/f4a4644ceb.jpg",
                              
                            },
                            {

                              "name": "Vinho artezanal Uva Vitória (1 litro)",
                              "value": 15,
                              "photo": "https://cdn.awsli.com.br/600x450/418/418969/produto/18284281/f4a4644ceb.jpg",
                              
                            },
                    
                        
                      
                          
                    ]
                }
            },
            
       ]
   }

}})

const onlineinformatica = await prisma.stores.create({data: {

  "name": "Online Informática",
  "email": "informatica@gmail.com",
 "password": "123456",
 "pessoal_phone": "+9107121",
 "category": "Computadores e Notebooks",
 "photo": "https://t4.ftcdn.net/jpg/01/95/46/29/360_F_195462967_VGBeheP8QvhJhmtnes9vnfu7PqZSYERu.jpg",
 "cover_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelVBFFh0wjSkgsn4V-qGreOZE3NP9Rgk5EMOkyprU1YxkwUWGJvzYtdamcztGqVw06qY&usqp=CAU",
 "lat": -21.379417,
 "long": -51.555387,
 "cnpj":"918290170",
 "delivery_value": 10,
 "schedules": "1,0800:1100,1330:1700|2,0800:1100,1330:1700|3,0800:1100,1330:1700|4,0800:1100,1330:1700|5,0800:1100,1330:1700",
 menu: {
     create: [
          {
              "name": "Serviços",
              products: {
                  create: [
                      {

                          "name": "Monte seu computador",
                          "description": "Selecione todas as peças para montar seu computador",
                          "value": 0,
                          "photo": "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-lian-li-pc-o11dw-dymanic-mid-tower-vidro-temperado-white-s-fonte_76337.jpg",
                          choices: {
                            create: [
                                {   "name": "Placa mãe",
                                    "min": 1,
                                    "max": 1,
                                    "type": 0,
                                    garnishitems: {
                                        create: [
                                            { "name": "ASUS 19212-s", "price": 200},
                                            { "name": "ASUS 29452-s", "price": 250},
                                            { "name": "ASUS 54416-s", "price": 320},
                                        ]
                                    } },

                                  {   
                                      
                                  "name": "Memória Ram",
                                    "min": 1,
                                    "max": 1,
                                    "type": 0,
                                    garnishitems: {
                                        create: [
                                            { "name": "Kingston 4gb ddr4", "price": 100},
                                            { "name": "Kingston 8gb ddr4", "price": 220},
                                            { "name": "Kingston 16gb ddr4", "price": 400},
                                            { "name": "Kingston 32gb ddr4", "price": 600},
                                        ]
                                    } },


                                    {   
                                      
                                      "name": "Armazenamento",
                                        "min": 1,
                                        "max": 1,
                                        "type": 0,
                                        garnishitems: {
                                            create: [
                                                { "name": "HDD 500gb", "price": 200},
                                                { "name": "HDD 1tb", "price": 350 },
                                                { "name": "SSD 240gb", "price": 300},
                                                { "name": "SSD 480gb", "price": 700},
                                            ]
                                        } },


                                        {   
                                      
                                          "name": "Placa de Vídeo",
                                            "min": 0,
                                            "max": 1,
                                            "type": 0,
                                            garnishitems: {
                                                create: [
                                                   
                                                  { "name": "GTX 720", "price": 650 },
                                                  { "name": "GTX 720 ti", "price": 800 },
                                                  { "name": "GTX 1020", "price": 1000 },
                                                  { "name": "GTX 1030", "price": 1100 },
                                                  { "name": "GTX 1050", "price": 1250 },
                                                  { "name": "GTX 1050 ti", "price": 1500 },
                                                    
                                                ]
                                            } },


                                            {   
                                      
                                              "name": "Processador",
                                                "min": 1,
                                                "max": 1,
                                                "type": 0,
                                                garnishitems: {
                                                    create: [
                                                       
                                                      { "name": "DUAL CORE", "price": 200 },
                                                      { "name": "QUAD CORE", "price": 250 },
                                                      { "name": "i3 4°G", "price": 300 },
                                                      { "name": "i3 9°G", "price": 500 },
                                                      { "name": "i5 5°G", "price": 750 },
                                                      { "name": "i7 5°G", "price": 1500 },
                                                      { "name": "i9 10°G", "price": 7000 },
                                                     
                                                        
                                                    ]
                                                } },


                                                {   
                                      
                                                  "name": "Gabinete",
                                                    "min": 1,
                                                    "max": 1,
                                                    "type": 0,
                                                    garnishitems: {
                                                        create: [
                                                           
                                                          { "name": "Comum", "price": 50 },
                                                          { "name": "Gamer", "price": 250 },
                                                         
                                                         
                                                            
                                                        ]
                                                    } },
                                  
                            ]
                        }
                    
                        },
                        {

                            "name": "Uva Vitória",
                            "value": 7,
                            "photo": "https://cdn.awsli.com.br/800x800/1302/1302937/produto/62097016/cd2eb2f50f.jpg",
                            choices: {
                              create: [
                                  {

                                    
                                      "name": "Embalagem",
                                      "min": 1,
                                      "max": 1,
                                      "type": 0,
                                      garnishitems: {
                                          create: [
                                            { "name": "Sacola 1kg", "price": 0},
                                              { "name": "Sacola 2kg", "price": 7},
                                              { "name": "Caixote de madeira 5kg", "price": 28},
                                              { "name": "Caixa 10kg", "price": 63},
                                              { "name": "Caixa 20kg", "price": 133},
                                               
                                          ]
                                      }
                                      
                                
                                    },
                                    
                              ]
                          }
                      
                          },
                        
                        {

                            "name": "Vinho artezanal Uva Niagara (1 litro)",
                            "value": 10,
                            "photo": "https://cdn.awsli.com.br/600x450/418/418969/produto/18284281/f4a4644ceb.jpg",
                            
                          },
                          {

                            "name": "Vinho artezanal Uva Vitória (1 litro)",
                            "value": 15,
                            "photo": "https://cdn.awsli.com.br/600x450/418/418969/produto/18284281/f4a4644ceb.jpg",
                            
                          },
                  
                      
                    
                        
                  ]
              }
          },
          
     ]
 }

}})

const mcdonalds = await prisma.stores.create({data: {

  "name": "Mc Donalds",
  "email": "mcDonalds@gmail.com",
 "password": "123456",
 "pessoal_phone": "18996588116",
 "category": "FASTFOOD",
 "photo": "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png",
 "cover_photo": "https://www.saboravida.com.br/wp-content/uploads/2021/01/cardapio-mcdonalds.jpg",
 "lat": -21.379417,
 "long": -51.555387,
 "delivery_value": 5,
 "cnpj":"54074682800",
 "schedules": "1,0800:2200|2,0800:2200|3,0800:2200|4,0800:2200|5,0800:2200",
 menu: {
     create: [
          {
              "name": "hamburguers",
              products: {
                  create: [
                      {

                          "name": "Mc lanche Feliz",
                          "value": 15.90,
                          "photo": "https://images-americanas.b2w.io/produtos/01/00/img/1830216/4/1830216450_1GG.jpg",
                           choices: {
                               create: [
                                  {
                                      
                                      "name": "Conteúdo do lanche",
                                      "min": 1,
                                      "max": 1,
                                      "type": 0
                                  }
                               ]
                           }
                    
                        },
                        {

                     
                          "name": "Quarteirão",
                          "value": 9.90,
                          "promotion": true,
                          "promovalue": 4.90,
                          "photo": "https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/BR/sanduiches-de-carne/quarteirao.png",
                          choices: {
                              create: [
                                  {

                                    
                                      "name": "Customize seu lanche",
                                      "min": 1,
                                      "max": 10,
                                      "type": 1,
                                      garnishitems: {
                                          create: [
                                              {

                                                 
                                                  "name": "Queijo Cheddar",
                                                  "price": 1.90,
                                            
                                            
                                                },
                                                {

                                              
                                                  "name": "Queijo Comum",
                                                  "price": 0.90,
                                            
                                            
                                                },
                                                {

                                                 
                                                  "name": "Tomate",
                                                  "price": 1.90,
                                            
                                            
                                                }
                                          ]
                                      }
                                      
                                
                                    },
                                    {

                                     
                                      "name": "Brinde (Coleção Mario Bros)",
                                      "min": 0,
                                      "max": 3,
                                      "type": 0,
                                      garnishitems: {
                                        create: [
                                            {
                                                "name": "Prince Peach",
                                                "price": 10,
                                            },
                                            {
                                              "name": "Mario",
                                              "price": 15,
                                            },
                                            {
                                              "name": "Luigi",
                                              "price": 10,
                                          },
                                          {
                                            "name": "Toad",
                                            "price": 10,
                                          },
                                          {
                                            "name": "Bowser",
                                            "price": 10,
                                          },
                                          {
                                            "name": "Nenhum",
                                            "price": 0,
                                          },
                                        ]
                                      }
                                
                                    }
                              ]
                          }
                    
                        },
                        {

                         
                          "name": "Promoção duplo quarteirão",
                          "description": "Contem 1 duplo quarteirão, 1 coca lata e 1 batata frita média",
                          "value": 19.90,
                          "promotion": true,
                          "promovalue": 14.9,
                          "photo": "https://www.infomoney.com.br/wp-content/uploads/2019/06/duplo-quarteirao.png?fit=800%2C800&quality=50&strip=all",
                          
                        
                  
                      }
                    
                        
                  ]
              }
          },
          {
              "name": "bebidas",
              products: {
                create: [
                    {
                      "name": "Coca Cola",
                      "value": 2.90,
                      "photo": "https://thumbs.dreamstime.com/b/garrafa-e-lata-da-coca-cola-carbonatada-do-refresco-84849999.jpg",
                      choices: {
                        create: [
                            {

                              
                                "name": "Tamanho",
                                "min": 1,
                                "max": 1,
                                "type": 0,
                                garnishitems: {
                                    create: [
                                        {
                                            "name": "Lata (350ml)",
                                            "price": 0,
                                          },
                                          {                                         
                                            "name": "Copo Pequeno (400ml)",
                                            "price": 1,
                                          },
                                          {                                         
                                            "name": "Copo Médio (560ml)",
                                            "price": 2,
                                          },
                                          {                                         
                                            "name": "Copo Grande (700ml)",
                                            "price": 3,
                                          },
                                          {                                         
                                            "name": "Garrafa pequena 1L",
                                            "price": 4.5,
                                          },
                                          {                                         
                                            "name": "Garrafa pequena 2L",
                                            "price": 8,
                                          },
                                        
                                    ]
                                }
                                
                          
                              }
                              
                        ]
                      }
                    },
                    {
                      "name": "Fanta",
                      "value": 1.90,
                      "photo": "https://1.bp.blogspot.com/-J7BQ4mvpvsM/X3k3_NjjIqI/AAAAAAAB0wo/AKAva0ygsxsQdYk8h-pcDu7VqzT81lDpgCLcBGAsYHQ/s16000/fanta%2B2.jpg",
                      choices: {
                        create: [
                            {

                              
                                "name": "Tamanho",
                                "min": 1,
                                "max": 1,
                                "type": 0,
                                garnishitems: {
                                    create: [
                                        {
                                            "name": "Lata (350ml)",
                                            "price": 0,
                                          },
                                          {                                         
                                            "name": "Copo Pequeno (400ml)",
                                            "price": 1,
                                          },
                                          {                                         
                                            "name": "Copo Médio (560ml)",
                                            "price": 2,
                                          },
                                          {                                         
                                            "name": "Copo Grande (700ml)",
                                            "price": 3,
                                          },
                                          {                                         
                                            "name": "Garrafa pequena 1L",
                                            "price": 4.5,
                                          },
                                          {                                         
                                            "name": "Garrafa pequena 2L",
                                            "price": 8,
                                          },
                                        
                                    ]
                                }
                                
                          
                              }
                              
                        ]
                      }
                    },
                    {
                      "name": "Agua",
                      "value": 3.90,
                      "photo": "http://aguamineralecia.com.br/images/cia-agua-garrafa.jpg",
                      
                    }
                  ]
              }
          }
     ]
 }
}

});

const riaveda = await prisma.stores.create({data: {

"name": "RIAVEDA MODAS - Moda Masculina, Feminina e Infanil",
"email": "riaveda@gmail.com",
"password": "123456",
"pessoal_phone": "+5518997552126",
"category": "Roupas",
"photo": "https://lh4.googleusercontent.com/NYabT8AaP9J0brXPenFTDFwwiLNvyMxUaF5aYV82-5ZBlb_1OmGoSVSI5F44n0oUKv_SNhdGpKWAQMnvT4aC=w1366-h640-rw",
"cover_photo": "https://lh6.googleusercontent.com/yHM-42e2cLBOLZza2aOdchiFzqIcDxXPdkoVOFp_MkScKy3U10InzbC4OLMlOPb5km7H7ulsnZs0FTzHnfAj=w1366-h640-rw",
"lat": -21.3883669,
"long": -51.5735686,
"cnpj":"12345678910",
"delivery_value": 10,
"schedules": "1,0800:1100,1330:1700|2,0800:1100,1330:1700|3,0800:1100,1330:1700|4,0800:1100,1330:1700|5,0800:1100,1330:1700",
menu: {
   create: [
        {
            "name": "Coleção Verão",
            products: {
                create: [
                    {

                        "name": "Camiseta Florida",
                        "value": 29.90,
                        "photo": "https://a-static.mlcdn.com.br/618x463/camiseta-verao-2019-margaridas-floral-masculina-di-nuevo/dinuevo/44193/6fa04dc265a8a81ce31c7961729ec11f.jpg",
                        choices: {
                          create: [
                              {

                                
                                  "name": "Tamanho",
                                  "min": 1,
                                  "max": 1,
                                  "type": 0,
                                  garnishitems: {
                                      create: [
                                          {

                                             
                                              "name": "P",
                                              "price": 0,
                                        
                                        
                                            },
                                            {

                                          
                                              "name": "M",
                                              "price": 10,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "G",
                                              "price": 20,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "GG",
                                              "price": 30,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "XG",
                                              "price": 20,
                                        
                                        
                                            }
                                      ]
                                  }
                                  
                            
                                },
                                
                          ]
                      }
                  
                      },
                      {

                   
                        "name": "Conjunto Infantil",
                        "description": "Camiseta P azul estampada e uma bermuda 19 estampada",
                        "value": 59.9,
                        "promotion": true,
                        "promovalue": 49.90,
                        "photo": "https://images.tcdn.com.br/img/img_prod/717962/conjunto_kiko_e_kika_camiseta_e_bermuda_4_ao_10_2945_2_d4503e2e1f12589f0dd35ad1a0de9f9c.jpg",
                        
                  
                      },
                      {

                       
                        "name": "Camisa Regata",
                        "description": "Camisa Regata sem estampa em diversar cores e tamanhos",
                        "value": 19.90,
                        "promotion": true,
                        "promovalue": 14.9,
                        "photo": "https://static3.tcdn.com.br/img/img_prod/586374/kit_3_camiseta_regata_infantil_verao_elian_1249_1_20191003144724.jpg",
                        choices: {
                          create: [
                              {

                                
                                  "name": "Tamanho",
                                  "min": 1,
                                  "max": 1,
                                  "type": 0,
                                  garnishitems: {
                                      create: [
                                          {

                                             
                                              "name": "P",
                                              "price": 0,
                                        
                                        
                                            },
                                            {

                                          
                                              "name": "M",
                                              "price": 10,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "G",
                                              "price": 20,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "GG",
                                              "price": 30,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "XG",
                                              "price": 20,
                                        
                                        
                                            }
                                      ]
                                  }
                                  
                            
                                },
                                {

                                
                                  "name": "Cor",
                                  "min": 1,
                                  "max": 1,
                                  "type": 0,
                                  garnishitems: {
                                      create: [
                                          {

                                             
                                              "name": "Azul ciano",
                                              "price": 0,
                                        
                                        
                                            },
                                            {

                                          
                                              "name": "Branca",
                                              "price": 0,
                                        
                                        
                                            },
                                            {

                                             
                                              "name": "Cinza",
                                              "price": 0,
                                        
                                        
                                            },
                                           
                                      ]
                                  }
                                  
                            
                                },
                                
                          ]
                      }
                      
                
                    }
                  
                      
                ]
            }
        },
        
   ]
}

}})

}
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })