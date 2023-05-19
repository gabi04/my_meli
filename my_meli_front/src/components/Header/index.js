import { useState } from "react";
import Logo_ML from "../../Assets/Logo_ML.png";
import ic_Search from "../../Assets/ic_Search.png";
import "./Header.sass";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("search");
  const [query, setQuery] = useState(queryParam || "");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?search=${query}`);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img
          src={Logo_ML}
          alt="Logo de mercado libre"
          className="header__logo"
        />
        <form className="header__form" onSubmit={handleSearchSubmit}>
          <input
            className="header__form__input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nunca dejes de buscar"
          />
          <Link className="header__form__submit" to={`/items?search=${query}`}>
            <img src={ic_Search} alt="lupa" />
          </Link>
        </form>
      </div>
    </header>
  );
};

export default Header;
