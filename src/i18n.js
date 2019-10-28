import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: {
            "Please Log in Below": "Please Log in Below",
            "User Name": "User Name",
            "Password": "Password",
            "Login": "Login",
            "Logout": "Logout",
            "Home": "Home",
            "Form": "Form",
            "Spreadsheet": "Spreadsheet",
            "Analytics": "Analytics",
            "TORTUGA WATCH FORM": "TORTUGA WATCH FORM",
            "Shift": "Shift",
            "Observer First Name": "Observer First Name",
            "Observer Last Name": "Observer Last Name",
            "First Name": "First Name",
            "Last Name": "Last Name",
            "Date of watch": "Date of watch",
            "Observation": "Observation",
            "Time": "Time",
            "Location": "Location",
            "Comments": "Comments",
            "Observation notes...": "Observation notes...",
            "Turtle Information": "Turtle Information",
            "Select Species": "Select Species",
            "Gender": "Gender",
            "Female": "Female",
            "Measurements in cm": "Measurements in cm",
            "Male": "Male",
            "Found alive": "Found alive",
            "Found dead": "Found dead",
            "Condition & Stage": "Condition & Stage",
            "Dimensions": "Dimensions",
            "Straight measurement": "Straight measurement",
            "Curve measurement": "Curve measurement",
            "Length": "Length",
            "Width": "Width",
            "Marks on the shell on the shell": "Marks on the shell",
            "Right Side": "Right side",
            "Left Side": "Left side",
            "Nest Information":"Nest Information",
            " Submit Form": "Submit Form",
            "Number of eggs":"Number of eggs",
            "Estimated hatching time":"Estimated hatching time",
            "Estimated laying time":"Estimated laying time",
            "Taken to lab":"Taken to lab",
            "Yes":"Yes",
            "Add notes...":"Add notes...",
            "Search": "Search", 
            "Beach":"Beach",
            "Arenal beach":"Arenal beach",
            "El Toro beach":"El Toro beach",
            "Lagarto beach":"Lagarto beach",
            "Create a new observation form.":"Create a new observation form.",
            "Create form":"Create form",
            "Archive":"Archive",
            "Review all available observation forms.":"Review all available observation forms.",
            "View data":"View data",
            "Review data analytics and create charts.":"Review data analytics and create charts.",
            "Analytics":"Analytics",
            "View analytics":"View analytics",
            "Date":"Date",

        }
    },
    es: {
        translation: {
            "Please Log in Below": "Por favor inicie sesión",
            "User Name": "Usuario",
            "Password": "Contraseña",
            "Login": "Ingresar",
            "Logout": "Cerrar Sesión",
            "Home": "Panel",
            "Form": "Formulario",
            "Spreadsheet": "Actualización",
            "Analytics": "Analítica",
            "TORTUGA WATCH FORM": "FORMULARIO DE AVISTAMIENTO DE TORTUGAS",
            "Shift": "Turno",
            "First Name": "Primer Nombre",
            "Observer Last Name": "Apellido del observador",
            "Last Name": "Apellido",
            "Date of watch": "Fecha del avistamiento",
            "Observation": "Observación",
            "Time": "Hora",
            "Location": "Ubicación",
            "Comments": "Comentarios",
            "Observation notes...": "Notas del avistamiento...",
            "Turtle Information": "Información de la Tortuga",
            "Select Species": "Seleccionar especie",
            "Gender": "Género",
            "Female": "Hembra",
            "Male": "Macho",
            "Found alive": "Encontrada viva",
            "Found dead": "Encontrada muerta",
            "Condition & Stage": "Condición & estado",
            "Measurements in cm": "Medidas en cm",
            "Straight measurement": "Medición recta",
            "Curve measurement": "Medición curva",
            "Length": "Largo",
            "Width": "Ancho",
            "Marks on the shell": "Marcas en el caparazón",
            "Right Side": "Lado derecho",
            "Left Side": "Lado izquierdo",
            "Nest Information": "Información del Nido",
            " Submit ": " Enviar ",
            "Number of eggs": "Número de huevos puestos",
            "Estimated laying time": "Tiempo estimado de colocación",
            "Estimated hatching time": "Tiempo estimado de eclosión",
            "Taken to lab": "Llevado al laboratorio",
            "Yes": "Si",
            "Add notes...": "Agregar notas...",
            "Search": "Búsqueda",
            "Beach":"Playa",
            "Arenal beach":"Playa Arenal",
            "El Toro beach":"Playa El Toro",
            "Lagarto beach":"Playa Lagarto",
            "Observer First Name":"Nombre del observador",
            "Create a new observation form.":"Crear un nuevo formulario.",
            "Create form":"Nuevo formulario",
            "Archive":"Archivo",
            "Review all available observation forms.":"Revisar todos los formularios existentes.",
            "View data":"Ver datos",
            "Review data analytics and create charts.":"Revisar el análisis de datos y crear gráficas.",
            "Analytics":"Análisis de datos",
            "View analytics":"Ver el análisis de datos",
            "Date":"Fecha",

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
        },
        fallbackOnEmpty: true
    });

export default i18n;