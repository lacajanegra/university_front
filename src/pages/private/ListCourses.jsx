import Course from "../../components/Course";

function ListCourses() {
    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de cursos</h3>
            <div className="row row-cols-3">
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </>
    );
}

export default ListCourses;