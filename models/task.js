import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a Name in the body"],
        trim: true,
        maxlength: [30, "Name cannot be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})
const taskModel = mongoose.model('Task', taskSchema)
export default taskModel;