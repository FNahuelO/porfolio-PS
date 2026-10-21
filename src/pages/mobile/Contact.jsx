import { useFormik } from "formik";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import AnimatedBubbles from "../../components/mobile/AnimatedBubbles copy";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const EMAIL_ID = "service_u8tlai2";
const KEY = "woKmxD1555gVw-BQD";
const TEMPLATE = "template_37x19ha";

const fields = [
  { name: "name", label: "Nombre", type: "text" },
  { name: "apellido", label: "Apellido", type: "text" },
  { name: "correo", label: "Correo Electrónico", type: "text" },
  { name: "mensaje", label: "Mensaje", type: "textarea" },
];

export default function Contact() {
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
      name: "",
      apellido: "",
      correo: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio"),
      apellido: Yup.string().required("Este campo es obligatorio"),
      correo: Yup.string()
        .email("Formato de correo inválido")
        .required("Este campo es obligatorio"),
      mensaje: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit: async (values) => {
      setButtonLabel(<ClipLoader size={20} color="white" />);

      emailjs
        .send(
          EMAIL_ID,
          TEMPLATE,
          {
            nombre: values.name,
            apellido: values.apellido,
            email: values.correo,
            mensaje: values.mensaje,
          },
          KEY
        )
        .then(() => {
          toast("¡Mensaje enviado!");
          setButtonLabel("Enviar");
          handleReset();
    
        });

    },
  });

  const inputStyles =
    "bg-[#FFFFFF82] w-full outline-none text-[#2C16478A] p-4 text-sm border border-[#F3F3F3] rounded-md";

  return (
    <div className=" flex flex-col h-full justify-center items-center bg-white relative">
      <AnimatedBubbles />
      <div className=" relative z-10 flex flex-col justify-center items-center w-4/5 bg-transparent -translate-y-20 ">
        <div className="w-full bg-[#EF7D13] h-10 rounded-t-2xl"></div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-around items-center gap-2 px-4 py-16 rounded-b-2xl backdrop-blur-3xl bg-white/50"
        >
          {fields.map((field) => (
            <div
              key={field.name}
              className="flex flex-col items-start gap-2 w-11/12"
              flex="column"
              align="flex-start"
              gap=".5rem"
              width="90%"
            >
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                  placeholder={field.label}
                  className={`${inputStyles} h-40 resize-none !text-lg`}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                  placeholder={field.label}
                  className={`${inputStyles} h-20 !text-lg`}
                />
              )}
              {touched[field.name] && errors[field.name] ? (
                <span className="text-red-500 px-2 text-sm">
                  {errors[field.name]}
                </span>
              ) : null}
            </div>
          ))}
          <button
            type="submit"
            disabled={buttonLabel !== "Enviar"}
            className="hover:bg-[#2F4A71] text-white shadow-md hover:shadow-[#00000040] bg-[#FB8501] rounded-3xl w-max px-6 flex text-lg mt-4"
          >
            {buttonLabel} <ChevronRight size="1.5rem" />
          </button>
        </form>
        <div
          className="absolute -bottom-32 right-80 z-[99] rounded-3xl px-4 py-8 text-white text-lg leading-[1.4] text-left w-96 bg-[#FFAC15]"
          style={{
            transform: "translateX(70%)",
            boxShadow: "14px 9px 7.7px 0px #68009940",
          }}
        >
          <div
            className="absolute -top-5 right-14"
            style={{
              width: 0,
              height: 0,
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderTop: "30px solid #FFAC15",
              transform: "rotate(320deg)",
            }}
          />
          {t("page.contact.bubble")}
        </div>
      </div>
    </div>
  );
}
