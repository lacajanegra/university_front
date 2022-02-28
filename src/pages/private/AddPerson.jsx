import { useState } from "react";
import Alert from "../../components/Alert";
import save from "../../services/person"

function AddPerson() {
    const [document, setDocument] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [type, setType] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [alertView, setAlertView] = useState(false)
    const [saved, setSaved] = useState(false)

    const handleChangeDocument = ({ target }) => setDocument(target.value)
    const handleChangeName = ({ target }) => setName(target.value)
    const handleChangeLastName = ({ target }) => setLastName(target.value)
    const handleChangeDateBirth = ({ target }) => setDateBirth(target.value)
    const handleChangeType = ({ target }) => setType(target.value)
    const handleChangeUser = ({ target }) => setUser(target.value)
    const handleChangePassword = ({ target }) => setPassword(target.value)

    const resetForm = () => {
        setDocument('')
        setName('')
        setLastName('')
        setDateBirth('')
        setType('')
        setUser('')
        setPassword('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await save({
                ID: document,
                name,
                lastName,
                dateBirth,
                type,
                user,
                password
            })
            setSaved(true)
            resetForm()
        } catch (error) {
            setSaved(false)
        }
        setAlertView(true)
    }

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Agregar persona</h3>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h4>Datos Personales</h4>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Documento de identificación:</label>
                                    <input type="text" className="form-control" value={document} onChange={handleChangeDocument} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" value={name} onChange={handleChangeName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Apellido:</label>
                                    <input type="text" className="form-control" value={lastName} onChange={handleChangeLastName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fecha de nacimiento:</label>
                                    <input type="date" className="form-control" value={dateBirth} onChange={handleChangeDateBirth} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo:</label>
                                    <select className="form-select" value={type} onChange={handleChangeType}>
                                        <option></option>
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
                                    <input type="text" className="form-control" value={user} onChange={handleChangeUser} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña:</label>
                                    <input type="password" className="form-control" value={password} onChange={handleChangePassword} />
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

export default AddPerson;