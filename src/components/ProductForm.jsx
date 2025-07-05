import { useState } from "react";

export default function ProductForm() {
  const { form, setForm } = useState({ name: "", price: "", description: "" });
  const { product, setProduct } = useState({
    name: "",
    price: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit() {
    e.preventDefault;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} method="post"></form>
      <label htmlFor="form-product-name">Nombre:</label>
      <input
        type="text"
        name="form-product-name"
        id="form-product-name"
        value={form["name"]}
        onChange={handleChange}
        required
      />
      <label htmlFor="form-product-price">Precio:</label>
      <input
        type="number"
        name="form-product-price"
        id="form-product-price"
        value={form["price"]}
        onChange={handleChange}
        required
      />
      <label htmlFor="form-product-description">Descripcion</label>
      <textarea
        name="form-product-description"
        id="form-product-description"
        value={form["description"]}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Ok</button>
    </div>
  );
}
