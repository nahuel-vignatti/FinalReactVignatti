import "./itemcount.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
function ItemCount({ stock, precio, onAdd }) {
  const [cant, setCant] = useState(1);

  return (
    <Container fluid className="d-flex flex-column align-items-center ctnCount">
      <h4>Precio: ${precio}</h4>
      <p>
        <strong>Unidades Disponibles: </strong>
        {stock}
      </p>
      <div className="lineaBotones">
        <Button
          variant="light"
          onClick={() => setCant((prevState) => prevState - 1)}
          className="botonCant"
          disabled={cant < 2}
        >
          -
        </Button>{" "}
        <h4>{cant}</h4>
        <Button
          variant="light"
          onClick={() => setCant((prevState) => prevState + 1)}
          className="botonCant"
          disabled={cant === stock}
        >
          +
        </Button>{" "}
      </div>
      <Button variant="primary" onClick={() => onAdd(cant)}>
        Agregar Al carrito
      </Button>{" "}
    </Container>
  );
}

export default ItemCount;
