import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import ClipBoardCard from "../components/ClipBoardCard";

DashboardPage.propTypes = {
  requestPath: PropTypes.string,
};

export default function DashboardPage({ requestPath }) {
  const [clipBoards, setClipBoards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(requestPath);
        setClipBoards(res.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [requestPath]);

  return (
    <div className="w-full flex flex-col gap-2">
      {clipBoards.map((item, index) => (
        <ClipBoardCard key={index}>{item.clipboardContent}</ClipBoardCard>
      ))}
    </div>
  );
}
