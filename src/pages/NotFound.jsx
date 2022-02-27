import logo from '../assets/images/university-icon.svg'

function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <main className="text-center">
                <img className="mb-4" src={logo} alt="" height={150} />
                <h1 className="display-1">404</h1>
                <p className="lead">La página a la que está tratando de ingresar no existe.</p>
                <button className="btn btn-dark">Ir al inicio</button>
            </main>
        </div>
    );
}

export default NotFound;