import { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Tools from "../../assets/Tools";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, FolderOpen, House, Mail, User } from "lucide-react";
import vector from "../../assets/nav.svg";

export default function Nav({ setView }) {
  const navbarRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const labels = [
    { label: "Home", link: "/", icon: <House className="text-[#D8984C]" /> },
    {
      label: "Sobre mi",
      link: "about",
      icon: <User className="text-[#D8984C]" />,
    },
    { label: "Skills", link: "skills", icon: <Tools /> },
    {
      label: "Proyectos",
      link: "projects",
      icon: <FolderOpen className="text-[#D8984C]" />,
    },
    {
      label: "Contacto",
      link: "contact",
      icon: <Mail className="text-[#D8984C]" />,
    },
  ];

  const handleClick = (path) => {
    setIsVisible(false);
    setTimeout(() => {
      setView(false);
      const div = document.getElementById("scroll");
      div.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setIsVisible(false);
      setTimeout(() => {
        setView(false);
      }, 500);
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <div
      ref={navbarRef}
      className="flex absolute w-svw h-lvh z-[122] "
      {...handlers}
      style={{
        background: isVisible ? "rgba(0, 0, 0, 0.75)" : "transparent",
        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.5s ease-in-out, background 0.5s ease",
      }}
    >
      <div
        className="w-4/5 h-full bg-white flex flex-col"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="w-full border-none relative flex" radius="0 0 1.5rem 0">
          <ChevronLeft
            className="absolute bottom-6 right-8"
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setView(false);
              }, 250);
            }}
          />
          <img src={vector} />
        </div>
        <div className="w-full h-[70%] flex items-center py-8 flex-col">
          {labels.map((item, idx) => (
            <NavLink to={item.link === "/" ? item.link : `/${item.link}`} className="w-full">
              <span
                key={idx}
                className="font-semibold text-[#545151] flex w-11/12 items-center justify-between py-4 px-10 active:bg-[#7B48481A] font-lato text-2xl"
                onClick={() => handleClick(item.link)}
              >
                {item.label} {item?.icon}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
