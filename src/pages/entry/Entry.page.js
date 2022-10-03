import React, { useState } from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import Login from "../../components/login/Login.comp";
import PasswordReset from "../../components/password-reset/PasswordReset.comp";

function Entry() {
  const [form, setForm] = useState("login");

  const formSwitcher = (formType) => {
    setForm(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="px-6 py-5 form-box">
        {form === "login" && <Login formSwitcher={formSwitcher} />}
        {form === "reset" && <PasswordReset formSwitcher={formSwitcher} />}
      </Jumbotron>
    </div>
  );
}

export default Entry;
