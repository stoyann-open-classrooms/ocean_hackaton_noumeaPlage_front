import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../assets/Logo_Ville_De_Nouméa.png'
function Header() {

    const onClick = () => {
        console.log('TODO => open menu');
    }
  return (
    <header>
        <button onClick={onClick} className="burgerIcone navbarListItem">
          <GiHamburgerMenu />
        </button>
      <h1>Nouméa plage</h1>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
}

export default Header;
