import React from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import travelData from "./Components/travelData";
import Footer from "./Components/Footer";

const item = travelData.map((item) => {
  return <Main key={item.id} {...item} />;
});

export default function App() {
  return (
    <>
      <Nav />
      {item}
      <Footer />
    </>
  );
}
