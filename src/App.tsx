import './App.css';
import FunctionalHandling from './EventHandling/FunctionalHandling';
import ParentComponent from './Props/ParentComponent';
import Todos from './Todo/Todos';

function App() {
  return (

    <div className="App">
      {/* // <ParentComponent />
    // <FunctionalHandling /> */}
      <Todos />
    </div >

  );
}

export default App;
