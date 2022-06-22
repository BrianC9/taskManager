import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})
const taskModel = mongoose.model('Task'.taskSchema)
export default taskModel;