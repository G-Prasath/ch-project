import React from "react";
import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import ServiceIconBoxTwo from "../../container/service/ServiceIconBoxTwo.js";
// import ServiceSkill from "../../container/service/ServiceSkill.js";
import AboutSix from "../../container/About/AboutSix.js";
import FunfactTwo from "../../container/Funfact/FunfactTwo.js";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
// 
const Service = () => {
  return (
    <React.Fragment>
      <SEO title="Exomac || Service" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-three.jpg"
        title="We work with bold brands that we believe in"
        content="Home"
        contentTwo="Services"
      />
      <ServiceIconBoxTwo />
      <AboutSix />
      <FunfactTwo />
      <ContactInformationThree />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Service;
