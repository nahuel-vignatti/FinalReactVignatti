import { NavLink } from "react-router-dom";
import "./item.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Item({ producto }) {
  return (
    <Col xs={4} className="card gap-2">
      <h5>{producto.name}</h5>
      <img src={producto.img} alt="" className="imgLista" />
      <div>
        <h6 className="mb-3">Precio: ${producto.price}</h6>
        <NavLink to={`/item/${producto.id}`}>
          <Button variant="primary">Ver Detalle </Button>{" "}
        </NavLink>
      </div>
    </Col>
  );
}
export default Item;
