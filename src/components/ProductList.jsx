import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import Card from "./Card";
import PropTypes from "prop-types";

const DEAFULT_CATEGORY = null;

export default function ProductList(props) {
  const { category = DEAFULT_CATEGORY } = props;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(category);
      setProducts(data);
    };

    loadProducts();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Cargando productos...</p>
      </div>
    );
  }
  return (
    <div className="main__cards-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  category: PropTypes.string,
};
