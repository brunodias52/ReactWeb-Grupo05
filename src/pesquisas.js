import React,{useState} from "react";
import Pedidos from './pages/Pedidos'

function Pesquisas() {
    const [pedido,setPedido] = useState();
  
    function setpedido (e) {
      setpedido(e.target.value);  
    }

    return(
        
      <Pedidos/>
    );
  }

  export default Pesquisas;