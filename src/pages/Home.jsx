import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

function Home() {
    return (
        <>
            {!window.localStorage.getItem('loggedUserInfo')
                ? <Navigate to='/login' />
                :
                <div className='d-flex'>
                    <Sidebar />
                    <main className='container mt-3 w-100' style={{ marginLeft: "250px" }}>
                        <Outlet />
                    </main>
                </div>}
        </>
    );
}

export default Home;