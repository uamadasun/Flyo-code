import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>

        <Route exact path="/" element ={<Homepage/>} />
        

        <Route path="/category/:id"  element ={<Category/>} />

      </Routes>
      
    </div>
  );
}

export default App;
