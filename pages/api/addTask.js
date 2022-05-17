import Task from '../../config/tareasSchema'

export default async function addTask (req,res) {
    if(req.method !== 'POST') {
        res.send("Only POST requests are allowed")
    } else {
        const task = new Task ({
            titulo: req.body.inputTitleTask,
            descripcion: req.body.inputDescTask,
            notaAdicional: req.body.inputNoteTask,
            tema: req.body.inputNoteTheme,
        })
        await task.save()
        res.redirect('/')
    }
}