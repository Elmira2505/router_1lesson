import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from "./component/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Photos from "./pages/Photos"

function App() {
  return (
    <div className="App">
      <h1>Router-rouer</h1>
        <Button> Click me</Button>
        <Header />
    </div>
  );
}

export default App;

