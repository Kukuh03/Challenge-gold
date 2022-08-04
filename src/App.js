import Home from './pages/Home';
import Cars from './pages/Cars';
import DetailCar from './pages/DetailCar';
import { Routes, Route,} from "react-router-dom";
import "./App.css"

const App = () => { 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailcar/:id" element={<DetailCar />} />
      </Routes>
    </div>
  );
}

export default App;