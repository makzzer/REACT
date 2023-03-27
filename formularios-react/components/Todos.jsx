import Todo from "./Todo";

//le paso como props los todos
const Todos = ({ todos }) => {


    return (
        <div className="mt-5">
            <h2 className="text-center">To-Do</h2>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        //<li key={todo.id}> {todo.title} </li>
                        //Hay que pasa r la key de forma obligatoria
                        <Todo key={todo.id} todo={todo}/>
                    ))}
            </ul>
        </div>
    );
};

export default Todos;