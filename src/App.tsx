import './App.css';
import FunctionalHandling from './EventHandling/FunctionalHandling';
import ParentComponent from './Props/ParentComponent';

function App() {
  return (
    <div className="App">
    <ParentComponent/>
    <FunctionalHandling/>
    </div>
  );
}

export default App;
