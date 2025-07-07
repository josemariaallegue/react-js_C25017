import { useEffect, useState } from "react";
// import { fetchProducts } from "../api/products";
import { useProducts } from "../context";
import Card from "./Card";
import PropTypes from "prop-types";

const DEAFULT_CATEGORY = null;

export default function ProductList(props) {
  const { category = DEAFULT_CATEGORY } = props;
  const { products, isLoading } = useProducts();
  const productsFiltered = category
    ? products.filter((product) => {
        return product.category === category;
      })
    : products;

  if (isLoading) {
    return (
      <div>
        <p>Cargando productos...</p>
      </div>
    );
  }
  return (
    <div className="main__cards-container">
      {productsFiltered.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  category: PropTypes.string,
};
