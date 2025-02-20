const Button = ({ text, onClick, primary }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: primary ? "#007bff" : "#ccc",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        marginTop: "10px"
      }}
    >
      {text}
    </button>
  );
  
  export default Button;
  