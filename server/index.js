const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// Routers
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const disastersRouter = require("./routes/Disasters.js");
app.use("/disasters", disastersRouter);

const requestRouter = require("./routes/Request.js");
app.use("/request", requestRouter);

const itemsRouter = require("./routes/Items.js");
app.use("/items", itemsRouter);

const responseRouter = require("./routes/Response.js");
app.use("/response", responseRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
