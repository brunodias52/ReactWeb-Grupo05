import React,{useState} from "react";
import Pedidos from './components/Pedidos'

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