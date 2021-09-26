import Profile from "./components/Profile";
import * as user from "./user.json";

import Statistics from "./components/Statistics";
import * as statisticalData from "./statistical-data.json";

import FriendsList from "./components/FriendList";
import * as friends from "./friends";

export default function App() {
  return (
    <Statistics title={true} stats={statisticalData} /> +
    (
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    ),
    (<FriendsList friends={friends} />)
  );
}
