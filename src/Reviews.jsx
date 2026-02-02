import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Reviews from "./Reviews";

function App() {

  const [neon, setNeon] = useState(true);

  return (
    <div style={{
      background: neon ? "#05060f" : "#ffffff",
      minHeight: "100vh",
      transition: "0.5s"
    }}>

      <Navbar />

      {/* BOTON MODO NEON */}
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <button
          onClick={() => setNeon(!neon)}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#00ffff",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Cambiar Modo ⚡
        </button>
      </div>

      {/* HERO */}
      <section
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle at top, #0a1a3a, #05060f)",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#00ffff",
            textShadow: "0 0 20px #00ffff",
          }}
        >
          CYBERNEX STORE
        </h1>

        <p
          style={{
            marginTop: "15px",
            fontSize: "20px",
            color: "#ff004f",
          }}
        >
          Donde nace el poder gamer
        </p>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          padding: "60px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          title="PC Gamer RTX"
          price="4.500.000"
          image="public/Images/Pc.jpg"
        />

        <ProductCard
          title="PlayStation 5"
          price="2.800.000"
          image="public/Images/Play5.jpg"
        />

        <ProductCard
          title="Teclado Mecánico RGB"
          price="350.000"
          image="https://images.unsplash.com/photo-1612815154858-60aa3d5e8c24"
        />

        <ProductCard
          title='Monitor Gamer 27"'
          price="1.200.000"
          image="public/Images/Monitor.jpg"
        />

        <ProductCard
          title="Mouse Gamer Pro"
          price="180.000"
          image="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa"
        />

        <ProductCard
          title="Headset RGB"
          price="420.000"
          image="https://images.unsplash.com/photo-1599669454699-248893623440"
        />
      </section>

      {/* REVIEWS */}
      <Reviews />

    </div>
  );
}

export default App;
