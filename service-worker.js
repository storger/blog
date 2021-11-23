/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "694edf00ec9d2a04a020fa44dc9f186d"
  },
  {
    "url": "assets/css/0.styles.37525a79.css",
    "revision": "5b0a79980ae351b9f455d798c0e0eecd"
  },
  {
    "url": "assets/img/default-skin.b257fa9c.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "assets/img/iconfont.c72e426b.svg",
    "revision": "c72e426b70ea73c3ee394bce277544e2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.93e346cb.js",
    "revision": "6884fc396e339ea1e938b553face42c6"
  },
  {
    "url": "assets/js/10.50f1bcb9.js",
    "revision": "273e9eddad8e0b1f51c8aca5587a2ccd"
  },
  {
    "url": "assets/js/11.a9df5a27.js",
    "revision": "a4d33381ae29cfa95f9f917cfbfbabbb"
  },
  {
    "url": "assets/js/12.be06d2f0.js",
    "revision": "321c66be67fb294f20f6e6a1fe3327d0"
  },
  {
    "url": "assets/js/13.7e31e159.js",
    "revision": "5edf9b56c4bf702cccc59eb9b921c408"
  },
  {
    "url": "assets/js/14.ba39db5c.js",
    "revision": "ce18f5466b7898b255d025b6729b5e55"
  },
  {
    "url": "assets/js/15.9b6ccdb6.js",
    "revision": "44de9e9c58377c5860a7e9ae39c5803a"
  },
  {
    "url": "assets/js/16.96ba9b96.js",
    "revision": "fe531a47cc00fb93bc5919e460e8f5bf"
  },
  {
    "url": "assets/js/17.6bc2ed74.js",
    "revision": "57a8c0accc2edb47e8bf9a0a4b930124"
  },
  {
    "url": "assets/js/18.5863a37f.js",
    "revision": "414bd9079b1dad601c46c97965c4e299"
  },
  {
    "url": "assets/js/19.c4a51bfb.js",
    "revision": "ac10a1d79ec897830df1cca3d5e4138e"
  },
  {
    "url": "assets/js/2.591bd700.js",
    "revision": "7cddbd6275639777b8cb41bb209d1fb0"
  },
  {
    "url": "assets/js/20.8e5c38db.js",
    "revision": "61263a6b7451c4197bb7a374e8eedc4e"
  },
  {
    "url": "assets/js/21.14a077fa.js",
    "revision": "c2436bbe9e8b6d8b8460f06e8790ca6e"
  },
  {
    "url": "assets/js/22.8319269d.js",
    "revision": "d472d47be3a3355f51fd2adb769e4262"
  },
  {
    "url": "assets/js/23.82e8f913.js",
    "revision": "aa0c8cd1b8619ad778c440bdfa7ab21c"
  },
  {
    "url": "assets/js/24.f92e9ed8.js",
    "revision": "96ca5d9a4a919e0cccc0cb5f822ff5a6"
  },
  {
    "url": "assets/js/25.7a4c3ea9.js",
    "revision": "b09b33cc5e257ee3eefef3785e37694b"
  },
  {
    "url": "assets/js/26.f63e4b38.js",
    "revision": "02b1a16e1e92d0f2c8ad4b6026a53481"
  },
  {
    "url": "assets/js/27.72ac7147.js",
    "revision": "789e2c14d61e81f4f4cd3ca4b756769c"
  },
  {
    "url": "assets/js/4.1b843715.js",
    "revision": "91ed82865c88b8b2a1ce7a5b4d05901c"
  },
  {
    "url": "assets/js/5.d938c5bc.js",
    "revision": "72c4567d0be2ad9cc24609c23aea94ef"
  },
  {
    "url": "assets/js/6.fceab7c1.js",
    "revision": "a66d8d8e2197461845b54207b9a45820"
  },
  {
    "url": "assets/js/7.7024e7ac.js",
    "revision": "f63086f8d74b25e784f6545377cb98c9"
  },
  {
    "url": "assets/js/8.aa684654.js",
    "revision": "aa90b8afe908d60bba0f33086e59ddeb"
  },
  {
    "url": "assets/js/9.45bf253a.js",
    "revision": "b2b71e47d6ae3cdd7e5a801dbc635eee"
  },
  {
    "url": "assets/js/app.2ffb31ea.js",
    "revision": "3dc45a6de14214106b9075976f00568e"
  },
  {
    "url": "category/index.html",
    "revision": "65ee726fb6ab27d11c863b40c572b13f"
  },
  {
    "url": "category/教程.html",
    "revision": "f712cf4197f9b580681b91e7f7200bbd"
  },
  {
    "url": "category/记录.html",
    "revision": "3e1daa8cfcf448058082447df245ea27"
  },
  {
    "url": "category/资源.html",
    "revision": "fe6e42cd89cc3ba205515fc0c7d78adf"
  },
  {
    "url": "course/parcel-0.html",
    "revision": "12d9031200e36107f0c49bea24ccd225"
  },
  {
    "url": "course/parcel-vue.html",
    "revision": "95bc38a7c4bb26a92bf9cb0db90d74bb"
  },
  {
    "url": "images/default.jpeg",
    "revision": "a8f3b5a1a4d562cf16553e6b50073959"
  },
  {
    "url": "images/head.png",
    "revision": "aedca5369f3969d8bab9bfad27863109"
  },
  {
    "url": "images/loading.gif",
    "revision": "f910b053d6b7ad7d8c5ee2711d09ba2d"
  },
  {
    "url": "images/logo.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "8a819fd2ffef8848e3f6f3ff1f43703f"
  },
  {
    "url": "resource/Git常用命令.html",
    "revision": "72cb13df297e94aa3dbc1a7b542624d2"
  },
  {
    "url": "resource/javascript常用设计模式.html",
    "revision": "c6d841265aefff011ebee8c47c2abb62"
  },
  {
    "url": "resource/res-2018.html",
    "revision": "3cc232b0d7cd1c6aed51457b028efe3a"
  },
  {
    "url": "resource/vue3快速上手.html",
    "revision": "7824b17f470090ac59d682aaecfc8ea7"
  },
  {
    "url": "resource/welfare.html",
    "revision": "5a20e5c0e6367bb27d0472366dd3cce0"
  },
  {
    "url": "resource/前端跨页面通信方式.html",
    "revision": "c6c53306a1d5bf24c77dc408eaf9658e"
  },
  {
    "url": "resource/文件上传和下载.html",
    "revision": "103945159239287c5d5722fd9a0e93b9"
  },
  {
    "url": "tag/Git.html",
    "revision": "d213a4b705969779ef2119f53fa79de8"
  },
  {
    "url": "tag/html5.html",
    "revision": "e39d7ce08d5fec89edce0f235cc82b8b"
  },
  {
    "url": "tag/index.html",
    "revision": "894e3de2e376a6f4e688b7f65aef74a0"
  },
  {
    "url": "tag/js.html",
    "revision": "38c4df4c26bdeab5fa56079c2b3366cd"
  },
  {
    "url": "tag/parcel.html",
    "revision": "aad013594b92490d54c4b62171260ba5"
  },
  {
    "url": "tag/Vue.html",
    "revision": "b37bf5e73430e6ab451b66b645e4674f"
  },
  {
    "url": "tag/资源.html",
    "revision": "476b9b2108151be3ab3fe16e524a14f0"
  },
  {
    "url": "timeLine/index.html",
    "revision": "0e958daebd25cbd1f4af010a14eb244e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
