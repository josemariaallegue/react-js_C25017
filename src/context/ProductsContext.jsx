import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts(category) {
    setIsLoading(true);
    try {
      let url = "https://686975cd2af1d945cea1f02a.mockapi.io/products";

      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al buscar los productos");

      let data = await res.json();

      if (category) {
        data = data.filter((product) => product.category === category);
      }
      return data;
    } catch (error) {
      console.error("Error al buscar los productos", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchProduct(id) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://686975cd2af1d945cea1f02a.mockapi.io/products/${id}`
      );
      if (!res.ok) throw new Error(`Error al buscar el proudcto con id ${id}`);

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Error al buscar el proudcto con id ${id}`, error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }

  async function addProduct(productData) {
    try {
      const res = await fetch(
        "https://686975cd2af1d945cea1f02a.mockapi.io/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        }
      );

      if (!res.ok) throw new Error(`Error al agregar el nuevo producto.`);

      const newProduct = await res.json();
      setProducts((prev) => [...prev, newProduct]);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      await fetch(
        `https://686975cd2af1d945cea1f02a.mockapi.io/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error(`Error al eliminar el producto.`);

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  }

  async function updateProduct(id, updatedData) {
    try {
      const res = await fetch(
        `https://686975cd2af1d945cea1f02a.mockapi.io/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );

      if (!res.ok) throw new Error(`Error al actualizar el producto.`);

      const updatedProduct = await res.json();
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? updatedProduct : p))
      );
    } catch (error) {
      console.error("Error al actualizar producto:", error);
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        fetchProducts,
        fetchProduct,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
