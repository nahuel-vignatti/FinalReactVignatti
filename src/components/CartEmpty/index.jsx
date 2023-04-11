import emptyCart from "../../assets/emptyCart.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./cartempty.css";

function CartEmpty() {
  return (
    <section className="carritoVacio d-flex flex-column align-items-center align-content-center">
      <h1 className="emptyCartTitle">Su carrito esta vacio</h1>
      <img
        src={emptyCart}
        alt="Su Carrito esta vacio"
        className="imgCartEmpty mb-3"
      />
      <NavLink to={"/"}>
        <Button variant="primary">Ir a Comprar! </Button>{" "}
      </NavLink>
    </section>
  );
}
export default CartEmpty;
