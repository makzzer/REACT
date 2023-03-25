import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

import { useState } from "react";



//Para trabajar con formularios controlados lo primero es hacer estados para cada uno de nuestros campos input
const Formulario = ({ addTodo }) => {

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

        //lo siguente es lo mismo que title.trim()==="" , osea si el campo está vacio
        if (!title.trim() || !description.trim()) {
            //hago el siguiente return para que no siga con el codigo si encontró error

            return swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No completaste titulo ni descripcion rey',

            })

        }

        //acá programo el addTodo
        addTodo({
            //lo siguiente nos devuelve un numero desde 1970 con una milesima de segundos, solucion temporal para generar ids aleatorios
            id: Date.now(),
            //en lo siguiente hago una copia del todo que se está agregando, está mas arriba este todo
            ...todo,
            //lo siguiente va a devolver true o false
            state: state === 'completado'
        })

        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea agregada correctamente perrito malvado',
            showConfirmButton: false,
            timer: 1500
        })


        console.log(title, description, state);


        //el nuevo todo hay que construirlo porque las propiedades no son iguales entre todos









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

            <button type="submit" className="btn btn-primary">Agregar Tarea</button>


        </form>
    )
}


export default Formulario;