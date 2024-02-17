import { Fragment, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      togglePopup();
    }
  };

  return (
    <>
      {isOpen ? (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg shadow-lg w-[80%] md:w-[70%] lg:w-1/3 relative">
            <img
              src="./images/popup.jpg"
              alt="popup"
              className=" bg-cover w-full rounded-lg"
            />
            <button
              className="absolute top-[10px] right-[10px]  text-3xl text-red-400 hover:text-red-600 "
              onClick={togglePopup}
            >
              <IoCloseOutline />
            </button>
          </div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </>
  );
}

export default Popup;
