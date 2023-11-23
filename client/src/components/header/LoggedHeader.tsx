import { useState, FormEvent } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

import { HiMenuAlt1, HiSearch, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/wokri_logo.png";

const homeMenu = [
  {
    id: 1,
    url: "/my-orders",
    title: "Orders",
  },
  {
    id: 2,
    url: "/my-selling-profile",
    title: "Switch to Selling",
  },
  {
    id: 3,
    url: "/my-buying-profile",
    title: "Switch to Buying",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState([]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/search", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="bg-transparent absolute w-full">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wokr Marketplace</span>
            <img
              className="h-14 w-auto"
              src={logo}
              alt="wokr marketplace logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt1 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden">
          <form onSubmit={onSubmit}>
            <input
              className="w-full md:w-[650px] py-6 border-gray-300 bg-gray-200 h-10 px-5 pl-16 rounded-full focus:outline-none font-light text-base"
              type="search"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for data on specific industry"
            />
            <button
              title="submit"
              type="submit"
              className="absolute left-0 top-0 mt-6 ml-4"
            >
              <HiSearch />
            </button>
          </form>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {homeMenu.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="text-base font-normal leading-6 text-gray-900"
            >
              {item.title}
            </Link>
          ))}
        </Popover.Group>
      </nav>

      {/* Create an Account */}

      {/* MOBILE MENU*/}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wokr Marketplace</span>
              <img
                className="h-12 w-auto"
                src={logo}
                alt="wokr marketplace logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiOutlineX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {homeMenu.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
