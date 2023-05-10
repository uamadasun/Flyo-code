import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';
import "./index.css"
import { Login } from './pages/Login';
import Registration from './pages/Registration';
import { useState, createContext, useContext } from 'react';
import { useAuthContext } from './context/AuthContext';
import { removeToken } from './helpers';
import Dashboard from './pages/Dashboard';




export const LoginContext = createContext();

function App() {

  const [logged, setLogged] = useState(null);
  const {user} = useAuthContext();



  return (
    <LoginContext.Provider value={[logged, setLogged]}>
      <div className="App">
        <SiteHeader>
        <Routes>
          <Route exact path="/" element ={<Homepage/>} />
          <Route path="category/:id"  element ={<Category/>} />
          <Route path="login"  element ={<Login />} />
          <Route path="registration"  element ={<Registration/>} />
          <Route path="dashboard/:id" element = {<Dashboard/>}/>

        </Routes>
        </SiteHeader>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
