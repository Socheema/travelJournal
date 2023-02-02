import React from "react";
import { GiWorld} from "react-icons/gi";

export default function Nav() {
  return (
    <nav>
      <GiWorld className="world--icon"/>
      <a>My travel journal.</a>
    </nav>
  );
}
