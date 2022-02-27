import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

function Home() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <main className='container mt-3'>
                <Outlet />
            </main>
        </div>
    );
}

export default Home;