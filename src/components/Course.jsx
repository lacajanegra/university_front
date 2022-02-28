function Course(props) {
    const { _id, code, name, teacher } = props
    return (
        <div key={_id} className="col mb-3">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <i className="bi bi-journal-text" style={{ fontSize: "50px" }}></i>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="text-truncate">
                                <strong>{name}</strong>
                            </div>
                            <div>
                                <small className="text-muted">{code}</small>
                            </div>
                            <div>
                                <small className="text-muted text-truncate">{`${teacher.name} ${teacher.lastName}`}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;