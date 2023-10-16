import React from "react";
import img1 from "../../../../../public/icon-park-twotone_search.svg";
import img2 from "../../../../../public/icon-park-twotone_enquire.svg";
import img3 from "../../../../../public/icon-park-twotone_table-report.svg";
import img4 from "../../../../../public/icon-park-twotone_degree-hat.svg";
import img5 from "../../../../../public/Pexels Photo by Charlotte May.png";
import img6 from "../../../../../public/Pexels Photo by MART PRODUCTION.png";

const Banner2 = () => {
  return (
    <div className="px-6 md:px-8 mx-auto pb-28 pt-16 lg:max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-4xl pb-4 md:text-4xl lg:text-5xl font-[600] font-Poppins">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
              All-in-One
            </span>{" "}
            platform that Makes Easier
          </h2>
          <p>
            We are more than a platform; We are your <br /> success partner.
            Discover our services to achieve <br /> your business and
            educational goals
          </p>
          <div className="grid grid-cols-2 justify-start mt-8 gap-6">
            <div className="flex gap-4 items-start mb-6">
              <img src={img1} alt="" />
              <p>
                SEARCH{" "}
                <span className="font-serif">
                  for vital <br /> company <br /> information
                </span>
              </p>
            </div>
            <div className="flex gap-4 items-start mb-6">
              <img src={img2} alt="" />
              <p>
                CONNECT{" "}
                <span className="font-serif">
                  with the resources to meet your business needs
                </span>
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <img src={img3} alt="" />
              <p>
                RESEARCH{" "}
                <span className="font-serif">
                  and <br /> generate reports <br /> that drive growth
                </span>
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <img src={img4} alt="" />
              <p>
                ACADEMY{" "}
                <span className="font-serif">
                  to give you the skills for success in your career
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="bg-[#EFD9F9] ms-6 rounded-s-xl rounded-t-xl p-2 text-sm font-serif">
                Hey, check out loreumipsum services.
              </p>
              <p className="bg-[#EFD9F9] ms-6 rounded-s-xl rounded-t-xl p-2 text-sm font-serif">
                Hey, check out loreumipsum services.
              </p>
              <p className="bg-[#EFD9F9] ms-6 rounded-s-xl rounded-t-xl p-2 text-sm font-serif">
                Hey, check out loreumipsum services.
              </p>
              <p className="bg-[#DDF3FF] me-6 rounded-e-xl rounded-t-xl p-2 text-sm font-serif">
                I got a perfect analysis report from them too
              </p>
              <div>
                <p className="bg-[#DDF3FF] me-6 rounded-e-xl rounded-t-xl p-2 text-sm font-serif">
                  Oh, thats great.
                </p>
              </div>
              <img className="chat-img rounded-full" src={img6} alt="" />
            </div>
            <img className="rounded-full" src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
