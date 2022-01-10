// NPM packages
import { createPortal } from "react-dom";

// Project files
import "./Modal.css";

export default function Modal({ state }) {
  // Local state
  const [modal, setModal] = state;

  // Properties
  const portal = document.getElementById("portal");
  const errorPortalMessage = "There is no portal set up on public/index.html";

  // Safeguards
  if (portal === null) return console.error(errorPortalMessage);
  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background" role="button" onClick={() => setModal(null)}>
        {/* empty on purpose */}
      </div>
      <div className="window">{modal}</div>
    </div>,
    portal
  );
}
