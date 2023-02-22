import './App.css';
import {Routes, Route} from "react-router-dom"
import Register from './pages/Register';


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Register />} />
     </Routes>
    </div>
  );
}

export default App;
