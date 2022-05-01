import mongoose from 'mongoose'
import Task from '../../config/tareasSchema'
import bodyParser from 'body-parser'

export default async function addTask (req,res) {
    if(req.method !== 'POST') {
        res.send("Only POST requests are allowed")
    } else {
        // Se modifica el Header para mejorar la "respuesta"
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const task = new Task ({
            titulo: req.body.inputTitleTask,
            descripcion: req.body.inputDescTask,
            notaAdicional: req.body.inputNoteTask,
        })
        try {
            await task.save()
            res.redirect('/')
        }catch(e){
            res.send(JSON.stringify({
                status: 'error',
                message: 'Error al añadir la tarea',
                error: e,
            }))
        }
    }
}