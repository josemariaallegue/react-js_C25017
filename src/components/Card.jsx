import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart, useAuth } from "../context/index";

const DEFAULT_PRODUCT = {
  id: 1,
  title: "temp title",
  price: 0.0,
  description: "temp description",
  image: "",
  rating: { rate: 0.0, count: 0 },
};

export default function Card(props) {
  const { product = DEFAULT_PRODUCT } = props;
  const { token } = useAuth();
  const { addItem } = useCart();

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (token) {
      addItem(product);
      Swal.fire({
        title: "¡Agregado!",
        text: `${product.title} agregado al carrito.`,
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "¡Error al agregar el producto!",
        text: `Por favor ingrese a su cuenta.`,
        confirmButtonText: "Ok",
      });
    }
  }

  return (
    <Link to={`/products/${product.id}`}>
      <div className="card">
        <div className="card__img-container">
          <img src={product.image} alt="product image" className="card__img" />
        </div>
        <div className="card__text-container">
          <h3 className="card__title">{product.title}</h3>
          <p className="card__price">${product.price}</p>
          <button
            className="card__button button--basic button--blue"
            onClick={handleClick}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};
