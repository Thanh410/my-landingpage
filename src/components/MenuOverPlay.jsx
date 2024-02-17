/* eslint-disable react/prop-types */
// import React from "react";

// eslint-disable-next-line react/prop-types
function MenuOverPlay({ menuList }) {
  //   menuList.map((item) => console.log(item));
  return (
    <div className="absolute top-[50px] left-0 min-h-full backdrop-blur-lg w-full text-center">
      {menuList.map((item, index) => (
        <div key={index}>
          <a href={item.href}>
            <h1 className="text-xl justify-center mt-10 mb-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
              {item.name}
            </h1>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MenuOverPlay;
