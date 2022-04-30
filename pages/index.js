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
import { useState } from 'react'
dayjs.extend(relativeTime)


export default function Home({ tasks }) {
  // value of search field
  const [idea, setIdea] = useState('');
  // search result
  const [foundIdeas, setFoundIdeas] = useState(tasks);
  const filter = (e) => {
    const keyword = e.target.value;

    if(keyword.length > 0) {
      const result = tasks.filter(task => {
        return task.titulo.toLowerCase().includes(keyword.toLowerCase());
      })
      setFoundIdeas(result);
    } else {
      setFoundIdeas(tasks);
    }

    setIdea(keyword);
  };

  return (
    <>
    <div className={styles.container}>
      <Header/>
      <div>
        <HeaderNav/>
        {/* TERMINAR DE CONFIGURAR BARRA DE SEARCH INPUT PARA FILTRAR POSTS */}
        <div className="searchInputDiv">
          <input 
          type='search'
          value={idea}
          onChange={filter}
          placeholder='Buscar ideas' 
          className='searchInput'
          />
        </div>
        <div className="containerBtn">
          <Link href="/addTask">
          <a className="btnAddTask btn">Añadir texto</a>
          </Link>
        </div>
        {/* ORDENAR POR TIEMPO, ES DECIR, LOS RECIENTES ARRIBA DE TODO. */}
        <div className="containerFromTaskList">
        {foundIdeas && foundIdeas.length > 0 ? (
          foundIdeas.map((task) => (
            <div className="taskList" key={task._id}>
                  <div className="taskListTitle">
                    <h3 className="taskTitle">{task.titulo}</h3>
                    <p className="taskDesc">{task.descripcion}</p>
                    <p className="taskNoteAdt">{task.notaAdicional}</p>
                    <p className="taskTimePublished">Uploaded {
                      dayjs().from(dayjs(task.fecha), true)
                    } ago
                  </p>
                </div>
            </div>
          ))
        ) : (
          <h1 className='resultsNotFoundText'>😴 No se encontraron resultados</h1>
        )}
        </div>
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps () {
  const mongo = await mongoConnect();
  const tasks = await tareaSchema.find({});
  // console.log(tasks)
  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks)),
    }
  }
}
