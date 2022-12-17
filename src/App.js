// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Updated from './Components/Updated';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
    <Route exact path='/'element={<Create/>}></Route>
    <Route path='/Read' element={<Read/>} />
    <Route path='/Update' element={<Updated/>} />
     </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;