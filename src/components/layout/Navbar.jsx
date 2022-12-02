import { FaFrog, FaSun, FaWater } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <FaFrog />
            <p>Météo</p>
          </li>
          <li className="navbarListItem">
            <FaSun />
            <p>Indice UV</p>
          </li>
          <li className="navbarListItem">
            <FaWater />
            <p>Marées</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
