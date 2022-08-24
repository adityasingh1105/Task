import React from "react";
import Grocery from "./images/Grocery.jpg";
import Mobile from "./images/Mobile.jpg";
import Kitchen from "./images/Kitchen.jpg";
import Electronics1 from "./images/Electronics1.jpg";
import Appliance from "./images/Appliance.jpg";
import Kids from "./images/Kids.jpg";
import Fashion from "./images/Fashion.jpg";
import Medicine from "./images/Medicine (1).jpg";
import Beauty from "./images/Beauty.jpg";

export default function Category() {
  return (
    <>
      <div className="options">
        <ul>
          <div>
            <img src={Grocery} className="shape"/>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Grocery
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
          <div>
            <img src={Kitchen} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Kitchen
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>

          <div>
            <img src={Electronics1} className="shape" />

            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Electronics
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
          <div>
            <img src={Appliance} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Appliances
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
          <div>
            <img src={Mobile} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Mobiles
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>

          <div>
            <img src={Kids} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Kids
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
          <div>
            <img src={Fashion} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Fashion
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
          <div>
            <img src={Medicine} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Medicines
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
          <div>
            <img src={Beauty} className="shape" />
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Beauty &amp; more..
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
