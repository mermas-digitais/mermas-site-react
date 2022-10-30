import './app.css';
import { Navbar } from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className="body_complete">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
