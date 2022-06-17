import { Router } from "express";
import { getAllTasks, getSingleTask } from '../controllers/tasks.js'
const tasksRouter = Router()

tasksRouter.route('/').get(getAllTasks)
tasksRouter.route('/:id').get(getSingleTask)

export default tasksRouter