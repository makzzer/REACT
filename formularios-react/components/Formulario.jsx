import { useState } from "react";

//Para trabajar con formularios controlados lo primero es hacer estados para cada uno de nuestros campos input
const Formulario = () => {

    //solo para recordar title es la variable digamos, setTitle es el metodo que modifica esa variable y 
    //entre ('') es el valor inicial en el que arranca la variable
    /*const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('pendiente');*/

    //acá defino los campos segun el "name" del campo en el input del formulario 
    const [todo, setTodo] = useState({
        title: "Todo #1",
        description: "Descripcion #1",
        state: "pendiente",
        priority: true
    });

    //desestructurando el objeto todo , extrayendo sus propiedades y usando estas propiedades en los metodos
    const { title, description, state, priority } = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description, state);
    };

    //Reutilizar el onChange
    //le pasamos el e como parametro porque lo necesitamos para captura los valores
    const handleChange = (e) => {
        //puedo usar los corchetes para pasarle una propiedad como parametro
        //yo ya recibo el nombre de la propiedad en el e.target.name, entonces solo me queda
        //pasarlo como parametro y lo puedo hacer de la siguiente manera

        //e=> setTodo({...todo, priority: e.target.checked})

        /* lo siguiente sería sin el operador ternario, ahora para reciclar el onChange completo le agrego el if en forma de operador ternario
        setTodo({
            ...todo, [e.target.name]: e.target.value
        })
*/

        //Voy a desestructurar el objeto e.target (sería el campo del formulario en el que estoy para extraer sus propiedades)

        const { name, type, checked, value } = e.target

        setTodo({
            ...todo, [name]:
                type === 'checkbox'
                    ? checked
                    : value,
        })

    }

    return (

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="To do" className="form-control mb-2" name="title" value={title} onChange={handleChange} />

            <textarea className="form-control mb-2" placeholder="Ingrese Texto" name="description" value={description} onChange={handleChange}></textarea>

            <div className="form-checked mb-2">
                <input type="checkbox" name="priority" className="form-checked-input me-2" id="inputCheck" checked={priority} onChange={handleChange} />
                <label htmlFor="inputCheck">Dar prioridad</label>

            </div>


            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>


        </form>
    )
}


export default Formulario;