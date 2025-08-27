const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    //Log your error message
    console.error(err.message);
    res.status(500).send("Something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  //Logic of DB call and get user data

  // try {
     throw new Error("dbdjd");

  //   res.send("User data sent");
  // } catch (error) {
  //   res.status(500).send("Something error contact support team");
  // }
});
app.use("/", (err, req, res, next) => {
  if (err) {
    //Log your error message
    console.error(err.message);
    res.status(500).send("Something went wrong");
  }
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
