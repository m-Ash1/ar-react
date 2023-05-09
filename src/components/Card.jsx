import image from "../assets/pfp.jpg";
const Card = ({ info, deleteHandler }) => {
  const cards = info.map(({ name, level, type }, idx) => (
    <div key={idx} className="cardWrapper">
      <div className="profileImage">
        <img src={image} />
      </div>
      <div className="name">Name: {name}</div>
      <div className="level">Level: {level}</div>
      <div className="class">Class: {type}</div>
      <div className="btn" onClick={(e) => deleteHandler(idx)}>
        X
      </div>
    </div>
  ));
  return <>{cards}</>;
};
export default Card;
