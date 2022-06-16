import express from "express";
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js'
dotenv.config()
const App = express()

// middleware 

App.use(express.json())

const PORT = process.env.PORT || 5000
App.get('/', (req, res) => {
    res.end("Hola estoy escuchando")
})
App.use('/api/v1/tasks', tasksRouter)
App.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})