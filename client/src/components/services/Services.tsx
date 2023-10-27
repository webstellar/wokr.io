import React from "react";

const offerings = [
  {
    id: 1,
    title: "Sales & Prospecting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
  {
    id: 2,
    title: "Recruiting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
  {
    id: 3,
    title: "Data Research",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
];

const Services = () => {
  return (
    <div className="bg-transparent">
      <div className="-mt-40 mx-auto flex max-w-screen-2xl items-center justify-between lg:px-20 bg-white p-20 rounded-3xl border shadow-md gap-2">
        <div className="flex justify-around items-start">
          <div className="flex mt-4">
            <h3 className="font-pangram-medium text-4xl text-left">
              Explore the possibilities of automation.
            </h3>
          </div>

          <div className="grid grid-cols-2 items-stretch justify-around gap-y-4 gap-x-6">
            {offerings.map((offer) => (
              <div
                key={offer.id}
                className="flex flex-col justify-end items-start border border-gray-600 rounded-xl hover:bg-wokr-red-200 hover:text-gray-50 px-10 py-10 h-60 gap-y-3"
              >
                <h4 className="text-xl font-pangram-normal">{offer.title}</h4>
                <p className="text-sm font-pangram-light">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
