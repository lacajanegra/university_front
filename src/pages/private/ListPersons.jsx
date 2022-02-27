import Person from "../../components/Person";

function ListPersons() {
    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de personas</h3>
            <div className="row row-cols-3">
                <Person/>
                <Person/>
                <Person/>
                <Person/>
            </div>
        </>
    );
}

export default ListPersons;