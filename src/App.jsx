import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, ProtectedRoute } from "./components/index";
import {
  Home,
  NotFound,
  Electronics,
  ProductDetail,
  Login,
  Admin,
  Cart,
} from "./pages/index";
import { AuthProvider, CartProvider, ProductsProvider } from "./context/index";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ToastContainer
              position="top-right" // esquina superior derecha
              autoClose={3000} // 3 s y desaparece
              closeOnClick
              pauseOnHover
              theme="colored" // o "light" / "dark"
            />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
