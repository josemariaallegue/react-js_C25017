import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useProducts } from "../context/ProductsContext";

export default function ProductForm(props) {
  const { initialData, onSubmit, mode } = props;
  const [form, setForm] = useState(() => ({
    title: initialData?.title || "",
    price: initialData?.price || "",
    description: initialData?.description || "",
  }));
  const [error, setError] = useState("");

  useEffect(() => {
    setForm({
      title: initialData?.title || "",
      price: initialData?.price || "",
      description: initialData?.description || "",
    });
  }, [initialData]);

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
      onSubmit({
        id: initialData?.id || "",
        title: form.title,
        price: form.price,
        description: form.description,
        category: initialData?.category || "",
        image: initialData?.image || "",
        rating: {
          rate: initialData?.rating.rate || 0,
          count: initialData?.rating.count || 0,
        },
      });
      setForm({ title: "", price: "", description: "" });
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
          name="title"
          id="form-product-name"
          value={form.title}
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
        <button
          className="product__form-btn-submit button--basic button--blue"
          type="submit"
        >
          {mode === "create" ? "Crear producto" : "Editar producto"}
        </button>
      </form>
    </div>
  );
}

ProductForm.propTypes = {
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["create", "edit"]),
};
