import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorLogin';
import FacultyLogin from './components/FacultyLogin';
import PatientSignUp from './components/PatientSignUp';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="patientSignUp" element={<PatientSignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="patientLogin" element={<PatientLogin />} />
        <Route path="doctorLogin" element={<DoctorLogin />} />
        <Route path="facultyLogin" element={<FacultyLogin />} />
        <Route path='user' element={<User/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
