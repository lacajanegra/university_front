import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../components/Course";
import courseService from "../../services/course";

function ListCourses() {
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo'))
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    const getData = async () => {
        const data = await courseService.list()
        setCourses(data)
    }

    const getDataFromStudent = async () => {
        const data = await courseService.getCoursesByStudent(user._id)
        const dataFiltred = data.map(el => el.course)
        setCourses(dataFiltred)
    }

    const handleClick = (props) => {
        user.type === "Teacher" 
        ?navigate(`/app/course/${props._id}`)
        :navigate(`/app/student/${props._id}/${user._id}`)
    }

    useEffect(() => {
        user.type === "Teacher" ? getData() : getDataFromStudent()
    }, [])

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de cursos</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {courses.map(element => {
                    return (
                        <a
                            key={element._id}
                            className="text-decoration-none cursor-pointer"
                            onClick={() => handleClick(element)}
                        >
                            <Course {...element} />
                        </a>
                    )
                })}
            </div>
        </>
    );
}

export default ListCourses;