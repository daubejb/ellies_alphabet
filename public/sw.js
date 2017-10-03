importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "alphabet-home-compiled.js",
    "revision": "af6673fdc732447a0bc738aac1c35685"
  },
  {
    "url": "audio/A.mp3",
    "revision": "4964588888a965dc2ded6d533e163305"
  },
  {
    "url": "audio/B.mp3",
    "revision": "f1924686135cdbc6f7c3461061aee921"
  },
  {
    "url": "audio/C.mp3",
    "revision": "33e608b7136143c44c9a8959e8e3576a"
  },
  {
    "url": "audio/Correct.mp3",
    "revision": "76d0e214f09ed16a0514ad3bd432b870"
  },
  {
    "url": "audio/D.mp3",
    "revision": "3b312396c21775a835ae9e349955c590"
  },
  {
    "url": "audio/E.mp3",
    "revision": "4483f116f0a538fc82ebdd4320a30804"
  },
  {
    "url": "audio/Excellent.mp3",
    "revision": "bef98b01a6abb9e349fc8d8286af7a60"
  },
  {
    "url": "audio/F.mp3",
    "revision": "632a3e6c9d2303e342a397ef8db32e7d"
  },
  {
    "url": "audio/G.mp3",
    "revision": "f479e348f06f5c8af859521675a00069"
  },
  {
    "url": "audio/Good_job.mp3",
    "revision": "57d4d3a7398d5ad1e7f31604adc0f6ac"
  },
  {
    "url": "audio/H.mp3",
    "revision": "7351d79c7b57739999b3c1c937b29519"
  },
  {
    "url": "audio/I.mp3",
    "revision": "9d76658c8682797cd78825c18e03f781"
  },
  {
    "url": "audio/J.mp3",
    "revision": "e17a4629743c59a1b7369b7263eb02fe"
  },
  {
    "url": "audio/K.mp3",
    "revision": "2992d0cc0e1ee0e066eca223c6af76b4"
  },
  {
    "url": "audio/L.mp3",
    "revision": "947c84131915ba87c169cfbbc3d556d5"
  },
  {
    "url": "audio/M.mp3",
    "revision": "65a7ec7fe635f29fa38fdd43122cbb3e"
  },
  {
    "url": "audio/N.mp3",
    "revision": "851c83a2e6f74098ee1fbc9785c288a2"
  },
  {
    "url": "audio/Nice_work.mp3",
    "revision": "61e6885a40f18f6f88949a110feb27a9"
  },
  {
    "url": "audio/O.mp3",
    "revision": "927e8bd9170c636dd9ea23605e2fc0bb"
  },
  {
    "url": "audio/P.mp3",
    "revision": "363fc3dfa28a9a4ab174d336e38745cb"
  },
  {
    "url": "audio/Please_try_again.mp3",
    "revision": "b056ab0ef6aa332d248e3bff94b52d11"
  },
  {
    "url": "audio/Q.mp3",
    "revision": "ffcc6509281393f73fbf4cc4a7de20d4"
  },
  {
    "url": "audio/R.mp3",
    "revision": "f8539668b4fe7140766cfb65ae934793"
  },
  {
    "url": "audio/S.mp3",
    "revision": "b80d9b79fdb8e6c226fbb78f463939e5"
  },
  {
    "url": "audio/T.mp3",
    "revision": "876e1956dc5c0e29c673be8641890c1e"
  },
  {
    "url": "audio/U.mp3",
    "revision": "120a563ea225764fa4c67f91b7658faf"
  },
  {
    "url": "audio/V.mp3",
    "revision": "642630af5237741aac455cdf83d457dd"
  },
  {
    "url": "audio/W.mp3",
    "revision": "4e67da8311b1dfd3263cb130735f35c3"
  },
  {
    "url": "audio/Where_is_the_letter_A.mp3",
    "revision": "8c451e319fbd9a5d92629ae9696090a1"
  },
  {
    "url": "audio/Where_is_the_letter_B.mp3",
    "revision": "0b2bf3c762c333a469641146f56a3d48"
  },
  {
    "url": "audio/Where_is_the_letter_C.mp3",
    "revision": "8e62309461402850ef21830132cd0462"
  },
  {
    "url": "audio/Where_is_the_letter_D.mp3",
    "revision": "d96328294c84329e2d3617ce8a9b42de"
  },
  {
    "url": "audio/Where_is_the_letter_E.mp3",
    "revision": "579f5b0795eac041791e44da31e0997a"
  },
  {
    "url": "audio/Where_is_the_letter_F.mp3",
    "revision": "31ff7ea44debe0d51c71ee1943fda944"
  },
  {
    "url": "audio/Where_is_the_letter_G.mp3",
    "revision": "807a2ec1fb0c054d5990956b032579f8"
  },
  {
    "url": "audio/Where_is_the_letter_H.mp3",
    "revision": "94b253d9a4674e0b6b0bc39775a3865a"
  },
  {
    "url": "audio/Where_is_the_letter_I.mp3",
    "revision": "ba76640a77b3b11fb8517721179d903c"
  },
  {
    "url": "audio/Where_is_the_letter_J.mp3",
    "revision": "9cef4525d72f3266ce1d64b6630bb042"
  },
  {
    "url": "audio/Where_is_the_letter_K.mp3",
    "revision": "60d8d67638a5597e5028e2bb520702fe"
  },
  {
    "url": "audio/Where_is_the_letter_L.mp3",
    "revision": "6e222cfcc251a9db79b022acb28251c1"
  },
  {
    "url": "audio/Where_is_the_letter_M.mp3",
    "revision": "d37952461be3378480faa63144315313"
  },
  {
    "url": "audio/Where_is_the_letter_N.mp3",
    "revision": "957d273e17981c0072b34b0761ded125"
  },
  {
    "url": "audio/Where_is_the_letter_O.mp3",
    "revision": "86babcbcd95609b47f343415d8a106bb"
  },
  {
    "url": "audio/Where_is_the_letter_P.mp3",
    "revision": "24b78b1cd8b594fc701c1b1af5e40cc7"
  },
  {
    "url": "audio/Where_is_the_letter_Q.mp3",
    "revision": "e62b7eaf85eb6bc28306464d9a376b23"
  },
  {
    "url": "audio/Where_is_the_letter_R.mp3",
    "revision": "7bdff8a1185ffd94abf560fa0054eb48"
  },
  {
    "url": "audio/Where_is_the_letter_S.mp3",
    "revision": "3413b183cd519ff326776d7ea3e6f9ef"
  },
  {
    "url": "audio/Where_is_the_letter_T.mp3",
    "revision": "c873acf82794b1336cd437e1c8984d79"
  },
  {
    "url": "audio/Where_is_the_letter_U.mp3",
    "revision": "c3d8fe739834d2fd67224e916886c625"
  },
  {
    "url": "audio/Where_is_the_letter_V.mp3",
    "revision": "0c646474369f97ec25c0e92431e3a4c1"
  },
  {
    "url": "audio/Where_is_the_letter_W.mp3",
    "revision": "6af37ee09a11476bce89178142bbb7de"
  },
  {
    "url": "audio/Where_is_the_letter_X.mp3",
    "revision": "1f8658f769897b2609bf6e04ae6b6256"
  },
  {
    "url": "audio/Where_is_the_letter_Y.mp3",
    "revision": "a4412e09bc100378f02eceaafc31d47a"
  },
  {
    "url": "audio/Where_is_the_letter_Z.mp3",
    "revision": "850ec2c05cc3865dba6d677ea8dcb6fe"
  },
  {
    "url": "audio/X.mp3",
    "revision": "4cea3126be2c0575f8b35ec909dc803e"
  },
  {
    "url": "audio/Y.mp3",
    "revision": "0e6c25beee5bbf12ad9b775bb8bfdd0e"
  },
  {
    "url": "audio/Z.mp3",
    "revision": "7b729155ddfb12095a1abcf4a704d2ae"
  },
  {
    "url": "custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "daube-card-compiled.js",
    "revision": "b3456124a7bcfd4b906143fc39f7560b"
  },
  {
    "url": "daube-header-fixed-compiled.js",
    "revision": "8c9a64189e843a56fe6aa03f2b344c55"
  },
  {
    "url": "daube-main-container-compiled.js",
    "revision": "81ae4ef78a72734503cd7500c4309d02"
  },
  {
    "url": "images/daubedesign.ico",
    "revision": "24512db0081f46a91b8fdce36c155669"
  },
  {
    "url": "images/manifest/daubedesign-144x144.png",
    "revision": "d851bfbbde0c69fd55d2bda6a9029780"
  },
  {
    "url": "images/manifest/daubedesign-192x192.png",
    "revision": "0d48fe25d41ac2525e700253079c77bd"
  },
  {
    "url": "images/manifest/daubedesign-48x48.png",
    "revision": "b3a2ade5ce8c2dde247bd6309e8b28f9"
  },
  {
    "url": "images/manifest/daubedesign-512x512.png",
    "revision": "a9acaf6158ddae45bacbb1fe9a1e2aea"
  },
  {
    "url": "images/manifest/daubedesign-72x72.png",
    "revision": "7d7818d22bb0917954b810ceb36df923"
  },
  {
    "url": "images/manifest/daubedesign-96x96.png",
    "revision": "42c8b57174ff192635100bf0115651d5"
  },
  {
    "url": "index.html",
    "revision": "9986758c2dd71464c429e7819f39d3ec"
  },
  {
    "url": "manifest.json",
    "revision": "572bdbfa3271e246df0b6ef5bc066b2f"
  },
  {
    "url": "webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);