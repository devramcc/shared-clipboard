import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../redux/slices/themeSlice.js";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  UserIcon,
} from "@heroicons/react/24/outline/index.js";
import PropTypes from "prop-types";

Header.propTypes = {
  toggleSideBar: PropTypes.func,
};

export default function Header({ toggleSideBar }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(updateTheme(newTheme));
  };
  return (
    <header className="flex flex-row justify-start items-center gap-3 bg-secondary-content p-2 h-16 shadow-lg rounded-lg">
      <button onClick={toggleSideBar} className="p-1">
        <Bars3Icon className="h-10 w-10" />
      </button>
      <h1 className="flex-grow font-mono font-bold underline cursor-pointer">Shared-ClipBoard</h1>
      <button
        className="rounded-full p-2 border-2 border-current"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <MoonIcon className="size-7" />
        ) : (
          <SunIcon className="size-7" />
        )}
      </button>
      <div className="dropdown dropdown-end mr-2">
        <div tabIndex={0} role="button">
          <button className="rounded-full p-2 border-2 border-current">
            <UserIcon className="size-7" />
          </button>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a className="hover:bg-error">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
