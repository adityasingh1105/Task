import React from 'react'
import shoes from "./images/shoes.jpg";
import girl from "./images/girl.jpg";
import iphone from "./images/iphone.png";
import Clothes from "./images/Clothes.jpg";
import ecommerce from "./images/ecommerce.png";
import man from "./images/man.jpg";
import TeddyImage from "./images/Teddy Image.jpg";

export default function Banner() {
  return (
    <>
                <div class="banner">
               <div class="banner-content">
                  <div class="banner-left">
                     <div class="slider">
                        <div class="wrapper">
                          
                           <div class="box">
                              
                              <div class="scroll">
                                 <ul>
                                    <li><img src={shoes}/></li>
                                    <li><img src={girl}/></li>
                                    <li><img src={iphone}/></li>
                                    <li><img src={Clothes}/></li>
                                    <li><img src={TeddyImage}/></li>
                                  </ul>
                              </div>
                           </div>
                       
                        
                        </div>
                       
                     </div>
                  </div>
                  <div class="banner-mid">
                     <div class="banner-txt">India's largest E-commerce platform</div>
                     <div class="larg-ecom-img">
                        <img src={ecommerce} alt="India's largest e-commerce platform" />
                     </div>
                  </div>
                  <div class="banner-right">
                     <img src={man} alt="standing man" />
                  </div>
               </div>
            </div>
    </>
  )
}
