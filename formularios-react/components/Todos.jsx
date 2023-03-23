//le paso como props los todos
const Todos = ({ todos }) => {


    return (
        <div className="mt-5">
            <h2 className="text-center">Todos</h2>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}> {todo.title} </li>
                    ))}
            </ul>
        </div>
    );
};

export default Todos;