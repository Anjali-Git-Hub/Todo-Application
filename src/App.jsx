import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';
import Provider from './context/Provider';


function App() {
  return <>
  <Provider>
  <AddTodo/>
  <ShowTodo/>
  </Provider>
  </>
}

export default App