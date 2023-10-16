import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import immg1 from "../../../../public/Rectangle 376.png";

const DetailsCa = () => {
  //   const data = useLoaderData();
  //   console.log(data);

  const [details, setDetails] = useState([]);

  const id = useParams();
  // console.log(id._id);

  useEffect(() => {
    fetch(`https://mcs-server-seven.vercel.app/users/${id._id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);

  console.log(details);
  const {
    name,
    image,
    about,
    intro,
    rating,
    reviewCount,
    price,
    deliveryTime,
    taskComplexity,
    testimonial,
  } = details;

  return (
    <div className="bg-[#fafbfc]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-8 mx-auto py-20 lg:max-w-6xl">
        <div className="">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="py-4">{intro}</p>
          <span className="flex gap-2 items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#0076CE"
                />
              </svg>
            </p>
            <p className="text-[#0076CE]">{rating}</p>
            <p className="ps-1">({reviewCount})</p>
          </span>
          <div className="shadow-slate-300 shadow-md p-6 rounded-xl mt-8">
            <span className="flex items-center justify-between">
              <p>{taskComplexity}</p>
              <p className="text-2xl font-bold">{price}</p>
            </span>
            <div className="flex pt-6 gap-3 items-center">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                    fill="#0076CE"
                  />
                </svg>
              </p>
              <p className="">{deliveryTime}</p>
            </div>
            <span className="flex gap-4 pt-6">
              <button className="btn py-3 px-5 w-full text-white rounded-xl bg-[#0076CE] hover:bg-[#0075cec9]">
                Request Proposal
              </button>
              <button className="btn py-3 px-5 w-full rounded-xl text-[#0076CE] border border-[#0076CE]">
                Chat with me
              </button>
            </span>
          </div>
          <div className="shadow-slate-300 shadow-md p-6 rounded-xl mt-10">
            <h2 className="text-2xl font-semibold">What people say?</h2>
            <p className="pt-3">{testimonial?.text}</p>
            <p className="text-end pt-8">Author: {testimonial?.author}</p>
          </div>
        </div>
        <div className="">
          <img className="rounded-lg" src={image} alt="" />
          <h2 className="text-3xl font-semibold py-6">About {name}</h2>
          <div className="flex justify-between">
            <span>
              <h2 className="text-slate-500">FROM</h2>
              <h2>{about?.from}</h2>
            </span>
            <span>
              <h2 className="text-slate-500">PARTNER SINCE</h2>
              <h2>{about?.partnerSince}</h2>
            </span>
            <span>
              <h2 className="text-slate-500">AVERAGE RESPONSE TIME</h2>
              <h2>{about?.averageResponseTime}</h2>
            </span>
          </div>
          <div>
            <h2 className="pt-4">ABOUT</h2>
            <p className="font-light">{about?.description}</p>
          </div>
          <div className="flex justify-between pt-8">
            <div>
              <h2 className="pb-3">SERVICES I OFFER</h2>
              <p className="font-light">{about?.services[0]}</p>
              <p className="font-light">{about?.services[1]}</p>
              <p className="font-light">{about?.services[2]}</p>
              <p className="font-light">{about?.services[3]}</p>
              <p className="font-light">{about?.services[4]}</p>
              <p className="font-light">{about?.services[5]}</p>
              <p className="font-light">{about?.services[6]}</p>
            </div>
            <div>
              <h2 className="pb-3">WHY ME?</h2>
              <p className="font-light">{about?.benefits[0]}</p>
              <p className="font-light">{about?.benefits[1]}</p>
              <p className="font-light">{about?.benefits[2]}</p>
              <p className="font-light">{about?.benefits[3]}</p>
              <p className="font-light">{about?.benefits[4]}</p>
              <p className="font-light">{about?.benefits[5]}</p>
              <p className="font-light">{about?.benefits[6]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="px-6 md:px-8 mx-auto lg:max-w-6xl pb-20">
          <h2 className="text-3xl font-semibold pb-6">Recommended for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="shadow-slate-300 shadow-md rounded-xl">
              <img src={immg1} alt="" />
              <div className="p-6">
                <span className="flex items-center justify-between">
                  <p className="py-4">Michael Jackson</p>
                  <p className="text-2xl font-bold">₹4,370</p>
                </span>
                <p>I will do business evaluation and corporate services</p>
                <span className="flex gap-2 items-center pt-6">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                        fill="#0076CE"
                      />
                    </svg>
                  </p>
                  <p className="text-[#0076CE]">4.8</p>
                  <p className="ps-1">(89)</p>
                </span>
                <button className="btn py-3 mt-6 px-5 w-full text-white rounded-xl bg-[#0076CE] hover:bg-[#0075cec9]">
                  View services
                </button>
              </div>
            </div>
            <div className="shadow-slate-300 shadow-md rounded-xl">
              <img src={immg1} alt="" />
              <div className="p-6">
                <span className="flex items-center justify-between">
                  <p className="py-4">Michael Jackson</p>
                  <p className="text-2xl font-bold">₹4,370</p>
                </span>
                <p>I will do business evaluation and corporate services</p>
                <span className="flex gap-2 items-center pt-6">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                        fill="#0076CE"
                      />
                    </svg>
                  </p>
                  <p className="text-[#0076CE]">4.8</p>
                  <p className="ps-1">(89)</p>
                </span>
                <button className="btn py-3 mt-6 px-5 w-full text-white rounded-xl bg-[#0076CE] hover:bg-[#0075cec9]">
                  View services
                </button>
              </div>
            </div>
            <div className="shadow-slate-300 shadow-md rounded-xl">
              <img src={immg1} alt="" />
              <div className="p-6">
                <span className="flex items-center justify-between">
                  <p className="py-4">Michael Jackson</p>
                  <p className="text-2xl font-bold">₹4,370</p>
                </span>
                <p>I will do business evaluation and corporate services</p>
                <span className="flex gap-2 items-center pt-6">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                        fill="#0076CE"
                      />
                    </svg>
                  </p>
                  <p className="text-[#0076CE]">4.8</p>
                  <p className="ps-1">(89)</p>
                </span>
                <button className="btn py-3 mt-6 px-5 w-full text-white rounded-xl bg-[#0076CE] hover:bg-[#0075cec9]">
                  View services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCa;
