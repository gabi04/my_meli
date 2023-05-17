import { useState } from "react";
import Logo_ML from "../../Assets/Logo_ML.png";
import "./Header.sass";

const Header = () => {
  const [query, setQuery] = useState();

  return (
    <header className="header">
      <img src={Logo_ML} alt="Logo_ML" className="header__logo" />
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </header>
  );
};

export default Header;
