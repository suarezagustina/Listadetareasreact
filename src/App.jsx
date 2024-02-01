import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center display-3">Lista de tareas</h1>
        <FormularioTareas></FormularioTareas>
      </Container>
    </>
  );
}

export default App;
