import React from "react";
import Image from "next/image";
import Link from "next/link";

const tw = {
  wrapper: "h-14 w-screen absolute top-0",
  navContainer: " h-full flex flex-row flex-wrap justify-between relative z-10",
  logoContainer: "flex justify-start items-center pl-5 cursor-pointer",
  logo: "px-4",

  menuContainer:
    "text-black leading-5 font-semibold flex justify-end items-center pr-5",
  menuBtn:
    "px-4 py-1.5 border-black border-opacity-5 bg-black bg-opacity-5 rounded-xl cursor-pointer hover:bg-opacity-10 transition.all duration-300",
};
function Header() {
  return (
    <div className={tw.wrapper}>
      <header className={tw.navContainer}>
        <div className={tw.logoContainer}>
          <Link href="/">
            <a className={tw.logo}>
              <Image src="/images/logo.svg" height={16} width={120} />
            </a>
          </Link>
        </div>
        <div className={tw.menuContainer}>
          <ol>
            <li className={tw.menuBtn}>
              <button type="button" title="Menu" />
              <span>Menu</span>
            </li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default Header;
