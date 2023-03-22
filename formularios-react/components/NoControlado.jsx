import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {
    //handle es una convencion para llamar a las funciones que esten controladas por eventos
    //hay que hacer el prevent default primero
    const handleSubmit = (e) => {
        e.preventDefault();
        //Antes de comenzar limpio los campos de error
        setError("")

        //-----CAPTURAR LOS DATOS------//

        //form.current me devuelve todo el Form y dentro de el sus atributos entries
        console.log(form.current)

        //Acá voy a capturar lo que venga en los campos del formulario, creo un new form data y le paso todo el formF
        //console.log (new FormData(form.current))
        //Como recorrer los entries

        const data = new FormData(form.current)
        //Hacer un spreadOperator para todo lo que esté en su interior lo va a intentar pasar a un Iterable, seria de la siguiente manera

        console.log(...data.entries())

        //lo que voy a hacer ahora es a esa data convertirla en un objeto
        const dataObject = Object.fromEntries([...data.entries()])

        //hago la desestructuracion en el siguiente paso
        const { title, description, state } = Object.fromEntries([...data.entries()])

        console.log(title, description, state)




        //-----Validar LOS DATOS------//

        //En los formularios no controlados, la validacion se hace cuando se presiona el botón de procesar del formulario, en cambio en los controlados salen avisos en tiempo real de maximo de caracters etc
        //con trim primera version, uso la negada que dejo abajo esta la comento pero hacen lo mismo ponele
        //if (title.trim() === "") {


        if (!title.trim() || (!description.trim() || (!state.trim())))       
            return setError("LLena los campos faltantes por favor")
        



        //console.log(dataObject)

    };

    //este useRef es un Hook (funcionalidades extra que trae React sin instalar nada)
    //le paso null porque cuando creamos la referencia, todavia no está renderizado el formulario
    //En resumen manipulo el virtual DOM que tiene REACT que está todo el tiempo comparandose con el DOM real
    //Por eso tengo que trabajar siempre con el virtual dom
    //uso el useRef para referenciar al formulario y asi capturar todo lo que venga en los inputs
    const form = useRef(null)

    const [error, setError] = useState("")


    return (

        //voy a usar formData entonces tengo que agregarle le etiqueta name a todos los campos
        //va entre {} dentro del ref porque está refereciando a una varieble en JS , para qe se interprete como javascript y no al objeto form del HTML
        <form onSubmit={handleSubmit} ref={form}>

            <input type="text" placeholder="To do" className="form-control mb-2" name="title" />

            <textarea className="form-control mb-2" placeholder="Ingrese Texto" name="description"></textarea>

            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>


            {//lo siguiente es un operador ternario donde uso el && por si no necesito el else
                error !== "" && error}


        </form>


    )
}


export default NoControlado;