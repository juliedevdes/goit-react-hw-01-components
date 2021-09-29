import Profile from "./components/Profile/Profile";
import user from "./user.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";

import FriendsList from "./components/FriendsList/FriendList";
import friends from "./friends";

import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHIstory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={true} stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
