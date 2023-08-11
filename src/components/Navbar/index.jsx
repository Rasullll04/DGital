import React from "react";
import { navLinks, getStartedLink } from "../../data/nav.data";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href className="navbar-brand p-0">
        <h1 className="m-0">DGital</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          {navLinks.map((link, index) => {
            if (link.dropdownItems) {
              return (
                <div className="nav-item dropdown" key={index}>
                  <a
                    href={link.href}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {link.label}
                  </a>
                  <div className="dropdown-menu m-0">
                    {link.dropdownItems.map((dropdownItem, i) => (
                      <a
                        key={i}
                        href={dropdownItem.href}
                        className="dropdown-item"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`nav-item nav-link ${
                    link.isActive ? "active" : ""
                  }`}
                >
                  {link.label}
                </a>
              );
            }
          })}
        </div>
        <a href={getStartedLink.href} className={getStartedLink.classNames}>
          {getStartedLink.label}
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
