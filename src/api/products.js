export const fetchProducts = async (category) => {
  try {
    let url = "https://686975cd2af1d945cea1f02a.mockapi.io/products";

    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al buscar los productos");

    let data = await res.json();

    if (category) {
      data = data.filter((proudct) => proudct.category === category);
    }
    return data;
  } catch (error) {
    console.error("Error al buscar los productos", error);
    return [];
  }
};

export const fetchProduct = async (id) => {
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
  }
};
