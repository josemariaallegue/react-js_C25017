import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { token } = useAuth();

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
        <Link to={"/cart"}>
          <i class="bi bi-cart"></i>
        </Link>
      </nav>
    </header>
  );
}
