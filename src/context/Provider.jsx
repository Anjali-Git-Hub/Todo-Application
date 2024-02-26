import React, { useContext, useEffect } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
const Auth = createContext()

function reducer(state,action){
    if(action.type==="DELETE_TODO"){
     return state.filter((todo)=> todo.id!==action.payload)
    }
  
    if(action.type==="TOGGLE_COMPLETED"){
      return state.map((todo)=>{
        if(todo.id===action.payload){
          return {...todo,completed:!todo.completed}
        }
        return todo
      })
     }
     if(action.type==="ADD_TODO"){
      return [...state,action.payload]
     }
    
    return state;
  }
  
  const intialTodos=[
    {id:"1",task:"complete react",completed:false},
    {id:"2",task:"sleeping",completed:false},
  
  
  ]

function Provider({children}) {
    const[state,dispatch]= useReducer(reducer,JSON.parse(localStorage.getItem("myTodos")) || intialTodos)
    useEffect(()=>{
      localStorage.setItem("myTodos",JSON.stringify(state))
    },[state])


    function handleDelete(id){
        dispatch({type:"DELETE_TODO",payload:id})
    }
    function handleToggle(id){
        dispatch({type:"TOGGLE_COMPLETED",payload:id})
    }
    function addNewTodo(newTodo){
        dispatch({type:"ADD_TODO",payload:newTodo})
    }
   
  return <>
    <Auth.Provider value={{state,dispatch,handleDelete,handleToggle,addNewTodo}}>

  {children}
  </Auth.Provider>

  </>
}
export function useAuth(){
  return  useContext(Auth)
}

export default Provider