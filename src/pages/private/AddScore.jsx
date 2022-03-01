import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../../components/Alert";
import scoreService from "../../services/score";

function AddScore() {
    const params = useParams()
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [data, setData] = useState({})
    const [updated, setUpdated] = useState(false)

    const handleChangeValue1 = ({ target }) => setValue1(target.value)
    const handleChangeValue2 = ({ target }) => setValue2(target.value)
    const handleChangeValue3 = ({ target }) => setValue3(target.value)

    const getData = async () => {
        try {
            const res = await scoreService.getScoreInfo(params)
            setData(res)
            setValue1(res.value1)
            setValue2(res.value2)
            setValue3(res.value3)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await scoreService.update({ id: data._id, value1, value2, value3 })
            setUpdated(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (!data || !Object.keys(data).length) return (<p>Cargando...</p>)

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">
                <i className="bi bi-person me-1"></i>
                {data.student.name} {data.student.lastName}
                <span className="h6 text-muted"> ({data.student.ID})</span>
            </h3>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h4>
                                    <i className="bi bi-journal-text me-1"></i>
                                    {data.course.name} <span className="h6 text-muted">({data.course.code})</span>
                                </h4>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Primer corte:</label>
                                    <input type="number" value={value1} className="form-control" onChange={handleChangeValue1} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Segundo corte:</label>
                                    <input type="number" value={value2} className="form-control" onChange={handleChangeValue2} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tercer corte:</label>
                                    <input type="number" value={value3} className="form-control" onChange={handleChangeValue3} />
                                </div>
                            </div>
                            {updated &&
                                <Alert type="success">
                                    <i className="bi bi-check-lg me-2"></i>Datos guardados correctamente.
                                </Alert>}
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-success">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddScore;