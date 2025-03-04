"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavComponent({ scrollToAbout, scrollToProject, temp }) {
  const [navToggle, setNavToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime(); // Set the initial time immediately

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  function toggleNavBtn() {
    setNavToggle(!navToggle);

    if (!navToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }

  return (
    <>
      <nav className="w-full px-[calc(1.25rem_+_1vw)] py-3 backdrop-blur-[6px] fixed left-0 top-0 flex items-center justify-between z-10">
        <div className="flex items-center gap-[6rem]">
          <Link href="/" className="text-color text-lg">
            Jonas Guzman
          </Link>
          <ul className="lg:flex hidden items-center justify-center gap-9">
            <li>
              <Link href="/" className="text-color text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
                href="/"
                className="text-color text-lg"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProject();
                }}
                href="/"
                className="text-color text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" className="text-color text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={toggleNavBtn}
          className="lg:hidden text-color font-light text-lg relative duration-300 eas before:contents-[' '] before:absolute before:left-0 before:bottom-[2px] before:w-full before:h-[1px] before:underline-color"
        >
          {!navToggle ? "Menu" : "Close"}
        </button>
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              className="fill-[#ebe3d5] translate-y-[1.75px]"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p className="font-thin text-color text-lg">{currentTime}</p> -
            <p className="font-thin text-color text-lg pr-2">Houston, TX</p>
            <p className="font-thin text-color text-lg">{temp}˚</p>
          </div>
        </div>
      </nav>
      <ul
        className={
          !navToggle
            ? "fixed left-0 top-0 py-[12rem] right-0 bottom-0 w-full h-screen px-[calc(1.25rem_+_1vw)] flex items-start justify-between flex-col backdrop-blur-[6px] duration-300 ease-in-out invisible opacity-0 z-[9]"
            : "fixed left-0 top-0 py-[12rem] right-0 bottom-0 w-full h-screen px-[calc(1.25rem_+_1vw)] flex items-start justify-between flex-col backdrop-blur-[6px] duration-300 ease-in-out visible opacity-100 z-[9]"
        }
      >
        <li>
          <Link href="/" className="text-color text-4xl">
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
            href="/"
            className="text-color text-4xl"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollToProject();
            }}
            href="/"
            className="text-color text-4xl"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="/" className="text-color text-4xl">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
