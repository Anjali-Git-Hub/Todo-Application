import React from 'react'
import Todo from './Todo'
import { useAuth } from '../context/Provider'
import Container from './Container'
function ShowTodo() {
  const {state}=useAuth()
  return<Container>
  {
    state &&
    state.map((todo)=><Todo key={todo.id}   {...todo}/>)
  }
  </Container>
}

export default ShowTodo