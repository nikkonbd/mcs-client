import React from "react";
import img1 from "../../../../assets/Picture.png";
import img2 from "../../../../assets/Picture (1).png";
import img3 from "../../../../assets/Picture (2).png";
import SearchName from "../../../../components/searchName/SearchName";

const Banner = () => {
  return (
    <div className="bg-gradient px-6 md:px-0" style={{}}>
      <div className="md:px-8 mx-auto py-24 lg:max-w-6xl grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-between">
        {/* Banner Text Section */}
        <div className="space-y-4 text-center md:text-start">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-[600] font-Poppins">
            Find{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
              Partners
            </span>{" "}
            (CAs) available online
          </h2>
          <p className="text-base text-[#616161] font-sans">
            <span className="font-semibold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <SearchName></SearchName>
        </div>
        {/* Banner Image Section */}
        <div className="grid grid-cols-3 gap-4 justify-center md:justify-end mt-16 md:mt-0">
          <img className="rounded-md mt-16" src={img3} alt="" />
          <img className="rounded-md mb-10" src={img1} alt="" />
          <img className="mt-8 rounded-md" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
