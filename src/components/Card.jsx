import image from "../assets/pfp.jpg";
const Card = ({ info, gender }) => {
  const cards = info.map(({ name, level, type }, idx) => (
    <div
      key={idx}
      className="cardWrapper"
      style={
        gender === "boy"
          ? { backgroundColor: "rgb(178 178 255)" }
          : { backgroundColor: "pink" }
      }
    >
      <div className="profileImage">
        <img src={image} />
      </div>
      <div className="name">Name: {name}</div>
      <div className="level">Level: {level}</div>
      <div className="class">Class: {type}</div>
    </div>
  ));
  return <div>{cards}</div>;
};
export default Card;
