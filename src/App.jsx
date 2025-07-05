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
import { AuthProvider, CartProvider } from "./context/index";

export default function App() {
  return (
    <AuthProvider>
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
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
