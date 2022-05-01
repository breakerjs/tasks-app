import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mongoose from 'mongoose'
import Link from 'next/link'
import Header from '../components/Header'
import HeaderNav from '../components/HeaderNav'
import { getServerSideProps } from '.'

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
                <input type="submit" value="Añadir Tarea" name="btnAddTask" className='btn' />
            </form>
        </div>
        </>
    )
}