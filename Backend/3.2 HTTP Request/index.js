import express from "express";
const app=express();
const port=3000;

app.get("/", (req, res) =>{
    res.send("<h1>HOME</h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>About</h1><br><p>hey this is just a sample project type page to describe back end!</p>");
});

app.get("/contact", (req, res) =>{
    res.send("<h1>Contact</h1><br><p>mobile: +91 630*******<br>email : example@email.com</p>");
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}.`);
})