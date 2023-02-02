import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="">
           <FaFacebook className="social--link"/>
          </a>
        </li>
        <li>
          <a href="">
          <FaInstagram className="social--link"/>
          </a>
        </li>
        <li>
          <a href="">
          <FaTwitter className="social--link"/>
          </a>
        </li>
        <li>
          <a href="">
          <FaLinkedin  className="social--link"/>
          </a>
        </li>
      </ul>
      <small> ©2023 Travel Journal. All Rights Reserved</small>
    </footer>
  );
}
