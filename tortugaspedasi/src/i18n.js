import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: {
            "Please Log in Below": "Please Log in Below",
            "User Name": "User Name",
            "Password": "Password",
            "Login": "Login",
            "Logout":"Logout",
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
            "Select Species":"Select Species",
            "Gender": "Gender",
            "Female": "Female",
            "Dimensions in cms":"Dimensions in cms",
            "Male": "Male",
            "Found Alive": "Found Alive",
            "Condition & Stage": "Condition & Stage",
            "Dimensions": "Dimensions",
            "Plain": "Plain",
            "Curve": "Curve",
            "Length": "Length",
            "Width": "Width",
            "Marks on the shell on the shell": "Marks on the shell",
            "Right Side": "Right side",
            "Left Side": "Left side",
            "Nest Information":"Nest Information",
            "Submit Form": "Submit Form",
            "Search": "Search"
        }
    },
    es: {
        translation: {
            "Please Log in Below": "Por favor inicie sesión",
            "User Name": "Usuario",
            "Password": "Contraseña",
            "Login": "Ingresar",
            "Logout":"Cerrar Sesión",
            "Home": "Panel",
            "Form": "Formulario",
            "Spreadsheet": "Actualización",
            "Analytics": "Analítica",
            "TORTUGA WATCH FORM": "FORMULARIO DE AVISTAMIENTO DE TORTUGAS",
            "Shift": "Turno",
            "First Name": "Primer Nombre",
            "Last Name": "Apellido",
            "Date": "Fecha patrullaje",
            "Observation": "Observación",
            "Time": "Hora",
            "Location": "Locación",
            "Comments": "Comentarios",
            "Turtle Information": "Información de la Tortuga",
            "Select Species":"Seleccionar especie",
            "Gender": "Género",
            "Female": "Hembra",
            "Male": "Macho",
            "Found Alive": "Encontrada viva",
            "Condition & Stage": "Condición & estado",
            "Dimensions in cms":"Dimensiones en cm",
            "Plain": "Plana",
            "Curve": "Curva",
            "Length": "Largo",
            "Width": "Ancho",
            "Marks on the shell": "Marcas en el caparazón",
            "Right Side": "Lado derecho",
            "Left Side": "Lado izquierdo",
            "Nest Information":"Información del Nido",
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