import { useProducts } from "../context/ProductsContext";
import PropTypes from "prop-types";

export default function ProductTable(props) {
  const { onEdit, onDelete } = props;
  const { products } = useProducts();

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr className="product-table__header">
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className="product-table__row" key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td className="product-table__btn-section">
                  <button
                    className="product-table__btn button--basic button--blue"
                    onClick={() => onEdit(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="product-table__btn button--basic button--red"
                    onClick={() => onDelete(String(product.id))}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

ProductTable.PropTypes = {
  onEdit: PropTypes.func.isRequired,
};
