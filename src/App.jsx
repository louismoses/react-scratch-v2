import Register from "./views/Register";
import Count from "./views/Count";
import Time from "./views/Time";

var isLoggedIn = true;

function App() {
  return (
    <div className="">
      <Register />
      <Count />
      <Time />
    </div>
  );
}

export default App;
