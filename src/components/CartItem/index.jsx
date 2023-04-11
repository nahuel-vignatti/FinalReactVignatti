import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../../context";
import "./cartitem.css";
import imgBorrar from "../../assets/trash.png";

function CartItem({ producto }) {
  const { removeItem } = useContext(Context);
  return (
    <Container className="d-flex flex-row align-items-center card__item w-50 px-5">
      <div className="d-flex flex-row cajaItem justify-content-around">
        <div>
          <h5>{producto.name}</h5>
          <h6>Cantidad: {producto.quantity}</h6>
          <h6>Precio Unitario: ${producto.price}</h6>
          <h6>Total: ${producto.price * producto.quantity}</h6>
        </div>
        <img
          src={producto.img}
          alt="imagen de producto"
          className="imgProduCart"
        />
      </div>
      <a href="#">
        <img
          className="imgEliminar"
          src={imgBorrar}
          alt="Eliminar Producto"
          onClick={() => removeItem(producto.id)}
        />
      </a>
    </Container>
  );
}

export default CartItem;
