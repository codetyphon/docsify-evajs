/*!
 * docsify-evajs
 * v0.1
 * https://github.com/codetyphon/docsify-evajs
 * (c) 2020-2021 codetyphon <codetyphon@outlook.com>
 * MIT license
 */
!
  function () {
    "use strict";
    window.DocsifyCopyCodePlugin = {
      init: function () {
        return function (o, e) {
          o.ready(function () {
            console.warn("evasj")
          })
        }
      }
    },
      window.$docsify = window.$docsify || {},
      window.$docsify.plugins = [function (hook, vm) {
        console.log('?', hook, vm)
        const jsarr = []
        hook.doneEach(function (content) {
          const codes = Array.apply(null, document.querySelectorAll('code.lang-evajs'))
          console.log(codes)
          for (const key in codes) {
            const code = codes[key];
            const js = code.innerText
            eval(`(()=>{${js}})()`)
          }

          return content
        });
      }].concat(window.$docsify.plugins || [])
  }();
