import express from "express";
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js'
import connectDB from './db/connect.js'
dotenv.config()
const App = express()
const PORT = process.env.PORT || 5000

// middleware 
App.use(express.static('./public'))
App.use(express.json())
App.use('/api/v1/tasks', tasksRouter)


const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URL)
        App.listen(PORT, () => {
            console.log(`Servidor levantado en el puerto ${PORT}`)
        })
    } catch (error) {
        console.log("Error in the start function ", error)
    }
}

start();
