import { PropTypes } from "prop-types";

ClipBoardCard.propTypes = {
  children: PropTypes.string,
};

export default function ClipBoardCard({ children }) {
  return (
    <div className="mockup-code">
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}
