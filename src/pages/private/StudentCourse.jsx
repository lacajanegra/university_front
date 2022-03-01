import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import scoreService from "../../services/score";

function StudentCourse() {
    const params = useParams()
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [data, setData] = useState({})
    const [average, setAverage] = useState(0)

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

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setAverage((value1 + value2 + value3) / 3)
    }, [value1, value2, value3])

    if (!data || !Object.keys(data).length) return (<p>Cargando...</p>)

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">
                <i className="bi bi-person me-1"></i>
                {data.student.name} {data.student.lastName}
                <span className="h6 text-muted"> ({data.student.ID})</span>
            </h3>
            <div className="row justify-content-center mb-2">
                <div className="col-md-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h4>
                                <i className="bi bi-journal-text me-1"></i>
                                {data.course.name} <span className="h6 text-muted">({data.course.code})</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <div className="card">
                        <h6 className="card-header">Primer corte</h6>
                        <div className="card-body">
                            {value1}
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card">
                        <h6 className="card-header">Segundo corte</h6>
                        <div className="card-body">
                            {value2}
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card">
                        <h6 className="card-header">Tercer corte</h6>
                        <div className="card-body">
                            {value3}
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card">
                        <h6 className="card-header bg-dark text-dark bg-opacity-10">Promedio</h6>
                        <div className="card-body">
                            {average.toFixed(1)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentCourse;