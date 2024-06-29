"use client";
import NavComponent from "@/components/navComponent";
import Head from "next/head";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import experienceVideo from "./assets/high.mp4";
import PageReveal from "@/components/pageReaveal";
import ProjectScroll from "@/components/projectScroll";
import FetchWeather from "@/components/fetchWeather";

export default function Index() {
  const scrollRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const revealRef = useRef(null);

  const [temp, setTemp] = useState(null);
  const [isLgWidth, setIsLgWidth] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0); // Track current skill index

  const skills = [
    "Frontend Dev",
    "Innovation",
    "Web Design",
    "Digital Experiences",
    "FullStack Dev",
    "Lasting Designs",
  ];

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    FetchWeather({setTemp});
    PageReveal({ revealRef, skills, setSkillIndex });
  }, [skills.length]);

  useEffect(() => {
    ProjectScroll({ setIsLgWidth });
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = isLgWidth ? 400 : 330;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = isLgWidth ? 400 : 330;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Jonas Guzman - Full-Stack Web Dev</title>
        <meta
          name="description"
          content="Jonas Guzman, a full-stack web developer with 4+ years of experience in designing and deploying web applications. Skilled in creating responsive user interfaces and optimizing application performance."
        />
        <meta
          name="keywords"
          content="web developer, full-stack developer, front-end developer, back-end developer, JavaScript developer, React developer, Next.js developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavComponent
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
        temp={temp}
      />

      <div
        ref={revealRef}
        className="container fixed inset-0 z-30 bg-color flex items-center justify-center duration-[2.5s] ease-in-out"
      >
        <div className="w-full flex items-center justify-center flex-col text-center">
          <span className="text-color text-[3rem] leading-[3rem] font-extrabold uppercase">
            Creating Remarkable
          </span>
          <span className="skill-text text-color text-[2.75rem] leading-[3rem] font-light italic uppercase">
            {skills[skillIndex]}
          </span>
          <span className="skill-text text-color text-[3rem] leading-[3rem] font-extrabold uppercase">
            For a living
          </span>
        </div>
      </div>
      <div className="w-[200px] translate-y-[1000px] duration-[1s] ease-in-out lg:translate-y-0 fixed top-[4rem] right-8 backdrop-blur-[6px] p-4 border border-color rounded flex items-start justify-center flex-col gap-3">
        <p className="w-full text-color font-light text-lg leading-5">
          Considering embarking on a new frontend or fullstack project? I&apos;m
          here to offer my expertise.
        </p>
        <Link
          href="mailto:jonas12596@gmail.com"
          role="button"
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            role="button"
            className="p-2 rounded btn-bg-color cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              className="fill-[#212121]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </div>
          <p className="text-color font-light text-lg">Get Started</p>
        </Link>
      </div>
      <main className="container bg-color">
        <section className="w-full h-auto px-[calc(1.25rem_+_1vw)] pt-[6rem] pb-[3rem] flex items-start justify-center flex-col gap-6 lg:w-4/5 lg:pb-[4rem]">
          <h1 className="text-color text-4xl leading-9">
            Results-driven Web Developer with vast experience designing and
            deploying web applications. Skilled in creating responsive user
            interfaces and optimizing application performance. Committed to
            delivering high-quality solutions.
          </h1>
          <div className="w-full h-auto relative">
            <p className="w-3/4 opacity-25 lg:w-full text-color font-extrabold text-[calc(1em_+_22vw)] leading-[calc(1rem_+_15vw)] uppercase">
              4+ Years of dev
            </p>
            <video
              src={experienceVideo}
              muted
              loop
              autoPlay
              playsInline={true}
              decoding="async"
              className="absolute z-[1] w-[250px] h-auto right-[4rem] top-[2rem] lg:w-[440px] md:right-[3rem] md:top-[3rem] rounded border border-color shadow shadow-gray-800"
            />
          </div>
        </section>
        <section
          ref={aboutRef}
          className="w-full h-auto px-[calc(1.25rem_+_1vw)] flex items-center justify-center lg:w-4/5"
        >
          <div className="w-full flex items-end justify-end flex-col">
            <h2 className="w-full lg:w-1/2 text-color text-2xl">About Me</h2>
            <p className="w-full lg:w-1/2 py-2 text-color text-xl leading-6 font-light">
              Jonas Guzman, originally from the Bronx, NY, where I spent my
              early days before making a leap to Houston, TX, about six months
              ago to start a new chapter in life. As a self-taught full-stack
              developer, I&apos;ve been honing my skills independently, driven
              by a passion for crafting digital solutions that make an impact.
              Beyond coding, I find joy in exploring the natural beauty around
              me and soaking in the vibrant energy of city life.
            </p>
          </div>
        </section>
        <section
          ref={projectRef}
          className="w-screen h-auto py-[4rem] flex flex-col items-start justify-center gap-8"
        >
          <div className="w-full px-[calc(1.25rem_+_1vw)] flex items-center justify-between lg:w-[85%]">
            <h2 className="text-color text-2xl">Digital Experiences</h2>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="left-btn w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] fill-[#ebe3d5] cursor-pointer"
                viewBox="0 0 16 16"
                onClick={scrollLeft}
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="right-btn w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] fill-[#ebe3d5] cursor-pointer"
                viewBox="0 0 16 16"
                onClick={scrollRight}
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="w-full h-auto px-[calc(1.25rem_+_1vw)] flex items-start gap-6 overflow-x-scroll lg:px-0 scroll-smooth"
          >
            <div className="min-w-[300px] h-[350px] border border-color rounded lg:min-w-[400px] lg:h-[450px]"></div>
            <div className="min-w-[300px] h-[350px] border border-color rounded lg:min-w-[400px] lg:h-[450px]"></div>
            <div className="min-w-[300px] h-[350px] border border-color rounded lg:min-w-[400px] lg:h-[450px]"></div>
            <div className="min-w-[300px] h-[350px] border border-color rounded lg:min-w-[400px] lg:h-[450px]"></div>
            <div className="min-w-[300px] h-[350px] border border-color rounded lg:min-w-[400px] lg:h-[450px]"></div>
          </div>
        </section>
        <section
          ref={aboutRef}
          className="w-full h-auto px-[calc(1rem_+_1vw)] flex items-center justify-center lg:w-4/5"
        >
          <div className="w-full flex items-end justify-end flex-col">
            <h2 className="w-full lg:w-1/2 text-color text-2xl">About Me</h2>
            <p className="w-full lg:w-1/2 py-2 text-color text-xl leading-6 font-light">
              Jonas Guzman, originally from the Bronx, NY, where I spent my
              early days before making a leap to Houston, TX, about six months
              ago to start a new chapter in life. As a self-taught full-stack
              developer, I&apos;ve been honing my skills independently, driven
              by a passion for crafting digital solutions that make an impact.
              Beyond coding, I find joy in exploring the natural beauty around
              me and soaking in the vibrant energy of city life.
            </p>
          </div>
        </section>
        <section className="container"></section>
        <section className="container"></section>
      </main>
    </>
  );
}
