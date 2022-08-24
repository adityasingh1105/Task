import React from "react";
import arrow from "./images/arrow.png";
import iphone from "./images/iphone.png";
import girl from "./images/girl.jpg";
import shoes from "./images/shoes.jpg";
import bedsheet from "./images/bedsheet.png";
import laptop from "./images/laptop.png";
import mixer from "./images/mixer.png";
import led from "./images/led.png";
import medicine from "./images/medicine.png";
import fruits from "./images/fruits.png";
import TeddyImage from "./images/Teddy Image.jpg";
export default function SectionGallery() {
  return (
    <div>
      <section class="product">
        <h2 class="product-category">best selling</h2>
        <button class="pre-btn">
          <img src={arrow} alt="" />
        </button>
        <button class="nxt-btn">
          <img src={arrow} alt="" />
        </button>
        <div class="product-container">
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={iphone} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={girl} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={shoes} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={bedsheet} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={laptop} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={mixer}class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={led} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={medicine} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={fruits} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={TeddyImage} class="product-thumb" alt="" />
              <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">brand</h2>
              <p class="product-short-description">
                a short line about the cloth..
              </p>
              <span class="price">$20</span>
              <span class="actual-price">$40</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
