const express = require("express");

const app = express();


app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({firstname: "Ujjal" , lastname: "Roy"});
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});