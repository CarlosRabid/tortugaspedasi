import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: {
            "Please Log in Below": "Please Log in Below",
            "User Name": "User Name",
            "Password": "Password",
            "Login": "Login",
            "Home": "Home",
            "Form": "Form",
            "Spreadsheet": "Spreadsheet",
            "Analytics": "Analytics",
            "TORTUGA WATCH FORM": "TORTUGA WATCH FORM",
            "Shift": "Shift",
            "First Name": "First Name",
            "Last Name": "Last Name",
            "Date": "Date",
            "Observation": "Observation",
            "Time": "Time",
            "Location": "Location",
            "Comments": "Comments",
            "Turtle Information": "Turtle Information",
            "Species": "Species",
            "Gender": "Gender",
            "Female": "Female",
            "Male": "Male",
            "Condition": "Condition",
            "Condition & Stage": "Condition & Stage",
            "Dimensions": "Dimensions",
            "Plain": "Plain",
            "Curve": "Curve",
            "Length": "Length",
            "Width": "Width",
            "Markings": "Markings",
            "Right Side": "Right Side",
            "Left Side": "Left Side",
            "Submit Form": "Submit Form",
            "Search": "Search"
        }
    },
    es: {
        translation: {
            "Please Log in Below": "Por favor inicie sesión",
            "User Name": "Usuario",
            "Password": "Contraseña",
            "Login": "Entrar",
            "Home": "Panel",
            "Form": "Formulario",
            "Spreadsheet": "Actualización",
            "Analytics": "Analítica",
            "TORTUGA WATCH FORM": "FORMULARIO AVISTAMIENTO DE TORTUGAS",
            "Shift": "Turno",
            "First Name": "Primer Nombre",
            "Last Name": "Apellido",
            "Date": "Fecha patrullaje",
            "Observation": "Observación",
            "Time": "Hora",
            "Location": "Locación",
            "Comments": "Comentarios",
            "Turtle Information": "Información de la Tortuga",
            "Species": "Especie",
            "Gender": "Género",
            "Female": "Femenino",
            "Male": "Masculino",
            "Condition": "Condición",
            "Condition & Stage": "Condición & estado",
            "Dimensions": "Medidas",
            "Plain": "Plana",
            "Curve": "Curva",
            "Length": "Largo",
            "Width": "Ancho",
            "Markings": "Marcas",
            "Right Side": "Lado Derecho",
            "Left Side": "Lado Izquierdo",
            "Submit Form": "Enviar Formulario",
            "Search": "Búsqueda"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;