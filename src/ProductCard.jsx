import { useState, useEffect } from "react";

function ProductCard({ title, price, image }) {

  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const storageKey = `rating-${title}`;

  // ✅ FIX 1 + FIX 2 (seguro)
  useEffect(() => {
  const saved = localStorage.getItem(storageKey);

  if (saved) {
    const data = JSON.parse(saved);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRating(data.rating ?? 0);
    setComment(data.comment ?? "");
  }
}, [storageKey]);


  const saveReview = (value) => {
    setRating(value);

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        rating: value,
        comment: comment
      })
    );
  };

  const handleBuy = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "280px",
        background: "#0b1020",
        borderRadius: "15px",
        padding: "20px",
        border: hover ? "2px solid #ff004f" : "1px solid #00ffff",
        boxShadow: hover ? "0 0 25px #ff004f" : "0 0 15px rgba(0,255,255,0.3)",
        transition: "0.3s",
        transform: hover ? "scale(1.05)" : "scale(1)",
        color: "white"
      }}
    >

     <img
  src={image}
  alt={title}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "contain",
    borderRadius: "10px",
    marginBottom: "10px",
    background: "#05060f",
    padding: "10px"
  }}
/>


      <h3 style={{ color: "#00ffff" }}>{title}</h3>

      <p style={{ color: "#ff004f", fontSize: "18px" }}>
        ${price}
      </p>

      {/* ⭐ RATING */}
      <div style={{ margin: "10px 0" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => saveReview(star)}
            style={{
              fontSize: "22px",
              cursor: "pointer",
              color: star <= rating ? "#ffd700" : "#444"
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* 💬 COMMENT */}
      <textarea
        placeholder="Escribe tu opinión..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onBlur={() =>
          localStorage.setItem(
            storageKey,
            JSON.stringify({
              rating,
              comment
            })
          )
        }
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "8px",
          background: "#05060f",
          color: "white",
          border: "1px solid #00ffff",
          marginBottom: "10px",
          resize: "none"
        }}
      />

      {/* 🛒 BUY */}
      <button
        onClick={handleBuy}
        style={{
          width: "100%",
          padding: "12px",
          background: clicked ? "#00ffff" : "#ff004f",
          border: "none",
          borderRadius: "8px",
          color: "#000",
          fontWeight: "bold",
          boxShadow: clicked
            ? "0 0 30px #00ffff"
            : "0 0 15px #ff004f",
          transform: clicked ? "scale(1.1)" : "scale(1)",
          transition: "0.2s",
          cursor: "pointer"
        }}
      >
        {clicked ? "✔ AGREGADO" : "COMPRAR"}
      </button>

    </div>
  );
}

export default ProductCard;
