const ProgressBar = ({ progress }) => (
    <div style={{ width: "100%", backgroundColor: "#eee", borderRadius: "5px", height: "10px" }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#007bff",
          height: "100%",
          borderRadius: "5px"
        }}
      ></div>
    </div>
  );
  
  export default ProgressBar;
  