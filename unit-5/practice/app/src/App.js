import './App.css';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Logout/>
    </div>
  );
}

export default App;
