import Profile from "./components/Profile";
import * as user from "./user.json";

import Statistics from "./components/Statistics";
import * as statisticalData from "./statistical-data.json";

import FriendsList from "./components/FriendList";
import * as friends from "./friends";

import * as transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory";

export default function App() {
  const allInOne =
    ((
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    ),
    (<Statistics title={true} stats={statisticalData} />),
    (<FriendsList friends={friends} />),
    (<TransactionHistory items={transactions} />));

  return allInOne;
}
