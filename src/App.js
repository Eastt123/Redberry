import './App.css';
import {Route, Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import Completion from './pages/Completion';
import LaptopInfo from './pages/LaptopInfo';
import LaptopList from './pages/LaptopList';

function App() {
  return (
   <>
    <Routes>
      <Route path='/'  element={<LandingPage />} />
      <Route path={`/add`} element={<FormPage />} />
      <Route path='/completion' element={<Completion />} />
      <Route path='/laptoplist' element={<LaptopList />} />
      <Route path='/laptop/:id' element={<LaptopInfo />} />
    </Routes>
   </>
  );
}

export default App;
