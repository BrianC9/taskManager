import { Router } from "express";
import getAllTasks from '../controllers/tasks.js'
const tasksRouter = Router()

tasksRouter.route('/').get((req, res) => getAllTasks(req, res))

export default tasksRouter