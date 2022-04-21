import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const call = async () => {
    const response = await fetch(
      "http://wordpress.test/wp-json/wp/v2/categories"
    );
    const response2 = await response.json();
    setStato(response2);
  };

  const [stato, setStato] = useState([]);

  useEffect(() => {
    call();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fa fa-twitter p-2" aria-hidden="true"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end px-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="px-3 nav-link">
                Home
              </Link>
            </li>
            {stato.map((el) => {
              return (
                <li className="nav-item" key={el.id}>
                  <Link to={`/${el.id}`} className="px-3 nav-link" key={el.id}>
                    {el.name}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link to="/pages/chi-siamo" className="px-3 nav-link">
                Chi siamo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/contatti" className="px-3 nav-link">
                Contatti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
