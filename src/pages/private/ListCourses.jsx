import { useEffect, useState } from "react";
import Course from "../../components/Course";
import courseService from "../../services/course";

function ListCourses() {
    const [courses, setCourses] = useState([])

    const getData = async () => {
        const data = await courseService.list()
        setCourses(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de cursos</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {courses.map(element => <Course {...element} />)}
            </div>
        </>
    );
}

export default ListCourses;