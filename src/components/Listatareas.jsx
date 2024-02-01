import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Listatareas = (props) => {
    return (
        <ListGroup>
            {
                props.tareas.map((elementoTarea, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTarea={props.borrarTarea}/>)
            }
        </ListGroup>
    );
};

export default Listatareas;