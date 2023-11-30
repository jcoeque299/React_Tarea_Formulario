function FormularioNoControlado() {
    return (
        <>
            <h1>Formulario no controlado</h1>
            <form>
                <input name="tareas" type="text" placeholder="Nombre de la tarea" className="form-control mb-2" defaultValue="Tarea"></input>
                <textarea name="descripcion" placeholder="Descripcion de la tarea" className="form-control mb-2" defaultValue="Descripcion de la tarea"></textarea>
                <select name="estado" className="form-control mb-2" defaultValue="Pendiente">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
        )
}

export default FormularioNoControlado