import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h1>Ups... esta página no existe.</h1>
      <img
        src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
        alt="404 gif"
        style={{ width: "300px", margin: "2rem 0" }}
      />
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}
