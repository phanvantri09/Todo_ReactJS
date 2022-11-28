import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './views/Todos/ListTodo.js';
import Nav from './views/Nav/Nav.js'
import Home from './views/Home/Home.js';
import {
  BrowserRouter ,
  Routes ,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav/>
      <header className="App-header">
        {/* react- roter 
        exact  đúng name mới load, switch đã dc thay thế bởi routers */}
        <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/todo" element={<ListTodo/>}/>
        <Route exact path="/users" element={<ListTodo/>}/>
        </Routes >

      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
