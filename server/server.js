const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

const port = process.env.PORT;
const api = process.env.API;
//Routes
const queries = require("./routes/routes");

//Middleware
app.use(express.json());
app.get("/", (req, res) => {
	res.send({ message: "Hello, world" });
});
app.use(`${api}/queries`, queries);

app.listen(port, console.log(`Listening on ${port}`));
