import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
import "./styles.css";

const users = [
  {
    id: 1,
    avatar_url: "https://avatars3.githubusercontent.com/u/12158859?v=4",
    name: "Albert",
    rounded: false
  },
  {
    id: 2,
    avatar_url: "https://avatars.githubusercontent.com/u/101393393?v=4",
    name: "Kisan",
    rounded: true
  }
];

const usersAvatar = users.map((user) => (
  // retriving data from map functions
  <Avatar
    key={user.id}
    src={user.avatar_url}
    name={user.name}
    rounded={user.rounded}
  />
));
export default function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      {/* avatar */}
      {usersAvatar}
      <Button text="CLICK ME" onClick={() => alert("1")}></Button>
      <br />
      <Button text="CLICK ME2" onClick={() => alert("2")}></Button>
      {/* REACT ALWAYS PASS VALUE AS A KEY VALUE PAIR */}
    </div>
  );
}
