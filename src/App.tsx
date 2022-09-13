import './app.css';
import Course from './components/course';
import { Navbar } from './components/header';
import { Home } from './components/home';
function App() {
  return (
    <div className="body_complete">
      <Navbar />
      <div className="container-home">
        <Home />
      </div>
      {/* <Course /> */}
    </div>
  );
}

export default App;
