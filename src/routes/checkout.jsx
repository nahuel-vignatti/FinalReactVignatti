import { useContext } from "react";
import "./checkout.css";
import { NavLink } from "react-router-dom";
import { Button,Form } from "react-bootstrap";
import { Context } from "../context";
import CartEmpty from "../components/CartEmpty";
import { addDoc,collection,doc,getFirestore,updateDoc, } from "firebase/firestore";


function Checkout(){
    const {productsAdded,clear} = useContext(Context);
    const db = getFirestore();

    function updateOrder(productId,finalStock){
        const itemRef = doc(db,"items",productId);
        updateDoc(itemRef,{stock: finalStock}).catch((error)=> console.log(error));
    }

    function sendOrder(){

        const name = document.getElementById("formName").value;
        const phone = document.getElementById("formPhone").value;
        const email = document.getElementById("formEmail").value;

        const collectionRef = collection(db,"orders");
        const total = productsAdded.reduce((accum,elem)=> accum + (elem.quantity * elem.price),0);
        const fecha = new Date().toLocaleDateString();
        
        const order = {
            buyer: {name: `${name}`,email:`${email}`,phone:`${phone}`},
            items: productsAdded,
            fecha,
            total,
        };

        addDoc(collectionRef,order)
            .then(()=>{
                productsAdded.map((product)=>{
                    const finalStock = product.stock - product.quantity;
                    updateOrder(product.id,finalStock);
                });
                alert("Pedido enviado con Exito!");
                clear();
                
            })
            .catch((error)=>console.log(error))

               

    }


    if(productsAdded.length > 0){
        return(
            <section className="d-flex flex-column align-items-center">
                <h3 className="mb-5 mt-3">Para Finalizar su pedido, complete el formulario</h3>
                <form id="formu" name="formu" className="formu d-flex flex-column align-items-center w-25 gap-2">                
                    
                    <Form.Label className="textoLabel">Nombre Completo</Form.Label>
                    <Form.Control id="formName" type="text" placeholder="Ingrese Nombre completo" required/>

                    <Form.Label className="textoLabel">Telefono</Form.Label>
                    <Form.Control id="formPhone" type="number" placeholder="Ingrese telefono" required/>

                    <Form.Label className="textoLabel">Email</Form.Label>
                    <Form.Control id="formEmail" type="email" placeholder="Ingrese su email" required/>
                    <NavLink to={'/cart'}>
                        <Button variant="success" className="mt-3 formButton" >Ver Pedido </Button>{" "}
                    </NavLink>
                    <Button variant="primary" className="formButton" onClick={sendOrder} >Enviar Pedido </Button>{" "}
                </form>
            </section>
        );
    }else{
       return (
        <CartEmpty />
       );
    }

}

export default Checkout;