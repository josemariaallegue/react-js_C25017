export const fetchProducts = async (category) => {
  try {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al buscar los productos");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al buscar los productos", error);
    return [];
  }
};

export const fetchProduct = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error(`Error al buscar el proudcto con id ${id}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error al buscar el proudcto con id ${id}`, error);
    return [];
  }
};
