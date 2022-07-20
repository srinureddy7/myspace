import React from "react";

const Header = () => {
  return (
    <section className="h-20 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-xl text-white ">
      <div className="main-container flex justify-between items-center h-full">
        <div>
          <p className="text-2xl font-extrabold">Srinu Reddy</p>
        </div>
        <div>
          <ul className="flex gap-5 font-semibold text-sm">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>INTERESTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
