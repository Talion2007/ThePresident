/* eslint-disable react/prop-types */
import Collor from "../assets/Collor.jpg";

function Header({ end }) {
  return (
    <header>
      <h1>Idle President<button className="secreto"> - </button>The Game</h1>
      <img src={Collor} alt="Collor" />
      <h1>{end}</h1>
    </header>
  );
}

export default Header;
