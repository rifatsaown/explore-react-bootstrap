import { Button } from 'react-bootstrap';
import './App.css';
import ControlledCarousel from './Carousel';


function App() {
  return (
    <div className="App">
     <Button variant="danger">Primary</Button>
     <ControlledCarousel/>
    </div>
  );
}

export default App;
