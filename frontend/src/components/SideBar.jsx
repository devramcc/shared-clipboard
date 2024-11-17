import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="flex flex-col p-2 gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "btn btn-active btn-primary btn-sm"
            : "btn btn-primary btn-sm"
        }
      >
        All ClipBoard
      </NavLink>
      <NavLink
        to="/today"
        className={({ isActive }) =>
          isActive
            ? "btn btn-active btn-primary btn-sm"
            : "btn btn-primary btn-sm"
        }
      >
        Today ClipBoards
      </NavLink>
      <NavLink
        to="/latest"
        className={({ isActive }) =>
          isActive
            ? "btn btn-active btn-primary btn-sm"
            : "btn btn-primary btn-sm"
        }
      >
        Latest ClipBoards
      </NavLink>
    </aside>
  );
}
