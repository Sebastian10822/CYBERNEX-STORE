import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      {/* HERO */}
      <section style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at top, #0a1a3a, #05060f)"
      }}>

        <h1 style={{
          fontSize: "60px",
          color: "#00ffff",
          textShadow: "0 0 20px #00ffff"
        }}>
          CYBERNEX STORE
        </h1>

        <p style={{
          marginTop: "15px",
          fontSize: "20px",
          color: "#ff004f"
        }}>
          Donde nace el poder gamer
        </p>

      </section>

      {/* PRODUCTS */}
      <section style={{
        padding: "60px",
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        flexWrap: "wrap",
        background: "#05060f"
      }}>

        <ProductCard title="PC Gamer RTX" price="4.500.000" image="src/assets/Pc.jpg" onAdd={addToCart} />

        <ProductCard title="PlayStation 5" price="2.800.000" image="src/assets/Play5.jpg" onAdd={addToCart} />

        <ProductCard title='Monitor Gamer 27"' price="1.200.000" image="src/assets/Monitor.jpg" onAdd={addToCart} />

        <ProductCard title="Mouse Gamer Pro" price="180.000" image="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa" onAdd={addToCart} />

        <ProductCard title="Headset RGB" price="420.000" image="https://images.unsplash.com/photo-1599669454699-248893623440" onAdd={addToCart} />

      </section>
      {/* CONTACT SECTION PRO */}
<section
  style={{
    width: "100%",
    padding: "80px 60px",
    background: "linear-gradient(180deg, #05060f, #070a18)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px"
  }}
>

  {/* INFO EMPRESA */}
  <div style={{ maxWidth: "450px" }}>
    <h2
      style={{
        fontSize: "42px",
        color: "#00ffff",
        marginBottom: "25px",
        textShadow: "0 0 20px #00ffff"
      }}
    >
      Contáctanos
    </h2>

    <p style={{ color: "#ff004f", marginBottom: "15px", fontSize: "18px" }}>
      📍 calle 9 14-50
    </p>

    <p style={{ color: "#ff004f", marginBottom: "15px", fontSize: "18px" }}>
      📞 +57 3112495143
    </p>

    <p style={{ color: "#ff004f", fontSize: "18px" }}>
      📧 soporte@cybernexstore.com
    </p>

    <p
      style={{
        marginTop: "25px",
        color: "#aaa",
        lineHeight: "1.6"
      }}
    >
      Nuestro equipo está listo para ayudarte con soporte técnico,
      cotizaciones, garantías y asesoría gamer personalizada.
    </p>
  </div>

  {/* FORMULARIO */}
  <div
    style={{
      width: "420px",
      background: "#05060f",
      padding: "30px",
      borderRadius: "15px",
      border: "1px solid #00ffff",
      boxShadow: "0 0 25px rgba(0,255,255,0.2)"
    }}
  >
    <h3
      style={{
        color: "#00ffff",
        marginBottom: "15px",
        textAlign: "center"
      }}
    >
      Envíanos tu mensaje
    </h3>

    <textarea
      placeholder="Escribe tu sugerencia o mensaje..."
      style={{
        width: "100%",
        height: "120px",
        background: "#070a18",
        border: "1px solid #00ffff",
        borderRadius: "10px",
        padding: "12px",
        color: "white",
        resize: "none",
        marginBottom: "15px"
      }}
    />

    <button
      style={{
        width: "100%",
        padding: "14px",
        background: "#ff004f",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
        boxShadow: "0 0 20px #ff004f",
        cursor: "pointer"
      }}
    >
      Enviar Mensaje 🚀
    </button>
  </div>

</section>


    </>
  );
}

export default App;