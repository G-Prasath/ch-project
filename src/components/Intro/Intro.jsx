import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Intro =  ({data}) => {
    return (
        
        <div className="intro-section overlay section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})`, width: '100%', aspectRatio: '16 / 9'}}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h1 className="title">{data.title}</h1>
                            <div className="desc">
                                <p>{data.desc}</p>
                            </div>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-primary">Get Services</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

Intro.propTypes = {
    data: PropTypes.object
};
  

export default Intro
