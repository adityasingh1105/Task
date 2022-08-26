import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import TopNav from "./Component/TopNav";
import Category from "./Component/Category";
import Payment from "./Component/Payment";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import BusinessGallery from "./Component/BusinessGallery";
import Details from "./Component/Details";
import SectionGallery from "./Component/SectionGallery";
import OurProduct from "./Component/OurProduct";
import CompanyInfo from "./Component/CompanyInfo";
import Shipping from "./Component/Shipping";
import Cancel from "./Component/Cancel";
import SectioDemo from "./Component/SectioDemo";
function App() {
  return (
    < >
      <div>  
        <TopNav />
        <Category />
        <Banner />
        <SectioDemo/>

        <BusinessGallery />
        <OurProduct />
        <CompanyInfo />
        <Details />

        <BrowserRouter>
          <Routes>
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/shipping" element={<Shipping />} />
            <Route exact path="/cancel" element={<Cancel />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
