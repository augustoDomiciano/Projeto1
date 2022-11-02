
//npm init
//criamos o arquivo app.js
//npm install express --save



const express = require('express')
const app = express()

app.use(express.json())

const list =[]

app.post("/figurinha", (request, response)=>{

    const data = request.body
    list.push(data)

    console.log(data)

    const objectOReturn = {
        "message":"Dados recebidos"
    }
    response.send(objectOReturn)
})

// app.delete("/figurinha/:id", (req, res) => {
//     const id = req.params.id;
//     const index = list.findIndex((item) => item.id === id);
//     list.splice(index, 1);
  
//     const objectToReturn = { message: "Dados removidos" };
//     res.send(objectToReturn);
//   });
  

app.get("/figurinha", function(request, response){
    const objectOReturn = {
        "results":list
    }
    response.json(objectOReturn)
})

app.listen(9090, function(){
    console.log("Servidor inicializado...")
})