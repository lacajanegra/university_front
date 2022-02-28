function Modal({ title, children }) {
    return (
        <>
            <button type="button" className="btn btn-secondary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Seleccionar
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ background: "#f5f5f5" }}>
                            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;