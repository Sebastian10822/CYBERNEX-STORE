function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        padding: "20px 40px",
        background: "#05060f",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #00ffff"
      }}
    >

      <h2 style={{
        color: "#00ffff",
        textShadow: "0 0 15px #00ffff"
      }}>
        CYBERNEX
      </h2>

      <div style={{
        color: "#ff004f",
        fontSize: "18px",
        position: "relative"
      }}>
        🛒 Carrito

        <span style={{
          marginLeft: "10px",
          background: "#00ffff",
          color: "#000",
          padding: "4px 10px",
          borderRadius: "20px",
          fontWeight: "bold",
          boxShadow: "0 0 10px #00ffff"
        }}>
          {cartCount}
        </span>

      </div>

    </nav>
  );
}

export default Navbar;