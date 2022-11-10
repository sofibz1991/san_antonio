import './App.css';
import ItemList from "./componentes/ItemListContainer";
import NavBar from './componentes/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar/>
        <ItemList greeting={"¡Bienvenido!"}/>
      </main>
    </div>
  );
}

export default App;
