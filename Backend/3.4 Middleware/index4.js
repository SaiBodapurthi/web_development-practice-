import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function bandNameGenerator(req,res,next){
  console.log(req.method);
  bandName = req.body["street"]+req.body["pet"];
  next();
}

const app = express();
const port = 3000;
var bandName="";

app.use(express.urlencoded({ extended : true}));
app.use(bandNameGenerator);

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  res.send(`<h1>Your Band Name is </h1> ${bandName}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
