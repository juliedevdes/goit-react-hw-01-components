import PropTypes from "prop-types";

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div>
      <span className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
