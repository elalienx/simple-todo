// NPM packages
import { createPortal } from "react-dom";

// Project files
import "./Modal.css";

export default function Modal({ state }) {
  const [modal, setModal] = state;
  const portal = document.getElementById("portal");
  const errorPortalMessage = "There is no portal set up on public/index.html";

  if (portal === null) return console.error(errorPortalMessage);
  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background" role="button">
        {/* empty on purpose */}
      </div>
      <div className="content">{modal}</div>
    </div>,
    portal
  );
}
