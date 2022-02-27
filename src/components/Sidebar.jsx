import logo from '../assets/images/university-icon-white.svg'

function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "250px", height: "100vh", position: "fixed" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img className="fs-4" src={logo} alt="" height={42} />
                <span className="fs-4">University</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <a href="#" className="nav-link text-white active">
                        <i className="bi bi-card-list me-2"></i>
                        Cursos
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white" aria-current="page">
                    <i class="bi bi-person-plus me-2"></i>
                        Agregar persona
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle ms-2 me-2"></i>
                    <strong>Admin</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;