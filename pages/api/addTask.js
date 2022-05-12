import mongoose from 'mongoose'
import Task from '../../config/tareasSchema'
import bodyParser from 'body-parser'

export default function addTask (req,res) {
    if(req.method !== 'POST') {
        res.send("Only POST requests are allowed")
    } else {
        // Se modifica el Header para mejorar la "respuesta"
        // res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const task = new Task ({
            titulo: req.body.inputTitleTask,
            descripcion: req.body.inputDescTask,
            notaAdicional: req.body.inputNoteTask,
        })
        task.save()
            .then(res.redirect('/'))
    }
}