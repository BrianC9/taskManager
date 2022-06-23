import { Router } from "express";
import { getAllTasks, getSingleTask, createNewTask, deleteTask, updateTask } from '../controllers/tasks.js'
const tasksRouter = Router()

tasksRouter.route('/').get(getAllTasks).post(createNewTask)
tasksRouter.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

export default tasksRouter