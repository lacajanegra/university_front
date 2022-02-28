import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../components/Course";
import courseService from "../../services/course";

function ListCourses() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    const getData = async () => {
        const data = await courseService.list()
        setCourses(data)
    }

    const handleClick = (props) => {
        // window.localStorage.setItem('courseInfo', JSON.stringify(props))
        navigate(`/app/course/${props._id}`)
    }

    useEffect(() => {
        getData()
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