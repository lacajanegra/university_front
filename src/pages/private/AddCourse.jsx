import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";
import Person from "../../components/Person";
import courseService from "../../services/course";
import personService from "../../services/person";

function AddCourse() {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [teacher, setTeacher] = useState({name: '', lastName: ''})
    const [teachers, setTeachers] = useState([])

    const [alertView, setAlertView] = useState(false)
    const [saved, setSaved] = useState(false)

    const handleChangeCode = ({ target }) => setCode(target.value)
    const handleChangeName = ({ target }) => setName(target.value)
    // const handleChangeTeacher = ({ target }) => setTeacher(target.value)

    const resetForm = () => {
        setCode('')
        setName('')
        setTeacher({name: '', lastName: ''})
        setAlertView(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await courseService.save({ code, name, teacher: teacher._id })
            setSaved(true)
            resetForm()
        } catch (error) {
            setSaved(false)
        }
        setAlertView(true)
    }

    const handleClickGetId = (props) => {
        setTeacher(props)
    }

    const getTeachers = async () => {
        const data = await personService.list({ filter: "Teacher" })
        setTeachers(data)
    }

    useEffect(() => {
        getTeachers()
    }, [])

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Agregar curso</h3>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Código:</label>
                                    <input type="text" className="form-control" value={code} onChange={handleChangeCode} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" value={name} onChange={handleChangeName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profesor:</label>
                                    <input type="text" className="form-control" value={`${teacher.name} ${teacher.lastName}`} disabled />
                                    <Modal title="Listado de profesores">
                                        {teachers.map(el => {
                                            return (
                                                <a
                                                    key={el._id}
                                                    className="text-decoration-none cursor-pointer"
                                                    onClick={() => handleClickGetId(el)}
                                                    data-bs-dismiss="modal"
                                                >
                                                    <Person {...el} />
                                                </a>
                                            )
                                        })}
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        {alertView && (saved ?
                            <Alert type="success">
                                <i className="bi bi-check-lg me-2"></i>Datos guardados correctamente.
                            </Alert>
                            :
                            <Alert type="danger">
                                <i className="bi bi-x-lg me-2"></i>Error al guardar los datos.
                            </Alert>)}
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-success" type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddCourse;