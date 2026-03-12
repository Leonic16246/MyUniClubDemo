import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import Layout from './Shared/layout';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) => 
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ).then((module) => {
            if (module.default.layout === undefined) {
                module.default.layout = (page) => <Layout>{page}</Layout>;
            }
            return module;
        }),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: 'red',
        showSpinner: true,
    },
    title: title => `${title} - MyUniClubDemo`
});