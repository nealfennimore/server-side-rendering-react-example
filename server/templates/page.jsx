import serialize from 'serialize-javascript';
import head from './head';
import footer from './footer';

export default function page({
    content='',
    initialState={},
    router
}) {
    return `
        <!doctype html>
        <html>
            ${head({initialState, router})}
            <body>
                <div id="app">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${ serialize(initialState, {isJSON: true}) }
                </script>
                ${footer}
            </body>
        </html>
    `;
}