import { createContext, useContext, useEffect, useState } from "react";
import { product } from "../data/product";

const ReservationContext = createContext(null);
const STORAGE_KEY = "jezeryshop_reservation_qty";

export function ReservationProvider({ children }) {
  const [quantity, setQuantity] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? parseInt(saved, 10) : 0;
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    } catch {
      return 0;
    }
  });
  const [isTicketOpen, setTicketOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(quantity));
  }, [quantity]);

  function addQuantity(amount = 1) {
    setQuantity((q) => Math.max(0, q + amount));
    setTicketOpen(true);
  }

  function setExactQuantity(value) {
    setQuantity(Math.max(0, value));
  }

  function clearReservation() {
    setQuantity(0);
  }

  const totalPrice = quantity * product.price;

  const value = {
    quantity,
    addQuantity,
    setExactQuantity,
    clearReservation,
    totalPrice,
    isTicketOpen,
    setTicketOpen,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const ctx = useContext(ReservationContext);
  if (!ctx) {
    throw new Error("useReservation doit être utilisé dans ReservationProvider");
  }
  return ctx;
}
