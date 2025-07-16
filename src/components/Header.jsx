import { Link } from "react-router-dom";
import { useAuth, useCart } from "../context/index";
import { useState } from "react";

export default function Header() {
  const { token } = useAuth();
  const { getTotalItems } = useCart();
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen((prevOpen) => !prevOpen);
    console.log(open);
  }

  return (
    <header>
      <Link to={"/"}>
        <img
          className="header__logo"
          src="/imgs/logo_no-background.png"
          alt="Company logo"
        />
      </Link>
      <nav className={`${open ? "nav--open" : ""}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/electronics"}>Electronica</Link>
        {!token && <Link to={"/login"}>Login</Link>}
        <Link to={"/admin"}>Administración</Link>
        <div className="header__cart-container">
          <Link to={"/cart"}>
            <i className="bi bi-cart">
              {getTotalItems() > 0 && (
                <span className="cart-container__item-count">
                  {getTotalItems()}{" "}
                </span>
              )}
            </i>
          </Link>
        </div>
      </nav>

      <button className="hamburger" onClick={() => handleClick()}>
        <i className="bi bi-list"></i>
      </button>
    </header>
  );
}
