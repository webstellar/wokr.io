// components/Navbar.tsx
import { HiMenuAlt1 } from "react-icons/hi";
import classNames from "classnames";
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true,
        "flex items-center": true,
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true,
      })}
    >
      <div className="font-bold text-lg">Admin Panel</div>
      <div className="flex-grow"></div>
      <button
        type="button"
        title="menu-bar"
        className="md:hidden"
        onClick={props.onMenuButtonClick}
      >
        <HiMenuAlt1 className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;
