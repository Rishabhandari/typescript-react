import './App.css';
import FunctionalHandling from './EventHandling/FunctionalHandling';
import ParentComponent from './Props/ParentComponent';
import TextDisplay from './ShowText/TextDisplay';
import Todos from './Todo/Todos';

function App() {
  return (

    <div className="App">
      {/* // <ParentComponent />
    // <FunctionalHandling /> */}
      {/* <Todos /> */}
      <TextDisplay/>
    </div >

  );
}

export default App;
