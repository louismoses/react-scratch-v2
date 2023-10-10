import Register from "./views/Register";
import Count from "./views/Count";
import Time from "./views/Time";
import UpdateOnSubmit from "./views/UpdateOnSubmit";

var isLoggedIn = true;

function App() {
  return (
    <div className="">
      <UpdateOnSubmit />
      <Time />
      <Count />
      <Register />
    </div>
  );
}

export default App;
