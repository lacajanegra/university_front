import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/university-icon-white.svg'

function Sidebar() {
    const navigate = useNavigate()
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo'))
    const handleSignOut = () => {
        window.localStorage.removeItem('loggedUserInfo')
        navigate('/login')
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "250px", height: "100vh", position: "fixed" }}>
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white">
                <img className="fs-4" src={logo} alt="" height={42} />
                <span className="fs-4">University</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <NavLink to='/app/course/list' className="nav-link text-white">
                        <i className="bi bi-card-list me-2"></i>
                        Cursos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/app/person/list' className='nav-link text-white'>
                        <i className="bi bi-person-lines-fill me-2"></i>
                        Personas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/app/person/add' className="nav-link text-white">
                        <i className="bi bi-person-plus me-2"></i>
                        Agregar persona
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/app/course/add' className="nav-link text-white">
                        <i className="bi bi-journal-plus me-2"></i>
                        Agregar curso
                    </NavLink>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle ms-2 me-2"></i>
                    <strong>{`${user.name} ${user.lastName}`}</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" onClick={handleSignOut}>Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;