import PropTypes from "prop-types";
import "./FriendsList.scss";

export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((el) => (
        <li key={el.id} className="item">
          <span className={el.isOnline ? "status online" : "status offline"}>
            {el.isOnline ? "Online" : "Offline"}
          </span>
          <img className="avatar" src={el.avatar} alt="" width="48" />
          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
