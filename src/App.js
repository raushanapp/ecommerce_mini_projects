import "./App.css"
import { Navbar } from "./Components/Navbar";
import { MainRoute } from "./Pages/MainRoute";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute/>
      <h1>E-commerce Application </h1>
    
    </div>
  );
}

export default App;
