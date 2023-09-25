// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Welcome: 'Welcome',
      Hello: 'Hello',
      BackToDashboard: 'Go Back To Dashboard',
      MessageCenter: 'Message Center',
      Save: 'Save',
      Cancel: 'Cancel',
      Reset: 'Reset',
      FormSavedMessage: 'Form Saved successfully',
      Search: 'Search'
      // Add more key-value pairs for translation
    }
  },
  es: {
    translation: {
      Welcome: 'Bienvenido',
      Hello: 'Hola',
      BackToDashboard: 'Volver al panel',
      MessageCenter: 'Centro de mensajes',
      Save: 'Ahorrar',
      Cancel: 'Cancelar',
      Reset: 'Reiniciar',
      FormSavedMessage: 'Formulario guardado exitosamente',
      Search:'Search'
      // Add more key-value pairs for translation
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Set the initial language
  interpolation: {
    escapeValue: false // React already escapes values, so this is not needed
  }
});

export default i18n;
