import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReservationTicket from "./components/ReservationTicket";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import ProductDetail from "./pages/ProductDetail";
import Reservation from "./pages/Reservation";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ReservationTicket />
    </>
  );
}

export default App;
