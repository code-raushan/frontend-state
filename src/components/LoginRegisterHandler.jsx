import { Navigate, Outlet } from 'react-router-dom'
const LoginRegisterHandler = () => {
    let token = localStorage.getItem('token')

    return (
        token ? <Navigate to='/dashboard' replace={true} /> : <Outlet />
    )
}

export default LoginRegisterHandler