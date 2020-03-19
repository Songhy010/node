const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routerClient = require("./routers/router_client");
const routerAll = require("./routers/router_all");

const db = require("./util/db_config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/client",routerClient);
app.use("/api/all",routerAll)

app.use((req, res, next) => {
  const err = Error("API Not found");
  err.code = 404;
  next(err);
});
  
app.use((err, req, res, next) => {
  const message = err.message || "Unexpected Error";
  const code = err.code || 500;
  const trace = err.stack || err.toString();
  const path = req.path;
  const method = req.method;
  
  res.send({
    message,
    code,
    path,
    method,
    trace
  });
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3000,res=>{console.log("server started")});
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});
