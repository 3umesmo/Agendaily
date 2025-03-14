//imports
const express = require("express");
const routeList = require("./routes/listRoute");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/list", routeList);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
