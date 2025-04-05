import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ handleScrollToAboutMe, handleScrollToProjects }) => {
  const [navBar, setNavBar] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
      return;
    }
    setNavBar(false);
  };

  window.addEventListener("scroll", changeBackground);

  const showNavbar = navBar || pathname !== "/";

  const handleScrollToTop = () => {
    navigate("/");
    scrollToTop();
  };

  const menu = [
    {
      label: "Home",
      fn: handleScrollToTop,
    },
    {
      label: "About Me",
      fn: handleScrollToAboutMe,
    },
    {
      label: "Projects",
      fn: handleScrollToProjects,
    },
  ];

  return (
    <div
      className={`fixed w-full z-50 flex px-7 items-center ${showNavbar ? "bg-emerald-500 py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2
            aria-hidden
            onClick={handleScrollToTop}
            className={`cursor-pointer font-extrabold text-4xl -mt-1 ${showNavbar ? "text-[#030712] hover:text-gray-800" : "text-emerald-500 hover:text-emerald-200"}`}
          >
            {"[K]"}
          </h2>
        </div>
        <div>
          <ul className="flex gap-8 font-mono">
            {menu.map((item) => (
              <li key={item}>
                <button
                  onClick={item.fn}
                  className={`cursor-pointer ${showNavbar ? "hover:text-gray-800 text-[#030712]" : "text-emerald-200 hover:text-emerald-500"}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
