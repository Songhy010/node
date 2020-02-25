const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routerClient = require("./routers/router_client");
const db = require("./util/db_config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/* Client */
app.use("/api/client",routerClient);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3000,res=>{console.log("server started")})
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});
