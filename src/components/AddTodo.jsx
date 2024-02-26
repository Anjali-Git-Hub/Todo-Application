import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/Provider';
import styles from './AddTodo.module.css'
import Container from './Container';
function AddTodo() {
const {addNewTodo}=useAuth()
    const[title,setTitle]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(title.trim().length===0){
            alert("type something")
            return ;
        }
        const newTodo={
            id:crypto.randomUUID(),
            task:title,
            completed:false

        }
        addNewTodo(newTodo)
        setTitle("")
    }
  return <Container>
    <div className={styles.todoSearch}>
  <h1 style={{color:"#fff",  margin:"1em 0", fontSize:"3rem"}}>Todo List</h1>
  
  <form onSubmit={handleSubmit} className={styles.todoForm}>
    <input className={styles.input} type="text" name="newTodo" id="newTodo" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <button className={styles.submitBtn}  type='submit'>Add Todo</button>
  </form>
  </div>
  </Container>
}

export default AddTodo