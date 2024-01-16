import classNames from "classnames";
import logo from "../../assets/wokri_logo.png";
import iconLogo from "../../assets/wokr_icon_only.png";
import { sidebarNavItems } from "../../data/data";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

import { Link } from "react-router-dom";
import { NavItem } from "../../types/Types";

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
  navItems?: NavItem[];
  shown: boolean;
};

const Sidebar = ({
  collapsed,
  setCollapsed,
  navItems = sidebarNavItems,
  shown,
}: Props) => {
  const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;

  return (
    <div
      className={classNames({
        "z-20": true,
        "transition-all duration-300 ease-in-out": true,
        "fixed md:static md:translate-x-0": true,
        "w-[300px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen md:h-full sticky inset-0":
            true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          <button
            title="icon-button"
            type="button"
            className={classNames({
              "grid place-content-center": true,
              "w-auto h-14 rounded-full": true,
            })}
            onClick={() => setCollapsed(!collapsed)}
          >
            <span className="whitespace-nowrap">
              {!collapsed ? (
                <img
                  className="h-14 w-auto"
                  src={logo}
                  alt="wokr marketplace logo"
                />
              ) : (
                <img
                  className="h-10 w-auto"
                  src={iconLogo}
                  alt="wokr marketplace logo"
                />
              )}
            </span>
          </button>
        </div>
        {/* nav items part */}
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-2 flex flex-col gap-2 items-stretch": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-gray-600 hover:bg-wokr-red-100 hover:text-white flex":
                      true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link to={item.href} className="flex gap-3">
                    <img src={item.icon} alt="item.label" className="w-6 h-6" />
                    <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={classNames({
            "grid place-content-stretch p-4 border-b": true,
          })}
        >
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <img
              src={
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              height={40}
              width={40}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-gray-600 my-0">{"Full Name"}</span>
                <Link to="/profile" className="text-wokr-red-100 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>

        <div
          className={classNames({
            "flex items-center": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          <button
            title="icon-button"
            type="button"
            className={classNames({
              "grid place-content-center": true,
              "w-auto h-14 rounded-full": true,
            })}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
