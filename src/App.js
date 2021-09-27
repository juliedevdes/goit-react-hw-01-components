import Profile from "./components/Profile";
import user from "./user.json";

import Statistics from "./components/Statistics";
import statisticalData from "./statistical-data.json";

import FriendsList from "./components/FriendList";
import friends from "./friends";

import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory";

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
