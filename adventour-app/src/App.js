
import AllRoutes from './AllRoutes/AllRoutes';
import Tempnav from './AllRoutes/Tempnav';
import './App.css';
import Navbar from './Components/Faizan/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Tempnav/> */}
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
