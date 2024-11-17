import { useState, useEffect } from "react";
import axios from "axios";
import ClipBoardCard from "../components/ClipBoardCard";

export default function DashboardPage() {
  const [clipBoards, setClipBoards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/clipboard`).then((res) => {
      const clipBoards = res.data;
      setClipBoards(clipBoards);
    });
  }, []);
  return (
    <div className="w-full flex flex-col gap-2">
      {clipBoards.map((item, index) => (
        <ClipBoardCard key={index}>{item.clipboardContent}</ClipBoardCard>
      ))}
    </div>
  );
}
