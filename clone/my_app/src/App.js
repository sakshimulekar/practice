import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Stories from './components/Stories';
import Pagination from './components/Pagination';
import Login from './components/Login';
// import { useContext } from 'react';
// import { AuthContext } from './Context/Context';
// //

function App() {
  // const data=useContext(AuthContext)
  //onsole.log(data)
  return (
    <div className="App">
      <Login/>
      <News/>
      <Stories/>
      <Pagination/>
    </div>
  );
}

export default App;
