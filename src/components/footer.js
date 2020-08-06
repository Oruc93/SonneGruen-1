import React from "react";
import { Link } from "gatsby";
import cx from "classnames";


const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );

  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">Sonne und Grün</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3"><Link to="/">Home</Link></li>
            <li className="mx-3"><Link to="/contact">Contact</Link></li>
            <li className="mx-3">©{(new Date().getFullYear())} Sonne und Grün</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

