import "./itemdetailcontainer.css";
import { useId, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
function ItemDetailContainer({ itemId }) {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", itemId);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  if (!producto) {
    return <p>Loading...</p>;
  }

  // useEffect(() => {
  //     const productoPromise = new Promise((resolve, reject) =>
  //       setTimeout(() => resolve(Products), 1000)
  //     );
  //     productoPromise
  //       .then((reponse) => {

  //         const produBuscado = reponse.find(elem=>elem.id == itemId);
  //         setProducto(produBuscado);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [itemId]);

  return (
    <main className="itemDetail">
      <ItemDetail producto={producto} />
    </main>
  );
}

export default ItemDetailContainer;
