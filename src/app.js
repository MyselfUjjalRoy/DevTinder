const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("Ha ha ha ha");
});

//this will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({firstname: "Ujjal" , lastname: "Royy"});
});

app.post("/user", (req, res) => {
  res.send("Save Data to the database successfullyy");

});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

//this will match all the HTTP method API calls to /test
app.use("/test" ,(req , res)=>{
  res.send("Hello from the server...test");
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});