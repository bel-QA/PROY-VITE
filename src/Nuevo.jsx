import { useState } from "react";
function Nuevo(){
    const [contador,setContador]=useState(0);
    const sumar =( )=>
    {
        setContador(contador+1);
    }
        const restar =( )=>
    {
        setContador(contador-1);
    }
    return(
        <div>
            <h1>Contador de Silvana Belen Quisper Arratia</h1>
            <h2>{contador }</h2>
            <button onClick={sumar}>
                clik para aumentar el contador
            </button>
            <br />
            <button onClick={restar}>
                clik para reducir el contador
            </button>
        </div>
    );
}
export default Nuevo;
