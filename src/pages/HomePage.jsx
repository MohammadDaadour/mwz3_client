import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
//import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div dir='rtl'>
        <Header activeHeading={1} />
        <Hero />
<center className="p-4 text-lg">
اعرض منتجاتك الاستعمال و كسر الزيرو و سيب الباقي علينا
</center>
        <FeaturedProduct />
        <Footer />
    </div>
  )
}

export default HomePage