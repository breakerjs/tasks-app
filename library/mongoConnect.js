import mongoose from 'mongoose'
const Schema = mongoose.Schema;


export default async function mongoConnect() {
    try{
        await mongoose.connect("mongodb+srv://fpicc:carolinamama@cluster0.ko4ba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de Datos Conectada')
    } catch (e) {
        console.log(e)
    }
}
