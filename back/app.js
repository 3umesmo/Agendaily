//imports
const express = require("express");
const routeList = require("./routes/list");

//aplicação express
const app = express();

app.use("/list", routeList);

//porta usada
const port = 8000;

//rota

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
