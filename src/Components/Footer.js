import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="">
            <img src="../Images/facebook.png" className="social--link" />{" "}
          </a>
        </li>
        <li>
          <a href="">
            <img src="../Images/linkedin.png" className="social--link" />{" "}
          </a>
        </li>
        <li>
          <a href="">
            <img src="../Images/twitter.png" className="social--link" />{" "}
          </a>
        </li>
        <li>
          <a href="">
            <img src="../Images/instagram.png" className="social--link" />{" "}
          </a>
        </li>
      </ul>
      <small> ©2023 Travel Journal. All Rights Reserved</small>
    </footer>
  );
}
