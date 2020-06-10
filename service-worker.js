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
    "revision": "9796f24df6f43c7502d0b5e4b9052b22"
  },
  {
    "url": "assets/css/0.styles.c9f21e95.css",
    "revision": "694840e8856a148a1f63683fb1cf5602"
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
    "url": "assets/js/1.1b96fdb4.js",
    "revision": "7ee08eaa5f3cc1f2291bbf7515496cf1"
  },
  {
    "url": "assets/js/10.a8da2228.js",
    "revision": "bc5915f471f521bc5fef7ecf6ff1811b"
  },
  {
    "url": "assets/js/11.4a93d8d3.js",
    "revision": "9256be68257d75670cebbb334a55b79c"
  },
  {
    "url": "assets/js/12.46564315.js",
    "revision": "485dfca60946c9705de3008a7cb81b1a"
  },
  {
    "url": "assets/js/13.eecbefb0.js",
    "revision": "20cb62e1c856138ee109c8578b0dc290"
  },
  {
    "url": "assets/js/14.83549d56.js",
    "revision": "17ab4a449adcd49b4ee0372cb8fab030"
  },
  {
    "url": "assets/js/15.2a205949.js",
    "revision": "332efe66ecb4c078ebd43196d3e597d1"
  },
  {
    "url": "assets/js/16.9d26366c.js",
    "revision": "85bb5bec0645a54c94e5fb1e651634b2"
  },
  {
    "url": "assets/js/17.ba6faebd.js",
    "revision": "1bbcf29fc144b9e5697293d2879b3f34"
  },
  {
    "url": "assets/js/18.8c8d986e.js",
    "revision": "285e3282bc570a499f21260692070ea5"
  },
  {
    "url": "assets/js/19.51609916.js",
    "revision": "b83ea5a70bf4530ff3d17660d955340e"
  },
  {
    "url": "assets/js/2.05093622.js",
    "revision": "dfb8a0a69a7bdde29672cf02b220ce06"
  },
  {
    "url": "assets/js/20.1fd6d06d.js",
    "revision": "8e58b4f8140ceb0bd49e76d76e80f1b8"
  },
  {
    "url": "assets/js/21.7dd91d4b.js",
    "revision": "a8bfd09453e0e129c29662e69dc3e879"
  },
  {
    "url": "assets/js/22.28b6a333.js",
    "revision": "07f22b64c364b795b6a280ab3dc717e6"
  },
  {
    "url": "assets/js/23.b84a01e8.js",
    "revision": "a6c026c968a9acf54d0742cca74302ee"
  },
  {
    "url": "assets/js/24.5d8efd0c.js",
    "revision": "eba671d7a70622607312cad6b92e036b"
  },
  {
    "url": "assets/js/25.04ded326.js",
    "revision": "792746a522a39d304867ab9c6077f888"
  },
  {
    "url": "assets/js/26.8a203e75.js",
    "revision": "05a1bdd8fe9ec5af9d8bec5527d18fc9"
  },
  {
    "url": "assets/js/4.55b607e1.js",
    "revision": "a23c52bfaffae88b0f80b5714ed4b3c2"
  },
  {
    "url": "assets/js/5.f50af701.js",
    "revision": "a975ae2acbc18a983029e8005f19356c"
  },
  {
    "url": "assets/js/6.29b91af7.js",
    "revision": "182600c8cdabf446db56479dc9797a0a"
  },
  {
    "url": "assets/js/7.cd90cd44.js",
    "revision": "373470b14cbaf6e34b4130f270b82810"
  },
  {
    "url": "assets/js/8.8d9c2e21.js",
    "revision": "32a815ac8b56d4e42bb20b95721e0f11"
  },
  {
    "url": "assets/js/9.0ebfdf96.js",
    "revision": "4e2931e282bd84dfa047e9d408669a53"
  },
  {
    "url": "assets/js/app.0f5e8844.js",
    "revision": "386dbe585b1735b54f2c5d0e74477a69"
  },
  {
    "url": "category/index.html",
    "revision": "8ada801a34c9b44fe1c9264bd77906d2"
  },
  {
    "url": "category/教程.html",
    "revision": "90306514bf548939659f8a6f97947d1d"
  },
  {
    "url": "category/记录.html",
    "revision": "e35c9b4fbc9f968efbaba14975a2d17c"
  },
  {
    "url": "category/资源.html",
    "revision": "76c262c5ce7f904685afd2bdee770526"
  },
  {
    "url": "course/parcel-0.html",
    "revision": "592c48b2ea73cd01ca2bea31c82af649"
  },
  {
    "url": "course/parcel-vue.html",
    "revision": "1cc28943a42a795ddd4d8d69d0754157"
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
    "revision": "6f2aba67afef3931534123f69b60c5c9"
  },
  {
    "url": "resource/javascript常用设计模式.html",
    "revision": "9a8ac9e078eed76072054489ac676cff"
  },
  {
    "url": "resource/res-2018.html",
    "revision": "fd6a34b307a318ce5782ad1d38a4d89f"
  },
  {
    "url": "resource/welfare.html",
    "revision": "da2568fbaab3bc1b893bf3689cab2498"
  },
  {
    "url": "resource/前端跨页面通信方式.html",
    "revision": "fbb84f10bff3375cca3825b90439c251"
  },
  {
    "url": "resource/前端面试-面试官.html",
    "revision": "e5d317a2c0cd8f0def300b99fb2e47d2"
  },
  {
    "url": "resource/文件上传和下载.html",
    "revision": "d04bd271a54281b8ca70ad73c8087111"
  },
  {
    "url": "tag/html5.html",
    "revision": "deb413d380caf7df795fa461068d5650"
  },
  {
    "url": "tag/index.html",
    "revision": "b35fb0bece0da6ffde2468186c0336a6"
  },
  {
    "url": "tag/js.html",
    "revision": "4b146ec772be1d0647ad392951e7c3b5"
  },
  {
    "url": "tag/parcel.html",
    "revision": "385d1bb677edaeb1c0c52a32c921f519"
  },
  {
    "url": "tag/资源.html",
    "revision": "0c582443ec787c13a01ff2abc0ed0746"
  },
  {
    "url": "tag/面试.html",
    "revision": "1c2379fdb8307cac7f0875204abf7e46"
  },
  {
    "url": "timeLine/index.html",
    "revision": "6243d419211e39c62c00f477195b43b3"
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
