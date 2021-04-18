import React from "react";
import Header from "../Home-page/Header/Header";
import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found">
        <h3>404</h3>
        <h1>Page not found!</h1>
      </section>
    </>
  );
};

export default NotFound;
