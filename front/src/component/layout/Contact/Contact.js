import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";


const Contact = () => {
  return (
    <div className="contactContainer">
      <Link className="mailBtn" to="mailto:gauravkarki038@gmail.com">
        <Button>Contact: gauravkarki038@gmail.com</Button>
      </Link>
      <Link className="mailBtn" to="https://www.linkedin.com/in/gaurav-singh-b2277a1a5/">
        <Button>Linkdin Account</Button>
      </Link>
    </div>
  );
};

export default Contact;