import express from 'express'
import mongoose from 'mongoose'
// import studentsRouter from './routers/students.js'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3001;
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://sdeka2841:RlJWCZvV4wJxlpOq@cluster0.x80oh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'));

// app.use('/students', studentsRouter)
app.get('/', (req, res) => {
    res.send("welcomsds")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})