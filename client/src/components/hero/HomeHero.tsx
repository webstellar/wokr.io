import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import HeroImage from "../../assets/heroImage.png";

import { Categories } from "../../data/landingPage";

const HomeHero = () => {
  return (
    <section className="bg-wokr-red-50 h-screen mx-auto flex justify-around items-center">
      <div className="grid md:grid-cols-2 justify-start items-center mx-auto max-w-screen-2xl p-6 lg:px-8">
        <div className="flex flex-col justify-start items-start gap-y-10">
          <h3 className="font-pangram-medium sm:text-4xl md:text-6xl">
            Find your ideal freelance job, powered by AI.
          </h3>

          <form>
            <div className="relative mx-auto w-full">
              <input
                className="border border-gray-900 bg-transparent h-10 w-[40rem] px-5 pr-16 rounded-lg text-sm focus:outline-none py-6"
                type="search"
                name="search"
                placeholder="Search Job Title or Category"
              />
              <button
                id="email"
                title="email"
                type="submit"
                className="absolute right-0 top-0 mt-1.5 mr-2  bg-wokr-red-100 text-gray-50 rounded-lg flex justify-center items-center gap-x-3 py-2 px-3"
              >
                <span aria-hidden="true">
                  <HiOutlineSearch />
                </span>
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-row justify-around items-center gap-4">
            <span>Popular:</span>
            {Categories.map((category) => (
              <Link
                key={category.id}
                to={category.url}
                className="mr-1 border rounded-full border-wokr-red-100 py-2 px-4"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
