import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context";
import ProductInfo from "../components/ProductInfo";

export default function ProductDetail() {
  const { products, fetchProduct } = useProducts();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localProduct = products.find((item) => item.id === id);

    if (localProduct) {
      setProduct(localProduct);
      setIsLoading(false);
    } else {
      fetchProduct(id).then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
    }
  }, [products]);

  if (isLoading) {
    return (
      <div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado.</p>
      </div>
    );
  }

  return (
    <main>
      <h1>Detalle de producto</h1>
      <ProductInfo product={product} />
    </main>
  );
}
