import { useEffect, useState } from "react";

function Course() {
    const [data, setData] = useState({})

    useEffect(() => {
        const dataCourse = JSON.parse(window.localStorage.getItem('courseInfo'))
        setData(dataCourse)
    }, [])

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">
                {data.name} <smal className="h6 text-muted">({data.code})</smal>
            </h3>

        </>
    );
}

export default Course;