import { Menu } from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <section className="h-20 w-full bg-purple-50 shadow-md sticky top-0">
      <div className="flex justify-between main-container items-center h-full">
        <p className="font-extrabold text-xl text-theme">Srinu.</p>
        <ul className="flex gap-6 text-sm font-semibold text-theme">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
