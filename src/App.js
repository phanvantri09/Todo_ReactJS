import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './views/Todos/ListTodo.js';
import Nav from './views/Nav/Nav.js'
import Home from './views/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <header className="App-header">
      
        <p>
          Todo App With Trí
        </p>
        <ListTodo/>
        

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
    </Router>
  );
}

export default App;
