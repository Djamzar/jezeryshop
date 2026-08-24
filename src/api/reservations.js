// URL de l'API backend. En développement, on cible localhost:4000.
// En production, VITE_API_URL doit être définie dans les variables
// d'environnement du projet Vercel (Settings → Environment Variables).
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function createReservation({ quantity, client }) {
  const res = await fetch(`${API_URL}/api/reservations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity, client }),
  });

  const data = await res.json();

  if (!res.ok) {
    const message =
      data?.errors?.[0]?.msg || data?.error || "Une erreur est survenue.";
    throw new Error(message);
  }

  return data; // { orderNumber, total, quantity }
}
