import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        News App made by :{" "}
        <a href="https://www.linkedin.com/in/nihalrajora/" target="__blank">
          Vikas Kumar Meena
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://github.com/vksihra" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/vksihra/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/vk_sihra/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
