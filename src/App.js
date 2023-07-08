
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Employeeform from './components/Employeeform';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Dashboard/>}/>
        <Route path='/employeeform' element={<Employeeform/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
