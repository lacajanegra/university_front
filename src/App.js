import './styles/global.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ListCourses from './pages/private/ListCourses';
import AddPerson from './pages/private/AddPerson';
import ListPersons from './pages/private/ListPersons';
import AddCourse from './pages/private/AddCourse';
import AddScore from './pages/private/AddScore';
import Course from './pages/private/Course';
import StudentCourse from './pages/private/StudentCourse';
import RequirePermissions from './pages/private/RequirePermissions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/app' element={<Home/>}>
          <Route index element={<Navigate to='course/list' />} />
          <Route path='person/add' element={<RequirePermissions><AddPerson /></RequirePermissions>} />
          <Route path='person/list' element={<RequirePermissions><ListPersons /></RequirePermissions>} />
          <Route path='course/list' element={<ListCourses />} />
          <Route path='course/add' element={<RequirePermissions><AddCourse /></RequirePermissions>} />
          <Route path='course/:id' element={<RequirePermissions><Course /></RequirePermissions>} />
          <Route path='score/add/:course/:student' element={<RequirePermissions><AddScore /></RequirePermissions>} />
          <Route path='student/:course/:student' element={<StudentCourse />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
