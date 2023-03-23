//le paso como props los todos
const Todos = ({ todos }) => {


    return (
        <div>
            <h2>Todos</h2>
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