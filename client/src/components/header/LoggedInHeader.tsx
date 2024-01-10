import { useState, FormEvent, Fragment, useContext } from "react";
import { Dialog, Popover, Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../../context/authContext";
import {
  HiMenuAlt1,
  HiOutlineX,
  HiOutlineBell,
  HiOutlineChevronDown,
} from "react-icons/hi";
import logo from "../../assets/wokri_logo.png";

//data
import { homeMenu, profileLinks, settinglinks } from "../../data/data";

const LoggedInHeader = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const { user } = state;

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "LOGGED_OUT",
          payload: null,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

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

  const currentUrl = "/";
  console.log(window.location.pathname);

  return (
    <header
      className={`${
        window.location.pathname == currentUrl ? "absolute" : "'"
      } bg-transparent w-full`}
    >
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
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

        <div className="hidden lg:flex justify-center items-center">
          <form onSubmit={onSubmit}>
            <div className="relative w-full">
              <input
                type="search"
                name="domain"
                className="w-full md:w-[500px] backdrop-blur-sm bg-gray-200 py-2 pl-10 pr-4 rounded-full focus:outline-none border-2 border-white focus:border-wokr-red-100/5 transition-colors duration-300"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-6 justify-center items-center">
          {homeMenu.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="text-base font-normal leading-6 text-gray-900"
            >
              {item.title}
            </Link>
          ))}

          <HiOutlineBell className="text-2xl text-gray-500" />

          {user && (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center items-center px-4 py-2 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  <img
                    src="https://unsplash.it/640/425"
                    alt="image"
                    className="rounded-full w-8 h-8"
                  />
                  <HiOutlineChevronDown
                    className="-mr-1 ml-2 h-5 w-5 text-wokr-red-100 hover:text-wokr-red-200"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1">
                    {profileLinks.map((link, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <Link to={link.href} className="flex">
                            <button
                              className={`${
                                active
                                  ? "bg-wokr-red-100 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {link.label}
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>

                  <div className="px-1 py-1">
                    {settinglinks.map((link, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <Link to={link.href} className="flex">
                            <button
                              className={`${
                                active
                                  ? "bg-wokr-red-100 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {link.label}
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logOut}
                          id="logout"
                          title="logout"
                          className={`${
                            active
                              ? "bg-wokr-red-100 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
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
export default LoggedInHeader;
