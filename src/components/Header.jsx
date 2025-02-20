const Header = ({ title, onBack }) => (
    <header style={{ display: "flex", alignItems: "center", padding: "10px" }}>
      {onBack && (
        <button
          onClick={onBack}
          style={{
            marginRight: "10px",
            fontSize: "18px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer"
          }}
        >
          ←
        </button>
      )}
      <h2 style={{ margin: 0, fontSize: "18px" }}>{title}</h2>
    </header>
  );
  
  export default Header;
  