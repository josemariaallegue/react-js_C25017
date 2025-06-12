import PropTypes from "prop-types";

const DEFAULT_PRODUCT = {
  id: 1,
  title: "temp title",
  price: 0.0,
  description: "temp description",
  image: "",
  rating: { rate: 0.0, count: 0 },
};

export default function ProductInfo(props) {
  const { product = DEFAULT_PRODUCT } = props;
  return (
    <div className="product-info">
      <div className="product-info__img-container">
        <img src={product.image} alt="product image" />
      </div>
      <div className="product-info__description">
        <h2 className="product-info__description__title">{product.title}</h2>
        <p className="product-info__description__rating">
          {product.rating.rate} ({product.rating.count})
        </p>
        <p className="product-info__description__price">{product.price}</p>
        <p className="product-info__description__body">{product.description}</p>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
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
