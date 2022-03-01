import { Navigate, useLocation } from "react-router-dom";

function RequirePermissions({ children }) {
    const location = useLocation()
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo'))
    return user.type === "Teacher" ? children : <Navigate to="/app/course/list" state={{ from: location }} />
}

export default RequirePermissions;