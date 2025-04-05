import React from "react";
import Person from "../assets/camille.jpeg";

const AboutMe = () => {
  return (
    <div className="bg-[#030712] px-7">
      <div className="container mx-auto pt-24 space-y-5">
        <div className="flex items-center gap-10 w-[50%]">
          <div>
            <h3 className="text-emerald-500 font-bold text-2xl flex-1">
              About Me
            </h3>
          </div>
          <div className="border lg:block hidden border-emerald-900 w-[50%] h-0 mt-2"></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <article className="text-emerald-200 lg:w-[50%] space-y-2 font-mono">
            <p align="justify">
              Hello! My name is Katrine Camille. I never expected to be here,
              writing code and building websites. My career path seemed set in
              stone—I had a degree in Office Systems Management and a steady job
              as an HR Payroll Associate. While the work was stable, something
              felt off. The routine was predictable, and I felt unfulfilled, as
              if I was meant for something more.
            </p>
            <p align="justify">
              Then, one day, I had an unexpected opportunity to visit the
              developers' office. Watching them bring ideas to life through code
              was like a spark that ignited a fire inside me. It was in that
              moment that I realized what was missing all along: a passion for
              creating and problem-solving.
            </p>
            <p align="justify">
              That evening, I dove into learning HTML and CSS through YouTube
              tutorials and online articles. I spent my free time experimenting
              and building small projects, and when I hit roadblocks, my
              programmer friends were always there to help me navigate through
              them.
            </p>
            <p align="justify">
              As my confidence grew, I ventured into JavaScript, adding
              interactivity and making my projects feel more alive. After a year
              of self-study and perseverance, I was ready to take the leap and
              pursue a front-end developer role. The journey was not without its
              challenges—many rejections came my way—but I remained determined.
            </p>
            <p align="justify">
              Eventually, I landed my first front-end developer job. The
              transition from HR payroll to development was tough, but the joy
              of learning and growing in a field I was passionate about made it
              all worth it.
            </p>
            <p align="justify">
              Today, I continue to hone my skills, embrace new technologies, and
              explore the ever-changing world of web development. What started
              as a spark of curiosity has grown into a fulfilling and exciting
              career. I’m just getting started, and the best is yet to come.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className="flex w-full gap-10 mt-2">
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>Blazor</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </article>
          <div className="lg:flex-1 flex justify-center relative ">
            <img
              src={Person}
              alt="katrine camille pacatang"
              className="w-80 lg:shadow-[44px_27px_0px_0px_rgb(15,_180,_124)] lg:border-0 border-8 border-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
