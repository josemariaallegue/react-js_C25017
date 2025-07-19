import { useCart } from "../context";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const { cart, getTotalItems, removeItem } = useCart();
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/");
  }

  return (
    <div className="cart-container">
      <div className="cart-container__header">
        <h3 className="cart-container__return" onClick={handleReturn}>
          <i class="bi bi-arrow-left"></i> Continuar comprando
        </h3>
        <p>Tienes {getTotalItems()} items en tu carrito</p>
      </div>
      <div className="cart-container__products">
        {/* {cart} */}
        {cart.map((item) => {
          return (
            <div className="cart-container__product-container" key={item.id}>
              <div>
                <img
                  className="cart-container__product-img"
                  src={item.image}
                  alt="imagen de product"
                />
              </div>
              <h5 className="cart-container__product-title">{item.title}</h5>
              <span>{item.quantity}</span>
              <span>${Number(item.price * item.quantity).toFixed(2)}</span>
              <button
                className="button--basic"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
