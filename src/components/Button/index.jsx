import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "./ShakeRippleButton.css";

function Button() {
  return (
    <div className="flex flex-col justify-center items-start gap-2 fixed right-0 bottom-[25px]">
      <a
        href="https://www.facebook.com/congtythomi"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 phone-vibration-button blue p-4 rounded-full"
      >
        <FaFacebook className="text-blue-600 text-5xl phone-icon" />
      </a>
      <a
        href="https://zalo.me/3955100994105352870"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 phone-vibration-button blue p-4 rounded-full"
      >
        <SiZalo className="text-violet-600 bg-white p-2 rounded-full text-5xl phone-icon border-2" />
      </a>
      <a
        href="https://www.messenger.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 p-4"
      >
        <FaFacebookMessenger className="text-violet-400 text-5xl phone-icon" />
      </a>
    </div>
  );
}

export default Button;
