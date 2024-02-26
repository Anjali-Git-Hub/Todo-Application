import { useAuth } from "../context/Provider"
import styles from './Todo.module.css'
import {ImCross} from 'react-icons/im'
function Todo({id,task,completed}) {
 const {handleDelete,handleToggle}=useAuth()
     
  return <div className={styles.todos}>
    <div className={styles.completedAndTask}>
     <input className={styles.checkbox}  type="checkbox" checked={completed} onChange={()=>{handleToggle(id)}}  />
    <p style={{
        textDecoration: completed?"line-through":"solid",
        opacity:completed?"0.8":"1",
        textTransform:"capitalize",
        fontWeight:"500"
    }}>{task}</p>
    </div>
    <button className={styles.removeTodo}  onClick={()=>{handleDelete(id)}}><ImCross/></button>
  </div>
}

export default Todo