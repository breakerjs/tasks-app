import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mongoose from 'mongoose'
import Link from 'next/link'
import mongoConnect from '../library/mongoConnect'
import tareaSchema from '../config/tareasSchema'
import bodyParser from 'body-parser'
import dayjs from 'dayjs'
import Header from '../components/Header'
import HeaderNav from '../components/HeaderNav'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function Home({ tasks }) {
  return (
    <>
    <div className={styles.container}>
      <Header/>
      <div>
        <HeaderNav/>
        <div className="containerBtn">
          <Link href="/addTask">
          <a className="btnAddTask btn">Añadir texto</a>
          </Link>
        </div>
        <div className="containerFromTaskList">
          {
            tasks.map((task) => {
              return (
                <div className="taskList" key={task._id}>
                  <div className="taskListTitle">
                    <h3>{task.titulo}</h3>
                    <p>{task.descripcion}</p>
                    <p>{task.notaAdicional}</p>
                    <p>{
                      dayjs().from(dayjs(task.fecha), true)
                    }
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
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
