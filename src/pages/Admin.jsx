import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useProducts } from "../context/ProductsContext";

export default function Admin() {
  const [initialData, setInitialData] = useState(null);
  const [mode, setMode] = useState("create");
  const miDivRef = useRef(null);
  const { addProduct, deleteProduct, updateProduct } = useProducts();

  function handleSubmit(product) {
    if (!initialData) {
      addProduct(product);
    } else {
      updateProduct(product.id, product);
    }
    setInitialData(null);
    setMode("create");
  }

  function handleEdit(product) {
    setInitialData({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    });
    setMode("edit");
    miDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <h1 ref={miDivRef} id="mi-h1">
        Gestión de productos
      </h1>
      <ProductForm
        initialData={initialData}
        onSubmit={handleSubmit}
        mode={mode}
      />
      <ProductTable onEdit={handleEdit} onDelete={deleteProduct} />
    </main>
  );
}
