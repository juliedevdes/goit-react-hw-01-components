import PropTypes from "prop-types";
import "./FriendsList.scss";
import FriendListItem from "./FriendListItem.js";

export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id} className="item">
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
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
