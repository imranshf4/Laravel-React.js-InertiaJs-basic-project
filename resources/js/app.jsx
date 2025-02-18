import './bootstrap';
import "../css/app.css";
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from './Layouts/Layout';

createInertiaApp({
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
      let page = pages[`./Pages/${name}.jsx`];
      page.default.layout = page.default.layout; // Ensure that Layout wraps the page
      return page;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
    progress: {
      delay: 150,
      color: '#29d',
      includeCSS: true,
      showSpinner: false,
    },
  });
  
