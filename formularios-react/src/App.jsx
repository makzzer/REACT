import { useState } from "react";
import Formulario from "../components/Formulario";
import Todos from "../components/Todos";


//recomienda inicializar el state para que cada vez que renderiza el componente no se esta creando el state
const initialStateTodos = [
  {
    id: 1,
    title: 'Todo #1',
    description: 'Descripción #1',
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: 'Todo #2',
    description: 'Descripción #2',
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: 'Todo #3',
    description: 'Descripción #3',
    state: false,
    priority: true,
  },
]

const App = () => {

  //voy a inicializar un state para las tareas, las eliminadas, creadas, editadas, todo lo qeu sea tareas
  //lo inicializo con un array vacio eso es el useState([])
  //ya sabemos dentro del useState lo primero es la variable o el objeto, y lo segundo el metodo que modifica a ese objeto
  const [todos, setTodos] = useState(initialStateTodos)

  //acá voy a hacer el estado global para la funcion de agregar Todos
  const addTodo = todo => setTodos([...todos, todo])
  //el addTodo tiene que viajar al formulario

  //recibe como parametro el id
  //filtra el arreglo de todos con todo lo que no sea el id de la tarea seleccionada 
  //despues le pasa ese nuevo array sin la tarea al setTodos
  //el deleteTodo tiene que viajar por los componentes todo y todos tambien, porque en todos el todo ejecuta la funcion
  //y en todo está el botón como tal que usa el metodo
  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  //todo.state = !todo.state; significa---> entonces el todo.state va a ser igual a lo contrario que tenga en el momento, si es true, va a ser false
  const actualizarTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo
    })
    setTodos(newArray)
  }

  //metodo para ordenar todos osea las tareas
  const orderTodo = arrayTodos => {
    return arrayTodos.sort((a, b) => {
      if (a.priority == b.priority) return 0;
      if (a.priority === true) return -1;
      if (a.priority === false) return 1;
    })
  }


  //al Todos le mando todos como props
  //el primero es la propiedad y el segundo entre {} es el valor --> todos={todos}
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} actualizarTodo={actualizarTodo} />

    </div>
  );
};

export default App;

