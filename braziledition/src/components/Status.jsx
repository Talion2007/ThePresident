/* eslint-disable react/prop-types */
const Status = ({ voto, reis, reisBrasileiros, cruzeiro, cruzeiroNovo, cruzado, cruzadoNovo, cruzeiroReal, real, ouro, joia }) => {
    return (
      <section>
        <p>Votos: {voto} | Reis: {reis}R | Reis Brasileiros: {reisBrasileiros}Rs | Cruzeiro: {cruzeiro}Cr$</p>
        <p>Cruzeiro Novo (NCr$): {cruzeiroNovo}</p>
        <p>Cruzado (Cz$): {cruzado}</p>
        <p>Cruzado Novo (NCz$): {cruzadoNovo}</p>
        <p>Cruzeiro Real (CR$): {cruzeiroReal}</p>
        <p>Real (R$): {real}</p>
        <p>Ouro: {ouro}</p>
        <p>Joia: {joia}</p>
      </section>
    );
  };
export default Status;