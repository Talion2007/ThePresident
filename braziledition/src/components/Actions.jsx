/* eslint-disable react/prop-types */
const Actions = ({ comprarVoto, venderVoto, comprarOuro, aumentarPrecoOuro, comprarReisBrasileiros, comprarCruzeiro, comprarCruzeiroNovo, comprarCruzado, comprarCruzadoNovo, comprarCruzeiroReal, comprarReal}) => {
    return (
      <section>
        <button onClick={comprarVoto}>Comprar Voto</button>
        <button onClick={venderVoto}>Vender Voto</button>
        <button onClick={comprarOuro}>Comprar Ouro</button>
        <button onClick={aumentarPrecoOuro}>Aumentar Preço do Ouro</button>
        
        <button onClick={comprarReisBrasileiros}>Comprar Reis Brasileiros</button>
        <button onClick={comprarCruzeiro}>Comprar Cruzeiro</button>
        <button onClick={comprarCruzeiroNovo}>Comprar Cruzeiro Novo</button>
        <button onClick={comprarCruzado}>Comprar Cruzado</button>
        <button onClick={comprarCruzadoNovo}>Comprar Cruzado Novo</button>
        <button onClick={comprarCruzeiroReal}>Comprar Cruzeiro Real</button>
        <button onClick={comprarReal}>Comprar Real</button>
      </section>
    );
  };
  export default Actions;