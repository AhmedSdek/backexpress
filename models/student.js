import mongoose, { Schema, Document } from "mongoose"


const studentSchema = new Schema({
    fullName: { type: String, required: true },
    email: String,
    age: String,
    class: String
})

export const studentModel = mongoose.model('students', studentSchema)