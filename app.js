import express from "express";
import dotenv from 'dotenv';
dotenv.config()
const App = express()

const PORT = process.env.PORT || 5000
App.get('/', (req, res) => {
    res.end("Hola estoy escuchando")
})
App.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})