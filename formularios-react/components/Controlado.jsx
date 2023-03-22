import { useState } from "react";

//Para trabajar con formularios controlados lo primero es hacer estados para cada uno de nuestros campos input
const Controlado = () => {

    //solo para recordar title es la variable digamos, setTitle es el metodo que modifica esa variable y 
    //entre ('') es el valor inicial en el que arranca la variable
    /*const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('pendiente');*/

    const [todo, setTodo] = useState({
        title: "Todo #1",
        description: "Descripcion #1",
        state: "pendiente"
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo.title, todo.description, todo.state);
    };

    //Reutilizar el onChange
    //le pasamos el e como parametro porque lo necesitamos para captura los valores
    const handleChange = (e) => {
        //puedo usar los corchetes para pasarle una propiedad como parametro
        //yo ya recibo el nombre de la propiedad en el e.target.name, entonces solo me queda
        //pasarlo como parametro y lo puedo hacer de la siguiente manera

        setTodo({
            ...todo, [e.target.name]: e.target.value
        })


    }

    return (

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="To do" className="form-control mb-2" name="title" value={todo.title} onChange={handleChange} />

            <textarea className="form-control mb-2" placeholder="Ingrese Texto" name="description" value={todo.description} onChange={handleChange}></textarea>

            <select className="form-select mb-2" name="state" value={todo.state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>


        </form>
    )
}


export default Controlado;