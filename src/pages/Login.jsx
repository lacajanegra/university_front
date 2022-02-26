import '../styles/login.css'
import logo from '../assets/images/university-icon.svg'
function Login() {
    return (
        <main className="form-signin text-center">
            <form>
                <img className="mb-4" src={logo} alt="" height={100}/>
                    <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder='Usuario'/>
                            <label for="floatingInput">Usuario</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder='Contraseña'/>
                            <label for="floatingPassword">Contraseña</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-dark" type="submit">Ingresar</button>
                    <p className="mt-5 mb-3 text-muted">Derechos reservados. &copy; 2022</p>
            </form>
        </main>
    );
}

export default Login;