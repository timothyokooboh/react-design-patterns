import Users from "./practice_react-scoped-slots/Users";
import User from "./practice_react-scoped-slots/User";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Users>
        <User></User>
        <div>anything goes here</div>
      </Users>
    </div>
  );
}
