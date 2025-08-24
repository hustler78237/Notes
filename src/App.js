import './App.css';
import Login from './parentcopycomponents/Login';
import Sign from './parentcopycomponents/Sign';
import Show from './parentcopycomponents/Show';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
