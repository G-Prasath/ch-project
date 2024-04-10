import React from "react";
import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import IntroSlider from "../../container/IntroSlider/IntroSlider.js";
import HomeAbout from "../../components/About/HomeAbout.jsx";
import ServiceIconBox from "../../container/service/ServiceIconBox.js";
import Portfolio from "../../container/Portfolio/Portfolio.js";
import HomeBlog from "../../container/BlogGrid/HomeBlog.js";
import ContactInformation from "../../container/ContactInformation/ContactInformation.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import Faq from "../../container/Faq/Faq.js";
import BrandContainer from "../../container/Brand/BrandContainer.js";

const Home = () => {
  return (
    <React.Fragment>
      <SEO title="Chennai Roofings" />
      <Header />
      <IntroSlider />
      <HomeAbout />
      <ServiceIconBox classOption="bg-color-1" />
      <BrandContainer classOption="section-padding-bottom" />
      <Portfolio />
      <Faq />
      <HomeBlog />
      <ContactInformation />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Home;
