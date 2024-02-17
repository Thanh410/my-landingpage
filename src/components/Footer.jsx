import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="py-16  px-8 grid grid-row-1 text-white lg:px-36 lg:py-24 lg:pb-6 bg-black md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img
            className="w-30 h-40"
            src="https://thomi.com.vn/wp-content/uploads/2023/08/cropped-logo-company-2.webp"
            alt="logo"
          />
          <h1 className="text-lg"> Công ty TNHH Giải pháp Công nghệ Thomi</h1>
        </div>
        <div>
          <h1 className="text-4xl">Dịch vụ</h1>
          <ul className="m-2">
            <li className="my-4">
              <a href="" className="text-lg hover:text-orange-500">
                Phát triển ứng dụng web
              </a>
            </li>
            <li className="my-4">
              <a href="" className="text-lg hover:text-orange-500">
                Phát triển ứng dụng di động
              </a>
            </li>
            <li className="my-4">
              <a href="" className="text-lg hover:text-orange-500">
                Nghiên cứu phát triển IOT
              </a>
            </li>
            <li className="my-4">
              <a href="" className="text-lg hover:text-orange-500">
                Nghiên cứu phát triển AI & ML
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl">Liên hệ</h1>
          <ul className="m-2">
            <li className="my-4 flex items-start">
              <div className="text-xl mr-2">
                <CiLocationOn />
              </div>
              <div className="">
                <span className="text-lg">Địa chỉ:</span>
                <a href="" className="text-lg ml-2 mt-1 hover:text-orange-500">
                  C57B - KP5 - P.Bửu Long ,Tp Biên Hòa, Đồng Nai
                </a>
              </div>
            </li>
            <li className="my-4 flex items-start">
              <div className="text-xl mr-2 mt-1">
                <FiPhone />
              </div>
              <div className="">
                <span className="text-lg">Hotline: </span>
                <a href="" className="text-lg ml-2 hover:text-orange-500">
                  +(84) 814 338 448
                </a>
              </div>
            </li>
            <li className="my-4 flex flex-row items-start">
              <div className="text-xl mr-2 mt-1">
                <CiMail />
              </div>
              <div className="">
                <span className="text-lg">Email: </span>
                <a href="" className="text-lg ml-2 hover:text-orange-500">
                  contact@thomi.com.vn
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-gray-300">
            Copyright © 2020. All Rights Reserved By Thomi
          </p>
        </div>
        <div></div>
        <div className="flex  items-center gap-4 text-lg text-gray-300 lg:justify-end">
          <a href="https://www.facebook.com/congtythomi" target="_blank">
            <FaFacebook className="border-none hover:text-blue-600" />
          </a>
          <a href="https://zalo.me/3955100994105352870" target="_blank">
            <FaFacebookMessenger className="border-none hover:text-violet-300" />
          </a>
          <a href="tel:+84123456789">
            <FaPhoneSquareAlt className="border-none hover:text-green-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
