// Importamos el modulo expres
const express = require('express')
const cors = require('cors')

// contruir una aplicacion utilizando expres
const app = express()
const port = 3000


let transactionArr = []

// region

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json(({
        type: "*/*"
    }))
)

app.use(cors());
// region

//cuando te hagan un get http://localhost:3000/transactions
app.get("/transactions", (req, res) => {
    res.send(JSON.stringify(transactionArr));
})

//cuando te hagan un post http://localhost:3000/transactions
app.post("/transactions", (req, res) => {
    // console.log("Me esta llegando año");
    // console.log(req.body);

    let transaction = req.body;
    transactionArr.push(transaction);
    res.send(JSON.stringify("Guardada con exito"));
    console.log(transactionArr);
});

app.listen(port, () => {
    console.log(`Estoy ejecutandome en http://localhost:${port}`);
})