import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>TO DO APP</h1>
        <div className="top">
          <input type="text" placeholder="ADD TO DO LIST"/>
          <div className="add">Add</div>
        </div>
        <div className="list">
          <ToDo text='hi'/>
        </div>
      </div>


    </div>
  );
}

export default App;
