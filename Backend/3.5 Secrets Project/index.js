import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function bandNameGenerator(req,res,next){
  console.log(req.method);
  password = req.body["password"];
  next();
}

const app = express();
const port = 3000;
var password="";

app.use(express.urlencoded({ extended : true}));
app.use(bandNameGenerator);

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {
    if (password==="password"){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.send(`Oops, your entered password is wrong!`);
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
