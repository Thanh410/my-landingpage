import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import MenuOverPlay from "./MenuOverPlay";

const menuList = [
  { name: "Trang chủ", href: "#home", current: true },
  { name: "Giới thiệu", href: "#introduce", current: false },
  { name: "Dịch vụ", href: "#service", current: false },
  { name: "Tuyển dụng", href: "#recruit", current: false },
  { name: "Liên hệ", href: "#contact", current: false },
  {
    name: "Điều khoản",
    href: "https://docs.google.com/document/d/17AgcYAcNyMgb9Vtf71R2B0PAxRpoZ7YM/edit",
    current: false,
    target: "_blank",
  },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      menuList.forEach((item, index) => {
        const targetSlide = document.getElementById(item.href.substring(1));

        if (targetSlide) {
          const slidePosition = targetSlide.getBoundingClientRect();

          if (
            slidePosition.top <= window.innerHeight * 0.5 &&
            slidePosition.bottom >= window.innerHeight * 0.5
          ) {
            setCurrentMenu(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 px-4 py-4 lg:px-36 bg-white z-10  shadow-md">
      <nav className="flex justify-between items-center ">
        <div>
          <a href="/" className="text-xl font-semibold">
            <img
              className="w-40"
              src="https://thomi.com.vn/wp-content/uploads/2023/08/logo-123-01-1.png"
              alt="logo"
            />
          </a>
        </div>
        <ul className="hidden xl:flex space-x-6">
          {menuList.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`text-gray-600 text-lg font-medium  ${
                  currentMenu === index ? "text-orange-500" : ""
                }`}
                target={item.target != undefined ? "_blank" : ""}
                onClick={() => setCurrentMenu(index)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div></div>
        <div className="xl:hidden ">
          {!toggle ? (
            <HiBars3
              onClick={() => setToggle(!toggle)}
              className=" text-2xl cursor-pointer"
            />
          ) : (
            <HiOutlineXMark
              onClick={() => setToggle(!toggle)}
              className="text-2xl cursor-pointer"
            />
          )}
          {toggle ? <MenuOverPlay menuList={menuList} /> : null}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
