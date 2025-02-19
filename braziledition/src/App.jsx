/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import Collor from "./assets/Collor.jpg";
import Multiplicador from "./components/Multiply";
import ComprarBrasilia from "./components/BuyBrasilia";

function App() {
  const [voto, setVoto] = useState(10);
  const [reis, setReis] = useState(0); //(R) //Reis comprados por voto
  const [reisBrasileiros, setReisBrasileiros] = useState(0); //(Rs) //10R
  const [cruzeiro, setCruzeiro] = useState(0); //(Cr$) //100Rs
  const [cruzeiroNovo, setCruzeiroNovo] = useState(0); //(NCr$) //1000Cr$
  const [cruzado, setCruzado] = useState(0); //(Cz$) //10000NCr$
  const [cruzadoNovo, setCruzadoNovo] = useState(0); //(NCz$)  //100000Cz$
  const [cruzeiroReal, setCruzeiroReal] = useState(0); ///CR$ //10000000NCz$
  const [real, setReal] = useState(0); //R$ //100000000NCr$
  const [ouro, setOuro] = useState(0); //Ouro //1000000000R$
  const [joia, setJoia] = useState(0); //Joia //10000000000Ouro

  const [preco, setPreco] = useState(2);
  const [multiply, setMultiply] = useState(1);
  const [end, setEnd] = useState("");

  const [Rs, setRs] = useState(10);
  const [Cr$, setCr$] = useState(10);
  const [NCr$, setNCr$] = useState(10);
  const [Cz$, setCz$] = useState(10);
  const [NCz$, setNCz$] = useState(10);
  const [CR$, setCR$] = useState(10);
  const [R$, setR$] = useState(10);
  const [K, setK] = useState(10);
  const [Ct, setCt] = useState(10);

  //! ----------------------------------------

  function comprarVoto() {
    if (reis >= 1 * multiply) {
      setVoto(voto + 1 * multiply);
      setReis(reis - 1 * multiply);
    }
  }

  function venderVoto() {
    if (voto >= 1 * multiply) {
      setVoto(voto - 1 * multiply);
      setReis(reis + preco * multiply);
    }
  }

  function comprarReisBrasileiros() {
    if (reis >= 10 * multiply) {
      setReisBrasileiros(reisBrasileiros + 1 * multiply);
      setReis(reis - 10 * multiply);
    }
  }

  function comprarCruzeiro() {
    if (reisBrasileiros >= 100 * multiply) {
      setCruzeiro(cruzeiro + 1 * multiply);
      setReisBrasileiros(reisBrasileiros - 100 * multiply);
    }
  }

  function comprarCruzeiroNovo() {
    if (cruzeiro >= 1000 * multiply) {
      setCruzeiroNovo(cruzeiroNovo + 1 * multiply);
      setCruzeiro(cruzeiro - 1000 * multiply);
    }
  }

  function comprarCruzado() {
    if (cruzeiroNovo >= 10000 * multiply) {
      setCruzado(cruzado + 1 * multiply);
      setCruzeiroNovo(cruzeiroNovo - 10000 * multiply);
    }
  }

  function comprarCruzadoNovo() {
    if (cruzado >= 100000 * multiply) {
      setCruzadoNovo(cruzadoNovo + 1 * multiply);
      setCruzado(cruzado - 100000 * multiply);
    }
  }

  function comprarCruzeiroReal() {
    if (cruzadoNovo >= 1000000 * multiply) {
      setCruzeiroReal(cruzeiroReal + 1 * multiply);
      setCruzadoNovo(cruzadoNovo - 1000000 * multiply);
    }
  }

  function comprarReal() {
    if (cruzeiroReal >= 10000000 * multiply) {
      setReal(real + 1 * multiply);
      setCruzeiroReal(cruzeiroReal - 10000000 * multiply);
    }
  }

  function comprarOuro() {
    if (real >= 100000000 * multiply) {
      setOuro(ouro + 1 * multiply);
      setReal(real - 100000000 * multiply);
    }
  }

  function comprarJoia() {
    if (ouro >= 1000000000 * multiply) {
      setJoia(joia + 1 * multiply);
      setOuro(ouro - 1000000000 * multiply);
    }
  }

  function aumentarPrecoReisBrasileiros() {
    if (reisBrasileiros >= Rs) {
      setReisBrasileiros((reisBrasileiros) => reisBrasileiros - Rs);
      setPreco((preco) => preco * 2);
      setRs((Rs) => Rs * 10);
    }

    if (Rs >= 10000000) {
      setPreco((preco) => preco * 2);
      setReisBrasileiros((reisBrasileiros) => reisBrasileiros - Rs);
      setRs("MAX");
    }
  }

  function aumentarPrecoCruzeiro() {
    if (cruzeiro >= Cr$) {
      setCruzeiro((cruzeiro) => cruzeiro - Cr$);
      setPreco((preco) => preco * 2);
      setCr$((Cr$) => Cr$ * 10);
    }

    if (Cr$ >= 10000000) {
      setPreco((preco) => preco * 2);
      setCruzeiro((cruzeiro) => cruzeiro - Cr$);
      setCr$("MAX");
    }
  }

  function aumentarPrecoCruzeiroNovo() {
    if (cruzeiroNovo >= NCr$) {
      setCruzeiroNovo((cruzeiroNovo) => cruzeiroNovo - NCr$);
      setPreco((preco) => preco * 2);
      setNCr$((NCr$) => NCr$ * 10);
    }

    if (NCr$ >= 10000000) {
      setPreco((preco) => preco * 2);
      setCruzeiroNovo((cruzeiroNovo) => cruzeiroNovo - NCr$);
      setNCr$("MAX");
    }
  }

  function aumentarPrecoCruzado() {
    if (cruzado >= Cz$) {
      setCruzado((cruzado) => cruzado - Cz$);
      setPreco((preco) => preco * 2);
      setCz$((Cz$) => Cz$ * 10);
    }

    if (Cz$ >= 10000000) {
      setPreco((preco) => preco * 2);
      setCruzado((cruzado) => cruzado - Cz$);
      setCz$("MAX");
    }
  }

  function aumentarPrecoCruzadoNovo() {
    if (cruzadoNovo >= NCz$) {
      setCruzadoNovo((cruzadoNovo) => cruzadoNovo - NCz$);
      setPreco((preco) => preco * 2);
      setNCz$((NCz$) => NCz$ * 10);
    }

    if (NCz$ >= 10000000) {
      setPreco((preco) => preco * 2);
      setCruzadoNovo((cruzadoNovo) => cruzadoNovo - NCz$);
      setNCz$("MAX");
    }
  }

  function aumentarPrecoCruzeiroReal() {
    if (cruzeiroReal >= CR$) {
      setCruzeiroReal((cruzeiroReal) => cruzeiroReal - CR$);
      setPreco((preco) => preco * 2);
      setCR$((CR$) => CR$ * 10);
    }

    if (CR$ >= 10000000) {
      setPreco((preco) => preco * 2);
      setCruzeiroReal((cruzeiroReal) => cruzeiroReal - CR$);
      setCR$("MAX");
    }
  }

  function aumentarPrecoReal() {
    if (real >= R$) {
      setReal((real) => real - R$);
      setPreco((preco) => preco * 2);
      setR$((R$) => R$ * 10);
    }

    if (R$ >= 10000000) {
      setPreco((preco) => preco * 2);
      setReal((real) => real - R$);
      setR$("MAX");
    }
  }

  function aumentarPrecoOuro() {
    if (ouro >= K) {
      setOuro((ouro) => ouro - K);
      setPreco((preco) => preco * 2);
      setK((K) => K * 10);
    }

    if (K >= 10000000) {
      setPreco((preco) => preco * 2);
      setOuro((ouro) => ouro - K);
      setK("MAX");
    }
  }

  function aumentarPrecoJoia() {
    if (joia >= Ct) {
      setJoia((joia) => joia - Ct);
      setPreco((preco) => preco * 2);
      setCt((Ct) => Ct * 10);
    }

    if (Ct >= 10000000) {
      setPreco((preco) => preco * 2);
      setJoia((joia) => joia - Ct);
      setCt("MAX");
    }
  }

  function comprarBraslia() {
    if (joia >= 100000000) {
      setJoia(joia - 100000000);
      setEnd("Você Comprou Brasília, Parabéns!!!");
    }
  }

  function multiplyPurchase() {
    setMultiply(multiply === 1 ? 10 : multiply === 10 ? 100 : 1);
  }

  function moneyPunch() {
    setJoia(99999999999);
  }

  return (
    <article>
      <h1>
        The President
        <button className="secreto" onClick={moneyPunch}>
          {" "}
          -{" "}
        </button>
        Brazil Edition
      </h1>
      <img src={Collor} alt="Collor" />
      <h1>{end}</h1>
      <section>
        <p>
          Votos: {voto} | Reis: {reis}R | Reis Brasileiros: {reisBrasileiros}Rs
          | Cruzeiro: {cruzeiro}Cr$ | Cruzeiro Novo: {cruzeiroNovo}NCr$ |
          Cruzado: {cruzado}Cz${" "}
        </p>{" "}
        <p>
          Cruzado Novo: {cruzadoNovo}NCz$ | Cruzeiro Real: {cruzeiroReal}CR$ |
          Real: {real}R$ | Ouro: {ouro}K | Joia: {joia}Ct
        </p>
      </section>
      <section>
        <div>
          <button onClick={comprarVoto}>Comprar Voto ({1 * multiply}R)</button>
          <button onClick={venderVoto}>
            Vender Voto ({preco * multiply}R)
          </button>
        </div>

        <div>
          <button onClick={comprarReisBrasileiros}>
            Comprar Reis Brasileiros ({10 * multiply}R)
          </button>
          <button onClick={aumentarPrecoReisBrasileiros}>
            Investir em Manaus ({Rs}Rs){" "}
          </button>
        </div>

        <div>
          <button onClick={comprarCruzeiro}>
            Comprar Cruzeiros ({100 * multiply}Cr$)
          </button>
          <button onClick={aumentarPrecoCruzeiro}>
            Investir em Salvador ({Cr$}Rs){" "}
          </button>
        </div>

        <div>
          <button onClick={comprarCruzeiroNovo}>
            Comprar Cruzeiro Novo ({1000 * multiply}Cr$)
          </button>
          <button onClick={aumentarPrecoCruzeiroNovo}>
            Investir em Belo Horizonte ({NCr$}NCr$){" "}
          </button>
        </div>
      </section>
      <article>
        <div>
          <Multiplicador
            multiply={multiply}
            multiplyPurchase={multiplyPurchase}
          />
           <ComprarBrasilia
           comprarBraslia={comprarBraslia}/>
        </div>
      </article>
    </article>
  );
}

export default App;
