import { PropTypes } from "prop-types";
import {
  ClipboardDocumentListIcon,
  TrashIcon
} from "@heroicons/react/24/outline/index.js";

ClipBoardCard.propTypes = {
  children: PropTypes.string,
};

export default function ClipBoardCard({ children }) {
  return (
    <div className="flex flex-col bg-secondary-content rounded-lg shadow-lg">
      <div className="flex justify-end gap-2 py-2 px-4">
        <button>
          <TrashIcon className="h-6 w-6" />
        </button>
        <button>
          <ClipboardDocumentListIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="mockup-code">
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
