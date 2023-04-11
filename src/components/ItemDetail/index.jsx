import ItemCount from "../ItemCount";
import { Container, Button } from "react-bootstrap";
import "./itemdetail.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context";

function ItemDetail({ producto }) {
  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(0);
  
  function onAddProduct(cant) {
    setAdded(cant);
    onAdd(producto, cant);
  }

  let textoDescriptivo;
  if (producto.category == "interior") {
    textoDescriptivo = "Interiores con buena luz";
  } else {
    if (producto.category == "exterior") {
      textoDescriptivo = "Exteriores, al sol";
    } else {
      textoDescriptivo = "Media Sombra";
    }
  }
  return (
    <article>
      <Container className="d-flex flex-row gap-5 ctnTotal">
        <div className="imgCtn">
          <img
            src={producto.img}
            alt="imagen de producto"
            className="imgProdu"
          />
        </div>
        <div className="infoProdu">
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <p><strong>Ubicacion: </strong>{textoDescriptivo}</p>
          {added == 0 && (
            <ItemCount
              stock={producto.stock}
              precio={producto.price}
              onAdd={onAddProduct}
            />
          )}
          <div>
            {added >= 1 && (
              <div className="ctas-container d-flex flex-column justify-content-center align-items-center gap-2">
                <NavLink to={"/cart"}>
                  <Button variant="success" className="btnCompras">Terminar Compra</Button>{" "}
                </NavLink>
                <NavLink to={"/"}>
                  <Button variant="primary" className="btnCompras">Seguir Comprando</Button>{" "}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}

export default ItemDetail;
