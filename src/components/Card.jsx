import PropTypes from "prop-types";
import Swal from "sweetalert2";

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

  function handleClick() {
    Swal.fire({
      title: "¡Agregado!",
      text: `${product.title} agregado al carrito.`,
      confirmButtonText: "Ok",
    });
  }

  return (
    <div className="card">
      <div className="card__img-container">
        <img src={product.image} alt="product image" className="card__img" />
      </div>
      <div className="card__text-container">
        <h3 className="card__title">{product.title}</h3>
        {/* <p>{product.description} </p> */}
        <p className="card__price">${product.price}</p>
        <button
          className="card__button button--basic button--blue"
          onClick={handleClick}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
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
