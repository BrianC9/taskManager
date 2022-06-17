import { Router } from "express";
import { getAllTasks, getSingleTask, createNewTask, deleteTask, updateTask } from '../controllers/tasks.js'
const tasksRouter = Router()

tasksRouter.route('/').get(getAllTasks)
tasksRouter.route('/').post(createNewTask)
tasksRouter.route('/:id').get(getSingleTask)
tasksRouter.route('/:id').patch(updateTask)
tasksRouter.route('/:id').delete(deleteTask)

export default tasksRouter