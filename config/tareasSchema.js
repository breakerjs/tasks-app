import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    } 
})

export default mongoose.models['tareaSchema'] || mongoose.model('tareaSchema', tareaSchema)