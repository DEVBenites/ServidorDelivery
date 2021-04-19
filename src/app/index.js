const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors');
var https = require('https');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exrended: false}));
app.use(cors());
app.options('*', cors());
// app.use(function (req, res, next) {
  
//     res.header('Access-Control-Allow-Origin', "*" );
//    /*
//     res.setHeader('Access-Control-Allow-Origin', '*');

  
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// */
//     res.setHeader('Access-Control-Allow-Credentials', true);
    
  
//     res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS,PUT")
//     res.setHeader("Access-Control-Allow-Headers", "*")

//     // Pass to next layer of middleware
//     next();
// });



var sockets = {};
var devices = {};




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
            

        app[method](url,middleware,(req,res) => controller[cont](req,res))
        routes.push({
            url,method,cont
        })
    });
    
}




Resource('/explorer',require('./controllers/explorer'))
Resource('/merchants',require('./controllers/merchants'))
Resource('/auth',require('./controllers/auth'))
Resource('/discovery',require('./controllers/discovery'))
Resource('/promotion',require('./controllers/promotion'))
// Resource('/stores',StoreController)
// Resource('/schedules',SchedulesController)


var httpsServer = https.createServer(app);
httpsServer.listen(443,() => {
    console.log("running")
});