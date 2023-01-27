const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv");
const rutas = require("./server/routes/routes");

const app = express()
dotenv.config({ path: "./server/config/config.env" });


app.use(express.json());
app.use(cors());


app.use("/", rutas);

app.use('*', function(req, res) {
    res.send("Error. Intente nuevamente con otra ruta.");
});

const PORT = process.env.portServer;
app.listen(PORT, console.log(`el servidor esta activo en el puerto ${PORT}`));