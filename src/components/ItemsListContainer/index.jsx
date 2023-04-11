import "./itemlistcontainer.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../itemList";
import { useEffect, useState } from "react";

function ItemListContainer({ isCategoryRoute, categoryId }) {
  const [listaProdu, setListaProdu] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );

      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setListaProdu(docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                              .sort((a,b)=>{
                                if(a.name>b.name){
                                  return 1;
                                }else{
                                  return -1;
                                }
                              }));
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setListaProdu(docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                              .sort((a,b)=>{
                                if(a.name>b.name){
                                  return 1;
                                }else{
                                  return -1;
                                }
                              }));
        })
        .catch((error) => console.log({ error }));
    }

  }, [categoryId]);

  return (
    <main className="cont">
      <ItemList productos={listaProdu} />
    </main>
  );
}

export default ItemListContainer;
