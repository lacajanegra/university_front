import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";
import Person from "../../components/Person";
import courseService from "../../services/course";
import personService from "../../services/person";
import scoreService from "../../services/score";

function ListStudentsAssigned({ students, course, onClick }) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3">
            {students.map(el => {
                return (
                    <a
                        key={el._id}
                        className="text-decoration-none cursor-pointer"
                        onClick={() => onClick(course._id, el._id)}
                    >
                        <Person {...el.student} />
                    </a>
                )
            })}
        </div>
    )
}

function Course() {
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [dataStudents, setDataStudents] = useState([])
    const [assigned, setAssigned] = useState(false)

    const getData = async () => {
        const dataCourse = await courseService.getCourse(params.id)
        setData(dataCourse)
    }

    const handleClickStudent = (idCourse, idStudent) => {
        navigate(`/app/score/add/${idCourse}/${idStudent}`)
    }

    const getDataStudents = async () => {
        const resStudents = await personService.list({ filter: "Student" })
        const assignedSt = data.students.map(el => el.student)
        const noAssigned = resStudents.filter(el => assignedSt.findIndex(elem => elem._id == el._id) === -1)
        setDataStudents(noAssigned)
    }

    const setAssignStudent = async (idStudent) => {
        try {
            const res = await scoreService.assign({ course: data.course._id, student: idStudent })
            setAssigned(true)
        } catch (error) {
            console.log(error)
        }
    }

    const hadleClickModal = () => {
        getDataStudents()
        setAssigned(false)
    }

    const handleClickAssignStudent = (props) => {
        setAssignStudent(props._id)
    }

    useEffect(() => {
        getData()
    }, [assigned])

    if (!data || !Object.keys(data).length) return (<p>Cargando...</p>)

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">
                {data.course.name} <smal className="h6 text-muted">({data.course.code})</smal>
            </h3>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <Person {...data.course.teacher} />
                </div>
            </div>
            <h4 className="mt-3 mb-1 border-bottom pb-3">
                Estudiantes asignados
            </h4>
            {assigned &&
                <Alert type="success">
                    <i className="bi bi-check-lg me-2"></i>Datos guardados correctamente.
                </Alert>}
            <Modal
                title="Selecciona el estudiante para asignar:"
                buttonContent={"Asignar estudiante"}
                buttonType={"success"}
                onClick={() => hadleClickModal()}
            >
                {dataStudents.length ? dataStudents.map(el => {
                    return (
                        <a
                            key={el._id}
                            className="text-decoration-none cursor-pointer"
                            onClick={() => handleClickAssignStudent(el)}
                            data-bs-dismiss="modal"
                        >
                            <Person {...el} />
                        </a>
                    )
                })
            :<p className="w-100 text-center">No hay estudiates válidos para asignar.</p>}
            </Modal>

            {data.students.length
                ? <ListStudentsAssigned {...data} onClick={handleClickStudent} />
                : <div className="d-flex justify-content-center mt-3"><p>No hay estudiantes asignados.</p></div>}
        </>
    );
}

export default Course;