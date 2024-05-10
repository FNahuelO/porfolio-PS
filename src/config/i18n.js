// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'

i18n
  .use(XHR) // Agrega el cargador de recursos
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json', // Ruta a tus archivos JSON de traducción
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
