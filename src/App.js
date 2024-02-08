import './App.css';
import Movielist from "./Movielist"
import { AddMovie } from './components/AddMovie';
import {Routes,Route} from "react-router-dom"
import {Portal} from './components/Portal'
import Login from './Login';
import Register from './Register'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/portal' element={<Portal/>}>
          <Route path='addmovie' element={<AddMovie/>}/>
          <Route path='movielist' element={<Movielist/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;