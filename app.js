import express from "express";
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js'
import connectDB from './db/connect.js'
import notFound from './middleware/not-found.js'
import { errorHandleMiddleware } from './middleware/error-handler.js'

dotenv.config()
const App = express()
const PORT = process.env.PORT || 5000

App.use(express.static('./public'))
App.use(express.json())
App.use('/api/v1/tasks', tasksRouter)
App.use(notFound)
App.use(errorHandleMiddleware)

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
