import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ListCourses from './pages/private/ListCourses';
import AddPerson from './pages/private/AddPerson';
import ListPersons from './pages/private/ListPersons';
import AddCourse from './pages/private/AddCourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/app' element={<Home/>}>
          <Route index element={<ListCourses />} />
          <Route path='person/add' element={<AddPerson />} />
          <Route path='person/list' element={<ListPersons />} />
          <Route path='course/add' element={<AddCourse />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
