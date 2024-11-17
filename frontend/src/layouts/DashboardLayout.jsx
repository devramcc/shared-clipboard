import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import FloatingActionButton from "../components/FloatingActionButton";
import ClipBoardModal from "../components/ClipBoardModal";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-screen max-w-full min-h-screen flex flex-row gap-2 p-2">
      <div
        className={`${
          isOpen ? "w-5/6 sm:w-80" : "w-0"
        } bg-primary-content rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? "" : "-translate-x-full"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        {isOpen && <SideBar />}
      </div>
      <div className="flex-grow flex flex-col gap-2 transition-all duration-300 ease-in-out">
        <Header toggleSideBar={toggleSideBar} />
        <FloatingActionButton />
        <ClipBoardModal />
        <Outlet />
      </div>
    </div>
  );
}
