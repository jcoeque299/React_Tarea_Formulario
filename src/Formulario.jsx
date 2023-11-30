import { useRef } from "react"
import { useState } from "react"

function Formulario() {
    const formulario = useRef(null)
    let [message, setMessage] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()
        const datos = new FormData(formulario.current)

        const objetoDatos = Object.fromEntries([...datos.entries()])

        const {tareas, descripcion, estado} = objetoDatos

        !tareas.trim() ? setMessage("Tareas no puede estar vacio") : (!descripcion.trim()) ? setMessage("Descripcion no puede estar vacio") : (!estado.trim()) ? setMessage("Estado no puede estar vacio") : (setMessage("Todo OK"))
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
            <p>{message}</p>
        </>
        )
}

export default Formulario