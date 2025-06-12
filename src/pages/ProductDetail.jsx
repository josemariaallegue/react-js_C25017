import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../api/products";
import ProductInfo from "../components/ProductInfo";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProduct(id);
      setProduct(data);
    };
    loadProducts();
  }, []);

  return (
    <main>
      <h1>Detalle de producto</h1>
      <ProductInfo key={id} product={product} />
    </main>
  );
}
