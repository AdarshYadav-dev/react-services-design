import React from "react";
import box1 from "./assets/boxes_icon1.png";
import box2 from "./assets/boxes_icon2.png";
import box3 from "./assets/boxes_icon3.png";
import box4 from "./assets/boxes_icon4.png";
import box5 from "./assets/boxes_icon5.png";
import box6 from "./assets/boxes_icon6.png";
import box7 from "./assets/boxes_icon7.png";
import box8 from "./assets/boxes_icon8.png";
import box9 from "./assets/boxes_icon9.png";
import arrow from "./assets/right-arrow.png";
import solution1 from "./assets/soluction-logo1.png";
import solution2 from "./assets/soluction-logo2.png";
import solution3 from "./assets/soluction-logo-3.png";
import workingImg from "./assets/working-img.png";
import testimonialLogo1 from "./assets/box1-logo.png";
import testimonialLogo2 from "./assets/box-logo-1-content.png";
import manImg from "./assets/Oval.png";

export default function App() {
  const services = [
    { img: box1, title: "Web Designing", desc: "A flunking website can leave your company in ashes. Our objective is not just to make" },
    { img: box2, title: "Web & App Development", desc: "Work in fostering the greatest responsive sites and versatile applications" },
    { img: box3, title: "Ecommerce", desc: "You understand your clients better than anybody. We know that, and we can assist" },
    { img: box4, title: "Frameworks", desc: "Save time and exertion with our all-around custom fitted solutions that assist you" },
    { img: box5, title: "ERP Integration", desc: "Precision and timeliness are critical for any business prosperity and so for organization" },
    { img: box6, title: "Digital Marketing", desc: "We develop brands with digital and imaginative perspicuity. Our kin's first way" },
    { img: box7, title: "QA & Testing", desc: "We assist you with conveying quality programming and give your end clients" },
    { img: box8, title: "Maintenance & Support", desc: "Upgrade your business usefulness by injecting adaptability, versatility" },
    { img: box9, title: "Dedicated Team", desc: "Streamline and scale your business conveyance by recruiting dedicated" },
  ];

  return (
    <div className="main-container flex flex-col justify-center items-center pt-12 bg-gray-200 max-w-[1500px] w-[90%] mx-auto text-center">
      {/* Services Section */}
      <div className="container-top text-center max-w-2xl">
        <p className="font-medium text-[24px] text-[#2575fc] mb-[12px]">Services</p>
        <p className="font-semibold text-4xl leading-[40px]">We Offer On-Demand IT Services</p>
      </div>

      {/* Service Cards */}
      <div className="bottom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10">
        {services.map((s, i) => (
          <div key={i} className="cards p-5 flex flex-col justify-start items-start text-start gap-3 bg-white rounded-[13px]">
            <img src={s.img} alt={s.title} />
            <p className="font-bold text-lg">{s.title}</p>
            <p className="max-w-[314px]">{s.desc}</p>
            <div className="boxes-bottom flex gap-3 items-center">
              <p className="text-lg leading-8">Read More</p>
              <img src={arrow} alt="arrow-icon" className="h-[27px] w-[19px]" />
            </div>
          </div>
        ))}
      </div>

      {/* Our Solutions Section */}
      <div className="flex flex-col justify-end items-center text-center pt-10">
        <p className="font-medium text-[#2575FC] text-4xl leading-[8px]">Our Solutions</p>
        <p className="font-semibold text-5xl leading-[66px] tracking-[-0.02rem]">Why Choose Us</p>
      </div>

      <div className="our-section-bottom-section py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-20">
        {[solution1, solution2, solution3].map((img, i) => (
          <div key={i} className="section-boxes bg-white border-r-2 border-r-[#ccc] pt-10 px-5 pb-10 flex flex-col gap-4 rounded-[8px] text-start">
            <img src={img} alt={`solution-${i + 1}`} />
            <p className="font-semibold text-2xl text-[#0F172A]">Great Experience</p>
            <p className="text-lg text-[#657790]">
              We have 10+ years of experience with creating eCommerce websites. Our group is knowledgeable in Shopify,
              Magento, Laravel, WooCommerce, and WordPress.
            </p>
          </div>
        ))}
      </div>

      {/* Our Work Section */}
      <div className="our-work pb-10 text-center">
        <p className="font-medium text-[#2575FC] text-3xl">Our Works</p>
        <p className="font-semibold text-4xl text-[#0F172A] leading-[66px]">This is How We Work</p>
        <div className="our-work-bottom-container flex justify-center">
          <img src={workingImg} alt="working-img-logo" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="Testimonials pb-20">
        <div className="testimonials-top-container flex flex-col gap-5 text-center">
          <p className="font-semibold text-[#2575FC] text-4xl">Testimonials</p>
          <p className="font-semibold text-4xl text-[#0F172A]">Why teams love Magebyte</p>
        </div>

        <div className="testimonials-bottom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {[ "Jeff Beck", "Sarah Hunt", "Virginia Morton" ].map((name, i) => (
            <div key={i} className="testimonials-boxes pt-10 px-12 pb-10 flex flex-col gap-5 bg-white rounded-[8px] text-start">
              <div className="testimonials-top flex gap-1">
                <img src={testimonialLogo1} alt="logo1" />
                <img src={testimonialLogo2} alt="logo2" />
              </div>
              <p className="text-[22px] leading-[32px] text-[#000000] max-w-[234px]">
                “Macrivate The most under-rated tools! Easy to setup, interactive analytics, great visualizations, and generous free tier.”
              </p>
              <div className="bottom-main flex gap-2 items-center">
                <img src={manImg} alt="man_image" />
                <div>
                  <p className="font-semibold text-[14px] text-[#000000]">{name}</p>
                  <p className="text-[14px] text-[#787878]">{i === 0 ? "CEO, Shopnow" : i === 1 ? "Head of Marketing, Dropdown" : "CRO, Evernose"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
