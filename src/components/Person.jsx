function Person(props) {
    const { _id, ID, name, lastName, type } = props
    return (
        <div key={_id} className="col mb-3">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        {type == "Teacher"
                            ? <i className="bi bi-briefcase" style={{ fontSize: "50px" }}></i>
                            : <i className="bi bi-person" style={{ fontSize: "50px" }}></i>
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="text-truncate">
                                <strong>{`${name} ${lastName}`}</strong>
                            </div>
                            <div>
                                <small className="text-muted">{ID}</small>
                            </div>
                            <div>
                                <span>{type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Person;