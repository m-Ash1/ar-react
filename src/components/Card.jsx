import image from "../assets/pfp.jpg";
import styles from "../css/Card.module.css";
const Card = ({ info, deleteHandler }) => {
  const cards = info.map(({ name, level, type }, idx) => (
    <div key={idx} className={styles.cardWrapper}>
      <div className={styles.profileImage}>
        <img src={image} />
      </div>
      <div className="name">Name: {name}</div>
      <div className="level">Level: {level}</div>
      <div className="class">Class: {type}</div>
      <div className={styles.btn} onClick={(e) => deleteHandler(idx)}>
        X
      </div>
    </div>
  ));
  return <>{cards}</>;
};
export default Card;
