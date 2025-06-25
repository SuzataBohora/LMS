import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import MyCourses from './pages/educator/MyCourses';
import AddCourse from './pages/educator/AddCourse';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './Components/student/Navbar';
import "quill/dist/quill.snow.css";
 import { ToastContainer } from 'react-toastify';

const App = () => {

const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isEducatorRoute && <Navbar />}
    

      <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path='/courselist' element={<CoursesList />}/>
        <Route path='/courselist/:input' element={<CoursesList />} /> 
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/myenrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        <Route path='/educator' element={<Educator />} >
           <Route path='/educator' element={<Dashboard />} />
           <Route path='addcourse' element={<AddCourse />} />
           <Route path='mycourses' element={<MyCourses />} />
           <Route path='studentenrolled' element={<StudentsEnrolled />} />

        </Route>

      </Routes>
    </div>
  )
}



export default App;