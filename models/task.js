import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: Boolean
})
const taskModel = mongoose.model('Task', taskSchema)
export default taskModel;