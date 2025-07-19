import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

export default function Admin() {
  const [initialData, setInitialData] = useState(null);
  const [mode, setMode] = useState("create");
  const miDivRef = useRef(null);

  function handleSubmit() {
    if (!initialData) {
      toast.success("Creado");
    } else {
      toast.warn("Modificado");
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
      <ProductTable onEdit={handleEdit} />
    </main>
  );
}
