import Todo from "./Todo";

//le paso como props los todos
const Todos = ({ todos, deleteTodo, actualizarTodo }) => {


    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">To-Do</h2>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        //<li key={todo.id}> {todo.title} </li>
                        //Hay que pasa r la key de forma obligatoria
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} actualizarTodo={actualizarTodo} />
                    ))}

                {todos.length === 0 && (<li className="list-group-item text-center">Sin tareas pendientes</li>)
                }
            </ul>
        </div>
    );
};

export default Todos;