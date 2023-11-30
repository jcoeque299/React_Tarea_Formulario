import { useRef } from "react"
import { useState } from "react"

function Formulario() {
    //Se pone null porque el formulario no estará cargado en el momento de usar el ref
    const formulario = useRef(null)
    let [error, setError] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()
        const datos = new FormData(formulario.current)
        console.log(datos)

        console.log([...datos.entries()]) //Iterar sobre el FormData

        const objetoDatos = Object.fromEntries([...datos.entries()]) //Convertir las entries a un objeto
        console.log(objetoDatos)

        //Se le asigna un nombre a cada key del objeto y se valida
        const {tareas, descripcion, estado} = objetoDatos
        console.log(objetoDatos)

        if(!tareas.trim()) {
            setError("Tareas no puede estar vacio")
            return
        }
        else if(!descripcion.trim()) {
            setError("Descripcion no puede estar vacio")
            return
        }
        else if(!estado.trim()) {
            setError("Estado no puede estar vacio")
            return
        }
        console.log("Enviando datos")
    }

    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit} ref={formulario}>
                <input id="tareas" name="tareas" type="text" placeholder="Nombre de la tarea" className="form-control mb-2" defaultValue="Tarea"></input>
                <textarea id="descripcion" name="descripcion" placeholder="Descripcion de la tarea" className="form-control mb-2" defaultValue="Descripcion de la tarea"></textarea>
                <select id="estado" name="estado" className="form-control mb-2" defaultValue="pendiente">
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>{error}</p>
        </>
        )
}

export default Formulario