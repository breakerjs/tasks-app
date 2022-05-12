import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import dayjs from 'dayjs'

const tareaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    notaAdicional: {
        type: String,
        required: false,
        default: '',
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
    tema: {
        type: String,
        required: false,
    }
})

export default mongoose.models['tareaSchema'] || mongoose.model('tareaSchema', tareaSchema)