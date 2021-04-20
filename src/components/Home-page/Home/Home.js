import React from "react";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
