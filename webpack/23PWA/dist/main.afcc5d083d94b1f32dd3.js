(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hello, this is dell'); //判断浏览器是否支持PWA的serviceWorker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('service-worker registed');
    }).catch(err => {
      console.log('service-worker registed error');
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.afcc5d083d94b1f32dd3.js.map