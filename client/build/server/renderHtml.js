'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manifest = require('../../dist/manifest.json');

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (html, preloadedState, bundles) {
  var scripts = bundles.filter(function (bundle) {
    return bundle.file.endsWith('.js');
  });

  return '\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <link rel=\'stylesheet\' href=\'/dist/' + _manifest2.default['app.css'] + '\' />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src=\'/dist/' + _manifest2.default['vendor.js'] + '\'></script>\n        <script src=\'/dist/' + _manifest2.default['app.js'] + '\'></script>\n        ' + scripts.map(function (bundle) {
    return '<script src="/dist/' + bundle.file + '"></script>';
  }).join('\n') + '\n      </body>\n    </html>\n  ';
};