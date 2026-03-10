const express = require('express');
const app=express();
const port=3600;
app.use(express.json());

let data=[
    {id:1, superHero:"Batman"},
    {id:2, superHero:"Superman"},
    {id:3, superHero:"Ironman"},
];

app.get("/", (req, res) => {
    return res.send("Hola desde mi propio backend con nodemon");
});

app.get("/datos", (req, res)=>{
    res.json(data);
});

app.get("/datos/superman", (req, res)=>{
    res.json(data[1]);
});

app.post("/add",(req, res)=>{
    let nuevoHeroe ={
        id:data.length+1,
        superHero:req.body.superHero
    };
    data.push(nuevoHeroe);
    return res.status(200).json(data);
});

app.listen(port, ()=>{
    console.log("Servidor http://localhost:"+port);
});