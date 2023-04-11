import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const parametros = useParams();
  return (
    <main className="contenedor">     
      <ItemDetailContainer itemId={parametros.id}/>  
    </main>
  );
}

export default ItemRoot;
