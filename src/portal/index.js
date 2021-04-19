const express = require('express')
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exrended: false}));
app.use(function (req, res, next) {
  
    res.header('Access-Control-Allow-Origin', "*" );
   /*
    res.setHeader('Access-Control-Allow-Origin', '*');

  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

*/
    res.setHeader('Access-Control-Allow-Credentials', true);
    
  
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS,PUT")
    res.setHeader("Access-Control-Allow-Headers", "*")

    // Pass to next layer of middleware
    next();
});

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY
var sockets = {};
var devices = {};

const io = require("socket.io")(3334)

io.on('connection', async (socket) => {

    let header = socket.handshake.query['token'];

  

    if(!header)
        return ;
    
    const parts = header.split(" ");

    if(!parts.length === 2)
        return;
    
    
    const [ scheme, token ] = parts;
    
    if(!scheme == "Bearer")
        return ;


   
    let id = await jwt.verify(token, "DSUIDU03HRI320E-D0H2H8D-4812-34DJ9U249-141Ç1303I1MD", async (err,decoded) => {
    

        if(err)
            return;
        
       
        return decoded.id

        
    });

  

    if(!id)
        return;


    socket.data.uuid = id;
    sockets[id] = socket.id
  
  

    socket.on('disconnect', () => {
      sockets[socket.data.uuid] = undefined
      console.log(sockets)
    });
});


const ProductController = require('./controllers/products')
const SchedulesController = require('./controllers/schedules')
const StoreController = require('./controllers/config')


String.prototype.format = function(param) {
    let string = this.trim();
    switch(param){
        case "bold": return "\x1b[1m"+string
        case "disable": return "\x1b[2m"+string
        case "italic": return "\x1b[3m"+string
        case "underline": return "\x1b[4m"+string
        case "bgwhite": return "\x1b[7m"+string
        case "vanish": return "\x1b[8m"+string
        case "strike": return "\x1b[9m"+string

        default: return "\x1b["+param+"m"+string
    }
}

var routes = [];
    const Resource = (route,controller,middleware = (req,res,next) => {next()}) => {
    let keys = Object.keys(controller);
    
    keys.map(cont => {
        let url = route+"/"+cont;
        
        let method = "get";

        if(cont == "index"){
            url = route
        }
        if(cont == "register"){
            method = "post";
        }

        if(cont == "show"){
            method = "get"
            url = route+"/:id"
        }

        if(cont == "update"){
            method = "put"
            url = route+"/:id"
        }

        if(cont == "create"){
            method = "post"
            url = route
        }
        if(cont == "destroy"){
            method = "del"
            url = route+"/:id"
        }
        if(cont == "store"){
            method = "post"
            url = route
        }
            

        app[method](url,middleware,(req,res) => controller[cont](req,res,io,sockets, devices))
        routes.push({
            url,method,cont
        })
    });
    
}



Resource('/products',ProductController)
Resource('/auth',require('./controllers/auth'))
// Resource('/stores',StoreController)
// Resource('/schedules',SchedulesController)



app.listen(3333, () => {
  console.log("   ".format(33))
  console.log("-----------------○   ○-----------------".format(33))
  console.log("• Status → ".format("bold").format("33") , " Rodando ".format("bold").format("32"))
  console.log("• Https → ".format("bold").format("33") , " 10.0.0.29:3333 ".format("bold").format("32"))
  console.log("• Tecs → ".format("bold").format("33") , " Prisma,Express,Jwt,Socket.io ".format("bold").format("32"))
  console.log("• Dev → ".format("bold").format("33") , " Gabriel Benites ".format("bold").format("32"))
  console.log("-----------------○   ○-----------------".format(33))
  console.table(routes)
  console.log("-----------------○   ○-----------------".format(33))
})