import { Link } from "react-router-dom";
import { useAuth, useCart } from "../context/index";

export default function Header() {
  const { token } = useAuth();
  const { cart } = useCart();

  return (
    <header>
      <Link to={"/"}>
        <img
          className="header__logo"
          src="/imgs/logo_no-background.png"
          alt="Company logo"
        />
      </Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/electronics"}>Electronica</Link>
        {!token && <Link to={"/login"}>Login</Link>}
        <Link to={"/admin"}>Administración</Link>
        <div className="header__cart-container">
          <Link to={"/cart"}>
            <i class="bi bi-cart">
              {cart.length > 0 && (
                <span className="cart-container__item-count">
                  {cart.length}{" "}
                </span>
              )}
            </i>
          </Link>
        </div>
      </nav>
    </header>
  );
}
