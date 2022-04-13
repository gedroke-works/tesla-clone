import React from "react";
import Image from "next/image";
import styles from "../styles/Section.module.css";

const tw = {
  // bgParam: "bg-no-repeat bg-cover bg-center h-screen w-screen",
  mainContainer: "flex flex-col items-center h-full",
  textContainer: "flex-1",
  title:
    " mt-[calc(14vh+24px)] px-6 w-full text-center text-[40px] font-semibold tracking-[-0.6px] leading-[48px]",
  desc: "px-6 pt-1.5 pb-4",
  ctaContainer: "flex gap-6 px-6 pb-6 mb-12 flex-col md:flex-row md:gap-8",
  leftBtn:
    "bg-[#171a20] text-white h-10 w-64 flex justify-center items-center rounded-[100px] bg-opacity-80 uppercase text-sm leading-tight font-semibold",
  rightBtn:
    "bg-[#f4f4f4] text-[#393c41] h-10 w-64 flex justify-center items-center rounded-[100px] bg-opacity-80 uppercase text-sm leading-tight font-semibold",
};

function Section({
  title,
  desc,
  backgroundImg,
  buttonRight,
  buttonLeft,
  downArrowShow,
}) {
  return (
    <div className={styles.wrapper}>
      <main className={tw.mainContainer}>
        <div className={tw.textContainer}>
          <h1 className={tw.title}>{title}</h1>
          <p className={tw.desc}>{desc}</p>
        </div>
        <div className={tw.ctaContainer}>
          <button className={tw.leftBtn}>{buttonLeft}</button>
          <button className={tw.rightBtn}>{buttonRight}</button>
        </div>
        <div className={styles.downArrow}>
          {downArrowShow && (
            <Image src="/images/arrow.svg" height={40} width={40} alt="" />
          )}
        </div>
      </main>
    </div>
  );
}

export default Section;
