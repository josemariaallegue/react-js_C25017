import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useState } from "react";

export default function Admin() {
  const [initialData, setInitialData] = useState(null);
  const [mode, setMode] = useState("create");

  function handleSubmit() {
    if (!initialData) {
      alert("creado");
    } else {
      alert("modificado");
    }
    setInitialData(null);
    setMode("create");
  }

  function handleEdit(product) {
    setInitialData({
      title: product.title,
      price: product.price,
      description: product.description,
    });
    setMode("edit");
  }

  return (
    <main>
      <h1>Gestión de productos</h1>
      <ProductForm
        initialData={initialData}
        onSubmit={handleSubmit}
        mode={!initialData ? "create" : "edit"}
      />
      <ProductTable onEdit={handleEdit} />
    </main>
  );
}
