import './App.css';
import Header from './component/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import ToDo from './component/ToDo';
import Complete from './component/Complete';
import Calendar from './component/Calendar';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/complete' element={<Complete />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
