import mongoose from 'mongoose'
import Task from '../../config/tareasSchema'
import bodyParser from 'body-parser'

export default function addTask (req,res) {
    if(req.method !== 'POST') {
        res.send("Only POST requests are allowed")
    } else {
        const {titulo, descripcion, fecha} = req.body;
        const task = new Task({
            titulo,
            descripcion,
            fecha
        })
        task.save()
        res.send('Tarea agregada correctamentente')
    }
}