function AddPerson() {
    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Agregar persona</h3>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h4>Datos Personales</h4>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Documento de identificación:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Apellido:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fecha de nacimiento:</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo:</label>
                                    <select class="form-select">
                                        <option selected></option>
                                        <option value="Student">Estudiante</option>
                                        <option value="Teacher">Profesor</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h4>Datos de acceso</h4>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Usuario:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña:</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-success">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddPerson;