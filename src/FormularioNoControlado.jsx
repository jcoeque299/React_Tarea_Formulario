function FormularioNoControlado() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const tareas = document.querySelector("#tareas").value
        const descripcion = document.querySelector("#descripcion").textContent
        const estado = document.querySelector("estado")
        console.log(`${tareas}\n${descripcion}\n${estado}`)
    }
    return (
        <>
            <h1>Formulario no controlado</h1>
            <form onSubmit={handleSubmit}>
                <input id="tareas" name="tareas" type="text" placeholder="Nombre de la tarea" className="form-control mb-2" defaultValue="Tarea"></input>
                <textarea id="descripcion" name="descripcion" placeholder="Descripcion de la tarea" className="form-control mb-2" defaultValue="Descripcion de la tarea"></textarea>
                <select id="estado" name="estado" className="form-control mb-2" defaultValue="pendiente">
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
        )
}

export default FormularioNoControlado