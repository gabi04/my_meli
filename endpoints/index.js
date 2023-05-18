const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

routerApi(app);

app.listen(port, () => {
  console.log("Mi port", port);
});
