const QuestionnaireOption = ({ image, text, onClick }) => (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        cursor: "pointer"
      }}
    >
      <img src={image} alt={text} style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
      <span>{text}</span>
    </div>
  );
  
  export default QuestionnaireOption;
  