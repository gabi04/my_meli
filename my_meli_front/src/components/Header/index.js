import { useState } from "react";
import Logo_ML from "../../Assets/Logo_ML.png";
import ic_Search from "../../Assets/ic_Search.png";
import "./Header.sass";
import axios from "axios";

const Header = ({ setItems }) => {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/api/items?q=${query}`;
    axios
      .get(url)
      .then((response) => {
        setItems(response.data);
      })
      .catch(function (error) {
        console.error("getSports error => ", error);
      });
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={Logo_ML} alt="Logo_ML" className="header__logo" />
        <form className="header__form">
          <input
            className="header__form__input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nunca dejes de buscar"
          />
          <button className="header__form__submit" onClick={handleSearchSubmit}>
            <img src={ic_Search} alt="icon_search" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
