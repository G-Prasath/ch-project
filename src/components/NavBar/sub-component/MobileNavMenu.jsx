import React from "react";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileNavMenu = () => {
  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains("menu-toggle") ||
      target.classList.contains("menu-toggle")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };
  return (
    <nav className="site-mobile-menu">
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">About</span>
          </NavLink>
        </li>
        <li className="has-children">
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">Service</span>
          </NavLink>
          <span className="menu-toggle" onClick={onClickHandler}>
            <i className="icon fa fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work"}>
                <span className="menu-text">Pre Engineered Building</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Warehouse</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Metal building</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">EOT shed</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Cold Storage</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Mezzanine Floor</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Industrial Shed</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Factory Shed</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">Our Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/contact"}>
            <span className="menu-text">Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
