import { Button } from 'react-bootstrap';
import './App.css';
import ControlledCarousel from './Carousel';
import DismissibleExample from './TostBootstrap';


function App() {
  return (
    <div className="App">
     <Button variant="danger">Primary</Button>
     <ControlledCarousel/>
     <DismissibleExample/>
    </div>
  );
}

export default App;
