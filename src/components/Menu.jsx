import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState(props.props.searchString);

  const searchHandler = (searchStr) => {
    props.props.setSearchString(searchStr);
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">MealDB Demo</a>
          <a href="/favorites" className="nav-link">
            Favorites ({`${props.props.favoritesCount}`})
          </a>
          <form className="d-flex" role="search">
            <input
              value={searchString}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                e.preventDefault();
                setSearchString(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                searchHandler(searchString);
              }}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
