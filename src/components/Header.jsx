import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img
        className="header__logo"
        src="/imgs/logo_no-background.png"
        alt="Company logo"
      />
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/electronics"}>Electronica</Link>
        <Link to={"/admin"}>Administración</Link>
        <Link to={"/cart"}>
          <i class="bi bi-cart"></i>
        </Link>
      </nav>
    </header>
  );
}
