import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          type="text"
          name="fName"
          id="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lName"
          id="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={contact.email}
          placeholder="sample@email.com"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
