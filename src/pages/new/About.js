import React from 'react';
import SEO from '../../components/SEO.jsx';
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from '../../container/Breadcrumb/Breadcrumb.js';
import AboutFour from '../../container/About/AboutFour.js';
import Video from '../../container/Video/Video.js';
import AboutFive from '../../container/About/AboutFive.js';
import TestimonialContainer from '../../container/Testimonial/TestimonialContainer.js';
import CallToActionTwo from '../../container/CallToAction/CallToActionTwo.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../../components/ScrollToTop.jsx';


const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || About" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg.jpg"
                title="We are an agency located in New York"
                content="Home"
                contentTwo="About Us"
            />
            <AboutFour />
            <Video />
            <AboutFive />
            <TestimonialContainer classOption="bg-primary-blue" />
            <CallToActionTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



