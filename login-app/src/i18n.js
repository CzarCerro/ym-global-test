import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Login": "Login",
      "Don't have an account yet?": "Don't have an account yet?",
      "Change Language": "Change Language",
      "Email": "Email",
      "Password": "Password",
      "Username": "Username",
      "Role": "Role",
      "Sign Up": "Sign Up",
      "User": "User",
      "Manager": "Manager",
      "Name": "Name",
      "Select a role": "Select a role",
      "Submit": "Submit",
      "Close": "Close",
      "Already have an account?": "Already have an account?",
      "Register": "Register",
      "Welcome": "Welcome",
      "Go to manager page": "Go to manager page",
      "Logout": "Logout",
      "Welcome to the manager page": "Welcome to the manager page",
      "Go Back": "Go Back",
    }
  },
  spa: {
    translation: {
      "Login": "Acceso",
      "Don't have an account yet?": "¿Aún no tienes una cuenta?",
      "Change Language": "Cambiar idioma",
      "Email": "Correo electrónico",
      "Password": "Contraseña",
      "Username": "Nombre de usuario",
      "Role": "Papel",
      "Sign Up": "Inscribirse",
      "User": "Usuario",
      "Manager": "Gerente",
      "Name": "Nombre",
      "Select a role": "Seleccione un rol",
      "Submit": "Entregar",
      "Close": "Cerca",
      "Already have an account?": "¿Ya tienes una cuenta?",
      "Register": "Registro",
      "Welcome": "Bienvenida",
      "Go to manager page": "Ir a la página del administrador",
      "Logout": "Cerrar sesión",
      "Welcome to the manager page": "Bienvenido a la página del administrador",
      "Go Back": "Regresa",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;