import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/home.css";

const fallbackProducts = [
  {
    id: 1,
    name: "Корпус автоключа VW 3кн",
    price: 240,
    image: "https://key-shop.net/image/cache/catalog/Volkswagen7_1-800x800.jpg",
    brand: "Volkswagen"
  },
  {
    id: 2,
    name: "Автоключ Kia Sportage",
    price: 320,
    image: "https://key-shop.net/image/cache/data/key/mKXlcw0sAJA-800x800.jpg",
    brand: "KIA"
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then(res => setProducts(res.data))
      .catch(() => {
        console.log("Бекенд недоступний — використовую fallback дані");
        setProducts(fallbackProducts);
      });
  }, []);

  return (
    <div className="home">
      <h1>KEY-SHOP 2025</h1>

      <h2>Товари</h2>

      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.brand}</p>
            <span>{p.price} грн</span>
          </div>
        ))}
      </div>
    </div>
  );
}
