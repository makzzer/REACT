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

  //al Todos le mando todos como props
  //el primero es la propiedad y el segundo entre {} es el valor --> todos={todos}
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario />
      <Todos todos={todos} />

    </div>
  );
};

export default App;

