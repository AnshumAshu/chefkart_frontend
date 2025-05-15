import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home"; // ✅ correct casing
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Head from "./Components/Header/Head";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChefConnection from "./Components/ChefConnection/ChefConnection";
import Party from "./Components/ChefForParty/Party";
import Month from "./Components/CookForAmonth/month";
import OneTime from "./Components/OneTimeCook/OneTime";
import Test from "./Components/Testimonial/Test";
import Invester from "./Components/InvestorRelation/Invester";
import Career from "./Components/Career/career";
import Blog from "./Components/Blog/Blog";
import ChefRegistration from "./Components/ChefRegistration/ChefRegistration";




const App = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chef-for-party" element={<Party />} />
        <Route path="cook-for-month" element={<Month />} />
        <Route path="one-time-cook" element={<OneTime />} />
        <Route path="/join-chefkart" element={<ChefConnection />} />
        <Route path="/testimonial" element={<Test />} />
        <Route path="/investor-relation" element={<Invester />} />
        <Route path="/career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/register-chef" element={<ChefRegistration />} />
        {/* <Route path="/chef-search" element={<ChefSearch />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
