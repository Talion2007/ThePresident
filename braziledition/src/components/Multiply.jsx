/* eslint-disable react/prop-types */
function Multiplicador({ multiply, multiplyPurchase }) {
    return (
      <button onClick={multiplyPurchase}>Multiplicador de Compra: {multiply}x</button>
    );
  }
  
  export default Multiplicador;
  