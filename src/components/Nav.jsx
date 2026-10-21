import { useTranslation } from "react-i18next";
import Switch from "./Switch";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const labelClass = "font-semibold text-gray text-xl max-lg:text-lg";
const shadowLabelClass = `${labelClass} [text-shadow:rgba(0,0,0,0.25)_0px_4px_4px]`;

export default function Nav() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isContactPage, setIsContactPage] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/contacto") {
      setIsContactPage(true);
    } else {
      setIsContactPage(false);
    }
  }, [location.pathname]);

  const labels = [
    t("page.home.title"),
    t("page.us.title"),
    t("page.services.title"),
  ];
  const labels2 = [t("page.prices.title"), t("page.contact.title")];

  return (
    <div
      className={`h-[5vh] pt-14 pb-4 flex justify-center items-center fixed z-[40] w-full top-0 max-lg:justify-between max-lg:gap-8 max-lg:px-12 ${
        scrolled ? "bg-white" : "bg-none"
      }`}
    >
      <div className="w-[55%] flex items-center gap-16 max-lg:w-auto max-lg:gap-8">
        {labels.map((item, idx) => (
          <a
            href={isContactPage ? `/#${item}` : `#${item}`}
            key={idx}
            className="text-hover"
          >
            <span className={labelClass}>{item}</span>
          </a>
        ))}
      </div>
      <div className="w-[15%] flex items-center justify-evenly max-lg:w-auto max-lg:gap-8">
        <a
          href={isContactPage ? `/#${labels2[0]}` : `#${labels2[0]}`}
          className="text-hover"
        >
          <span className={shadowLabelClass}>{labels2[0]}</span>
        </a>
        <Link
          to={
            isContactPage
              ? `/${labels2[1].toLowerCase()}`
              : `${labels2[1].toLowerCase()}`
          }
          className="text-hover"
        >
          <span className={shadowLabelClass}>{labels2[1]}</span>
        </Link>
      </div>

      <div className="gap-6 flex items-center max-lg:gap-4">
        <span className={shadowLabelClass}>ES</span>
        <Switch color={"#4A4A4A"} />
        <span className={shadowLabelClass}>EN</span>
      </div>
    </div>
  );
}
