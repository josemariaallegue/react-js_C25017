import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.price === "0") {
      setError("El precio tiene que ser mayor a $0.");
    } else if (form.description.length < 10) {
      setError("La descripción tiene que contener un minimo de 10 caracteres.");
    } else {
      alert("Cambios realizado");
      setForm({ name: "", price: "", description: "" });
    }
  }

  return (
    <div className="form-product__container">
      <form className="product__form" onSubmit={handleSubmit}>
        {error && (
          <div style={{ color: "red" }} className="product__form-error">
            {error}
          </div>
        )}
        <label className="product__form-label" htmlFor="form-product-name">
          Nombre:
        </label>
        <input
          className="product__form-input"
          type="text"
          name="name"
          id="form-product-name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label className="product__form-label" htmlFor="form-product-price">
          Precio:
        </label>
        <input
          className="product__form-input"
          type="number"
          name="price"
          id="form-product-price"
          value={form.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
        <label
          className="proudct__form_label"
          htmlFor="form-product-description"
        >
          Descripcion
        </label>
        <textarea
          className="product__form-textarea"
          name="description"
          id="form-product-description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <button className="product__form-btn-submit" type="submit">
          Ok
        </button>
      </form>
    </div>
  );
}
