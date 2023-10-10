import Register from "./views/Register";
import Count from "./views/Count";
import Time from "./views/Time";
import UpdateOnSubmit from "./views/UpdateOnSubmit";
import Form2 from "./views/Form2";
import ContactForm from "./views/ContactForm";

var isLoggedIn = true;

function App() {
  return (
    <div className="">
      <ContactForm />
      <Form2 />
      <UpdateOnSubmit />
      <Time />
      <Count />
      <Register />
    </div>
  );
}

export default App;
