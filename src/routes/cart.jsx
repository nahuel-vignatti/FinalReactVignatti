import { Context } from "../context";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartEmpty from "../components/CartEmpty";


function Cart() {
  const { productsAdded,clear } = useContext(Context);
  let total = productsAdded.reduce((accum,elem)=> accum + (elem.quantity * elem.price),0);
  
  function vaciarCarrito(){
    if(confirm("Desea vaciar el carrito?")){
      clear;
    }
  }
  if (productsAdded.length > 0) {
    return (
      <div className="d-flex flex-column align-content-center">
        <div className="d-flex flex-column align-items-center mb-5">
          <h1 className="text-center mb-3">Carrito de Compras</h1>
          <Button variant="danger" onClick={vaciarCarrito} className="boton mt-3">Vaciar Carrito </Button>{" "}
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          {productsAdded.map((elemento, index) => (
            <CartItem producto={elemento} key={elemento.id} />
          ))}
        </div>
        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
            <h3 className="text-center">Total de la compra: ${total}</h3>
            <NavLink to={'/checkout'}>
              <Button variant="primary" className="boton">Enviar Pedido </Button>{" "}
            </NavLink>
        </div>
      </div>
    );
  } else {
        return (
          <CartEmpty />
        );
  }
}

export default Cart;
