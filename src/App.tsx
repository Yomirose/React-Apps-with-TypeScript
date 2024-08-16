import Greeting from "./Components/Greeting";
import Counter from "./Components/Counter";
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting name="John" />
      <Counter />
    </div>
  );
}

export default App;
