import { createPortal } from "react-dom";
function AddModal({ children }) {
  return createPortal(
    <>
    {children}
    </>
,    document.body
  );
}
export default AddModal;
