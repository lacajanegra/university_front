function AddScore() {
    return ( 
        <>
            <h3 className="mb-3 border-bottom pb-3">*Nombre del curso*</h3>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h4>Notas para: *Nombre de estudiante*</h4>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Primer corte:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Segundo corte:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tercer corte:</label>
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

export default AddScore;