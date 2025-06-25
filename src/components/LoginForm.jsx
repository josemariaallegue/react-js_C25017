import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    if (login(form.username, form.password)) {
      navigate(from, { replace: true });
    } else {
      setError("Usuario o contraseña invalidos.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setError("");
  }

  return (
    <div className="login__container">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit} className="login__form">
        {error && (
          <div style={{ color: "red" }} className="login__form-error">
            {error}
          </div>
        )}
        <label htmlFor="username" className="login__form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="login__form-username"
          value={form.username}
          onChange={handleChange}
          className="login__form-input"
        />
        <label htmlFor="password" className="login__form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="login__form-password"
          value={form.password}
          onChange={handleChange}
          className="login__form-input"
        />
        <button
          type="submit"
          className="login__form-btn-submit button--basic button--blue"
        >
          Logearse
        </button>
      </form>
    </div>
  );
}
