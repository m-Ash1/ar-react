const Sidebar = () => {
  const firstName = "Ash";
  const names = ["ash", "dodo", "memo", "hamdy"];
  return (
    <div className="sidebar">
      <div className="title">Names:</div>
      <div className="links">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <li>{firstName === "Ash" ? firstName : "No - one"}</li>
          <li style={{ color: "red", backgroundColor: "black" }}>Dodo</li>
          <li>Memo</li>
          <li>hamdy</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
