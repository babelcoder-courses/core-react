import manifest from '../../dist/manifest.json'

export default (html, preloadedState, bundles) => {
  const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'))

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel='stylesheet' href='/dist/${manifest['app.css']}' />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src='/dist/${manifest['vendor.js']}'></script>
        <script src='/dist/${manifest['app.js']}'></script>
        ${scripts
          .map(bundle => {
            return `<script src="/dist/${bundle.file}"></script>`
          })
          .join('\n')}
      </body>
    </html>
  `
}
