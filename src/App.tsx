import './app.css';
import Course from './components/course';
import { Navbar } from './components/header';
function App() {
  return (
    <div className="body_complete">
      <Navbar />
      <Course />
    </div>
  );
}

export default App;
