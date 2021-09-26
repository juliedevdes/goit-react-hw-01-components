import PropTypes from "prop-types";

export default function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.default.map((el) => (
        <li key={el.id} class="item">
          <span class="status">{el.isOnline}</span>
          <img class="avatar" src={el.avatar} alt="" width="48" />
          <p class="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.object,
};
