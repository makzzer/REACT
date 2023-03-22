import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({ nombre: "Beti", edad: 2, sexo: "fem" });

    //en este metodo tengo que aumentar el contador de la edad
    const handleClick = () => {
        //tengo que poner las llaves porque estoy modificando un objeto sino no entiende
        //uso el spread operator para que mantenga las otras propiedades del objeto y vuelvo a incializarlo con un nuevo valor
        //si no entiendo el spread operator probar el siguiente codigo
        //setCat ({edad: cat.edad + 1})
        setCat ({...cat,edad: cat.edad + 1})

        //otra opcion de hacer lo anterior es con una funcion de flecha pero me gusta menos
        //setCat ((prev) => ({...prev, edad: cat.edad + 1}))
    }


    return (
        <>
            <h1>{cat.nombre} - {cat.edad}</h1>
            <button onClick={handleClick} className="btn btn-outline-danger mb-2">click acá</button>

        </>
    )





}

export default Cat;