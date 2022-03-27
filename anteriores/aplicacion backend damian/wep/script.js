// Me selecciona el formulario
const forElement = document.getElementById("saveTransaction");

// Cuando te warde en el formulario, evento SubmitEvent,capturamé el evento
forElement.addEventListener("submit", (event) => {
    // para no sereacrgeel navegador
    event.preventDefault();
    // Obtengo el valor de los formulario de los inputs
    let transactionDescription = document.getElementById("transactionDescription").value;
    let transactionPrice = document.getElementById("transactionPrice").value;
    // creo objeto transaction que lo que va ha hacer es obtener los valores al pulsar wardar
    let transaction = {
        transactionDescription: transactionDescription,
        transactionPrice: transactionPrice
    };
    // convertimos a jsn transacton
    let transactionJson = JSON.stringify(transaction);
    // console.log(transactionJson);

    //mandar la transaccionJson al backend y guardarlos ahi
    fetch('http://localhost:3000/transactions', {
            method: 'Post',
            body: transactionJson
        })
        .then(x => console.log("hola"))
})

fetch("http://localhost:3000/transactions").then(x => x.json()).then(console.log);