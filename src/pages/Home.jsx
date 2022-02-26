import { Outlet } from 'react-router-dom'

function Home() {
    return ( 
        <div>
            <h2>Home</h2>
            <Outlet/>
        </div>
     );
}

export default Home;