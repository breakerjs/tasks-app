import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mongoose from 'mongoose'
import Link from 'next/link'
import mongoConnect from '../library/mongoConnect'
import tareaSchema from '../config/tareasSchema'
import bodyParser from 'body-parser'
import dayjs from 'dayjs'

export default function delTask ({ tasks }) {
    return (
        <>
        <div className="taskToDeleteForm">
            <form>
                <label>Inserta el titulo de la tarea a eliminar!</label>
                <input type="text" placeholder="Título de la tarea" name="inputTitleTask" />
            </form>
        </div>
        </>
    )
}

export async function getServerSideProps () {
    const mongo = await mongoConnect();
    const tasks = await tareaSchema.find({});
    console.log(tasks)
    return {
      props: {
        tasks: JSON.parse(JSON.stringify(tasks)),
      }
    }
  }
  