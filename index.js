const express= require('express');
const format=require('date-format');
const app=express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res)=>{res.status(201).send("<h1>Hello World</h1>");});

app.get("/api/v1/instagram",(req,res)=>{
    const socailapp={
        username: "its_rupesh",
        followers: 250,
        follows:160,
        Date: format.asString('dd[MM] hh:mm:ss',new Date())
    }
    res.status(200).json(socailapp);
});

app.get("/api/v1/facebook",(req,res)=>{
    const socailapp={
        username: "NA",
        followers: 0,
        follows:0,
        Date: format.asString('dd[MM] hh:mm:ss',new Date())
    }
    res.status(200).json(socailapp);
});

app.get("/api/v1/linkedin",(req,res)=>{
    const socailapp={
        username: "kumarrupesh",
        followers: 500,
        follows:450,
        Date: format.asString('dd:MM:yyyy hh:mm:ss',new Date())
    }
    res.status(200).json(socailapp);
});

app.get("/api/v1/:token",(req,res) => {
    console.log(req.params.token);
    res.status(200).send({params: req.params.token});
})

app.listen(4000,()=>{console.log(`Server is running at ${PORT}`);});