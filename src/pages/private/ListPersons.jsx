import { useEffect, useState } from "react";
import Person from "../../components/Person";
import personService from "../../services/person"

function ListPersons() {
    const [people, setPeople] = useState([])

    const getData = async () => {
        const data = await personService.list({filter: "all"})
        setPeople(data)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de personas</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {people.map(element => <Person key={element._id} {...element}/>)}
            </div>
        </>
    );
}

export default ListPersons;