import { PlusIcon } from "@heroicons/react/24/outline/index.js";

export default function FloatingActionButton() {
  return (
    <button
      onClick={() => document.getElementById("my_modal_2").showModal()}
      className="fixed bottom-8 right-8 bg-secondary-content text-inherit p-4 border rounded-full shadow-lg"
    >
      <PlusIcon className="h-6 w-6" />
    </button>
  );
}
