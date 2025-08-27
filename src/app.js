const express = require("express");

const app = express();

app.use("/user",(req, res , next)=>{
  //route handler
  console.log("Handling the route user 2!!")
  next();
  //res.send("Response 1");
},
(req, res , next)=>{
  //route handler
  console.log("Handling the route user 2!!")
  next();
  //res.send("Second Response");
},
(req, res , next)=>{
  //route handler
  console.log("Handling the route user 3!!")
   next();
   //res.send("Third Response");
},
(req, res , next)=>{
  //route handler
  console.log("Handling the route user 4!!")
  //res.send("Fourth Response");
  next();
},
(req, res , next)=>{
  //route handler
  console.log("Handling the route user 5!!")
  res.send("Fifth Response");

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});