import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ListCourses from './pages/private/ListCourses';
import AddPerson from './pages/private/AddPerson';
import ListPersons from './pages/private/ListPersons';
import AddCourse from './pages/private/AddCourse';
import AddScore from './pages/private/AddScore';
import Course from './pages/private/Course';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/app' element={<Home/>}>
          <Route path='person/add' element={<AddPerson />} />
          <Route path='person/list' element={<ListPersons />} />
          <Route path='course/list' element={<ListCourses />} />
          <Route path='course/add' element={<AddCourse />} />
          <Route path='course/:id' element={<Course />} />
          <Route path='score/add' element={<AddScore />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
