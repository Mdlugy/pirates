import './App.css';
import { Router } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavBar';
import Pirates from './views/Pirates';
import Add from './views/Add';
import One from './views/One';
import Delete from './components/Delete';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Pirates path="/pirates" />
        <Add path="/add" />
        <One path='/view/:id' />
        <Update path='/update/:id' />
        <Delete path='/delete/:id' />
      </Router>
    </div>
  );
}

export default App;
