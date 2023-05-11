import React from "react";
import { Link } from "react-router-dom/dist";

const appRoutes = [
  {name: "Home", url: "/"},
  {name: "Social Networks", url: "social-networks"},
  {name: "Counter 1", url: "counter/1"},
  {name: "Counter 2", url: "counter/2"}
];

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black navbar-dark">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                appRoutes.map(data =>
                  <li key={data.url} className="nav-item">
                    {/* Link avoids to render all the page, so we don't use <a> */}
                    <Link className="nav-link" to={data.url}>
                      {data.name}
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
