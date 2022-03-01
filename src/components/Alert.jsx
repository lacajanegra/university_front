function Alert({ type, children }) {
    return ( 
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            {children}
        </div>
     );
}

export default Alert;