import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { CreateProduct } from './pages/CreateProduct';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create-product" element={<CreateProduct/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
