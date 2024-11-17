export default function SideBar() {
  return (
    <aside className="flex flex-col p-2 gap-2">
      <button className="btn btn-sm btn-primary">Latest ClipBoard</button>
      <button className="btn btn-sm btn-secondary">Today ClipBoards</button>
      <button className="btn btn-sm btn-secondary">All ClipBoards</button>
    </aside>
  );
}
