function AddCourse() {
    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Agregar curso</h3>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Código:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profesor:</label>
                                    <input type="text" className="form-control" />
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

export default AddCourse;