import Vector from "../assets/VectorP";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";
import Whatsapp from "../assets/Whatsapp";
import Circle from "../assets/Circle";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./buttons/style.css";

export default function Contacto() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isContactPage, setIsContactPage] = useState(false);

  const labels = [
    t("page.home.title"),
    t("page.us.title"),
    t("page.services.title"),
    t("page.prices.title"),
    t("page.contact.title"),
  ];

  const vectores = [
    <Facebook width="40%" height="40%" />,
    <Instagram width="40%" height="40%" />,
    <Whatsapp width="40%" height="40%" />,
    <Twitter width="40%" height="40%" />,
  ];

  useEffect(() => {
    if (location.pathname === "/contacto") {
      setIsContactPage(true);
    } else {
      setIsContactPage(false);
    }
  }, [location.pathname]);

  return (
    <div
      className="h-screen items-center flex flex-col justify-center relative overflow-hidden bg-white"
      id="Footer"
      style={{
        backgroundImage: `url(/images/bg.svg)`,
        backgroundSize: "cover",
        backgroundPositionY: "-30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {isContactPage && (
        <div className="absolute -left-4 top-[-38%] rotate-[270deg]">
          <Circle color="#FB980F54" width="45rem" height="45rem" />
        </div>
      )}
      <div className="flex flex-col justify-center h-[75%] w-1/2 items-center gap-8 max-lg:w-[85%]">
        <Vector width="20rem" height="25.6rem" />
        <div className="flex flex-col items-center justify-center gap-8 z-[2]">
          <span className="font-bold text-4xl text-[#FFFFFF78] [text-shadow:0px_4px_6.4px_#93939340]">
            Priscila Sarmiento
          </span>
          <div className="flex items-center gap-16 max-lg:gap-10 max-md:gap-6 max-md:flex-wrap max-md:justify-center">
            {labels.map((item, idx) => {
              let link =
                item === t("page.contact.title") ? "/contacto" : `/#${item}`;

              return (
                <a
                  href={link}
                  key={idx}
                  style={{ textDecoration: "none" }}
                  className="text-hover"
                >
                  <span key={idx} className="text-white font-semibold">
                    {item}
                  </span>
                </a>
              );
            })}
          </div>
          <div className="wrapper">
            <a href="#" className="icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
