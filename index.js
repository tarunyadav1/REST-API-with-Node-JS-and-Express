import express from "express";
import bodyParser from "body-parser";
import userRouter from "./Routers/users.js";

const App = express();
const PORT = 5000;

App.use(bodyParser.json());

App.use("/users", userRouter);

App.get("/", (req, res) => {
  console.log("TEST");

  res.send("hello from home page");
});

App.listen(PORT, () => console.log("Server running on port 5000"));
