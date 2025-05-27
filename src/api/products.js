export const fetchProducts = async (category) => {
  try {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    console.info(category, url);

    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al buscar los productos");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al buscar los productos", error);
    return [];
  }
};
