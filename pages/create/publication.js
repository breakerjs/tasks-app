import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import mongoose from 'mongoose'
import Link from 'next/link'
import Header from '../../components/Header'
import HeaderNav from '../../components/HeaderNav'

export default function addTask () {
    return (
        <>
        <Header/>
        <div>
            <HeaderNav/>
            <h1 className="titlePage addTaskTtl">Añadir Texto</h1>
            <form className="containerBtn" action="/api/addTask" method="POST">
                <input type="text" placeholder="Título del texto" name="inputTitleTask" />
                <input type="text" placeholder="Descripcion del texto" name="inputDescTask" />
                <input type="text" placeholder="Notas adicionales" name="inputNoteTask" />
                <select name="inputNoteTheme" placeholder='Elige un tema para tu publicacion!' className='inputTheme'>
                    <option value="👥 Social">👥 Social</option>
                    <option value="🧠 Aprendizaje">🧠 Aprendizaje</option>
                    <option value="🎲 Juegos">🎲 Juegos</option>
                    <option value="🥪 Comidas">🥪 Comidas</option>
                </select>
                <input type="submit" value="Añadir Tarea" name="btnAddTask" className='btn' />
                <h3 className="muted text-advice">Al crear la publicacion, aceptas el hecho de que no podras borrar la <br></br> publicacion ni realizar algun cambio sobre ella.</h3>
            </form>
        </div>
        </>
    )
}