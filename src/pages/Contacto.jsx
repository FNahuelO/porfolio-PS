import React, { useEffect, useState } from "react";
import Circle from "../assets/Circle";
import * as Yup from "yup";
import { useFormik } from "formik";
import Vector from "../assets/VectorP";
import Nav from "../components/Nav";
import { useTranslation } from "react-i18next";
import { ClipLoader } from "react-spinners";

const fields = [
  { name: "nombre", label: "Nombre", type: "text" },
  { name: "apellido", label: "Apellido", type: "text" },
  { name: "correo", label: "Correo Electrónico", type: "text" },
  { name: "mensaje", label: "Mensaje", type: "textarea" },
];

const inputClass =
  "w-[90%] p-4 bg-[#FFFFFF82] text-[#2C16478A] text-[1.1rem] font-['Josefin_Sans'] border-[0.5px] border-solid border-[#0000000f] rounded-2xl outline-none";

export default function Contacto() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [buttonLabel, setButtonLabel] = useState("Enviar");

  useEffect(() => {
    if (language === "en") {
      setButtonLabel("Send");
    }
  }, [language]);

  const labels = [
    t("page.home.title"),
    t("page.us.title"),
    t("page.services.title"),
    t("page.prices.title"),
    t("page.contact.title"),
  ];

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    handleReset,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Este campo es obligatorio"),
      apellido: Yup.string().required("Este campo es obligatorio"),
      correo: Yup.string()
        .email("Formato de correo inválido")
        .required("Este campo es obligatorio"),
      mensaje: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit: async (values) => {
      setButtonLabel(<ClipLoader size={20} color="white" />);
      console.log(values);
    },
  });
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-white w-full relative max-lg:h-auto max-lg:min-h-screen max-lg:py-36">
        <Nav />

        <div className="flex absolute right-0 top-0">
          <Circle width="40rem" height="40rem" />
        </div>
        <div className="flex absolute left-[-10%] bottom-[-20%] rotate-180 z-10">
          <Circle color="#FB980F54" width="65rem" height="65rem" />
        </div>

        <div className="w-1/2 h-[65%] flex flex-col z-[35] rounded-lg relative max-lg:w-[80%] max-lg:h-auto max-md:w-[90%]">
          <div className="absolute top-[7rem] right-[1rem] translate-x-[70%] w-[20rem] py-12 px-8 bg-[#f9b233] rounded-[2rem] text-white text-[1.1rem] text-start leading-[1.4] shadow-[14px_9px_7.7px_0px_#68009940] z-[99] after:absolute after:content-[''] after:bottom-[-2.2rem] after:left-[6.5rem] after:rotate-[14deg] after:w-0 after:h-0 after:border-x-[1.5rem] after:border-x-transparent after:border-t-[3rem] after:border-t-[#f9b233] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:translate-x-0 max-lg:self-end max-lg:mb-12 max-lg:py-8">
            {t("page.contact.bubble")}
          </div>
          <div className="w-full bg-[#EF7D13] rounded-t-2xl h-[8%] max-lg:h-[4rem]"></div>
          <div className="h-[90%] bg-[#FFFFFF82] backdrop-blur-[39.75px] rounded-b-2xl max-lg:h-auto">
            <div className="flex flex-col w-1/2 items-center justify-center px-4 py-8 max-md:w-full">
              <form
                className="w-full h-full flex flex-col justify-around items-center gap-2 px-4"
                onSubmit={handleSubmit}
              >
                {fields.map((field) => (
                  <div
                    className="flex flex-col items-start gap-2 w-[90%]"
                    key={field.name}
                  >
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        placeholder={field.label}
                        className={`${inputClass} h-[5rem] resize-none`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        placeholder={field.label}
                        className={inputClass}
                      />
                    )}
                    {touched[field.name] && errors[field.name] ? (
                      <span className="text-[red] text-[.8rem] px-2">
                        {errors[field.name]}
                      </span>
                    ) : null}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-[90%] bg-[#EF7D13] text-white text-[1rem] font-bold rounded-[2rem] focus:outline-none hover:bg-[#2F4A71] hover:text-white hover:shadow-[0_4px_4px_0_#00000040]"
                  disabled={buttonLabel !== "Enviar"}
                >
                  {buttonLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen items-center justify-center flex flex-col relative overflow-hidden bg-white"
        id="Footer"
        style={{
          backgroundImage: `url(/images/bg.svg)`,
          backgroundSize: "cover",
          backgroundPositionY: "-30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center h-[75%] w-1/2 items-center gap-8 max-lg:w-[85%]">
          <Vector width="20rem" height="25.6rem" />
          <div className="flex flex-col justify-center items-center gap-8 z-[2]">
            <span className="font-bold text-[2rem] text-[#FFFFFF78] shadow-md shadow-[#93939340]">
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
    </>
  );
}
