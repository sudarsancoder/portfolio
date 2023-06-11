import React from "react";
import { Element } from "react-scroll";
import {IconButton} from "@material-ui/core";
import {LinkedIn,Facebook,Instagram} from "@material-ui/icons"
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
<address>
        <p>
          Email:
          <span>
            {" "}
            <a href = "mailto:sudarsanmurali10@gmail.com ">sudarsanmurali10@gmail.com</a>
          </span>
        </p>
        <p>
            Github:<span>@sudarsancoder</span>
        </p>
        </address>
        <div className="contact__icons">
           <a href="https://www.linkedin.com/in/sudarsan-m-3216571b1" target="_blank">
           <IconButton>
               <LinkedIn/>
           </IconButton>
           </a>
           <a href="https://www.facebook.com/login/" target="_blank">
           <IconButton>
               <Facebook/>
           </IconButton>
           </a>
           <a href="" target="_blank">
           <IconButton>
               <Instagram/>
           </IconButton>
           </a>
           
        </div>
      </div>
    </Element>
  );
};

export default Contact;
