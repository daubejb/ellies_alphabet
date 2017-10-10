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
    "revision": "8f539ec2516dc260cfdf994926219137"
  },
  {
    "url": "audio/a_pro.mp3",
    "revision": "a204a10c829ceb0f6744e4a778c51588"
  },
  {
    "url": "audio/a_sentance.mp3",
    "revision": "f235832171358e112cbf6a3574a3b68b"
  },
  {
    "url": "audio/A.mp3",
    "revision": "4964588888a965dc2ded6d533e163305"
  },
  {
    "url": "audio/b_pro.mp3",
    "revision": "7972143dc4c653a311fb047e3871562f"
  },
  {
    "url": "audio/b_sentance.mp3",
    "revision": "cf48222caf33e64bd05fe528525da8fb"
  },
  {
    "url": "audio/B.mp3",
    "revision": "f1924686135cdbc6f7c3461061aee921"
  },
  {
    "url": "audio/c_pro.mp3",
    "revision": "ec8671339cc67ffa373bd8d32c020718"
  },
  {
    "url": "audio/c_sentance.mp3",
    "revision": "d3ec53dd95e0542dedcc1d4a17bc1b44"
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
    "url": "audio/d_pro.mp3",
    "revision": "41dec510c73f419cbdc0712c37f777e7"
  },
  {
    "url": "audio/d_sentance.mp3",
    "revision": "acd241a9056dfc97853ce9fc4f560194"
  },
  {
    "url": "audio/D.mp3",
    "revision": "3b312396c21775a835ae9e349955c590"
  },
  {
    "url": "audio/e_pro.mp3",
    "revision": "e2af4b12e945b3c7e2d8f46a112287d3"
  },
  {
    "url": "audio/e_sentance.mp3",
    "revision": "4548adcd12eee8eda4f8c4dd4b384918"
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
    "url": "audio/f_pro.mp3",
    "revision": "f849a9638a213e06c6608a23bc8bb3c7"
  },
  {
    "url": "audio/f_sentance.mp3",
    "revision": "97fa24517d072d8e7b8caf95a2a92e18"
  },
  {
    "url": "audio/F.mp3",
    "revision": "632a3e6c9d2303e342a397ef8db32e7d"
  },
  {
    "url": "audio/g_pro.mp3",
    "revision": "dce2a931ce27fb543982e4d33b9ab7fc"
  },
  {
    "url": "audio/g_sentance.mp3",
    "revision": "8d0a752c94e51a8d27013a3260e2a932"
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
    "url": "audio/h_pro.mp3",
    "revision": "06ecc2813091fe1a03e072c00d1123b9"
  },
  {
    "url": "audio/h_sentance.mp3",
    "revision": "df471c6453fa3def2fc440b3a2626137"
  },
  {
    "url": "audio/H.mp3",
    "revision": "7351d79c7b57739999b3c1c937b29519"
  },
  {
    "url": "audio/i_pro.mp3",
    "revision": "7993aa9977ba7c55cf1f1e667bd6666b"
  },
  {
    "url": "audio/i_sentance.mp3",
    "revision": "2a6a29ea4a11c064851026004970e6c8"
  },
  {
    "url": "audio/I.mp3",
    "revision": "9d76658c8682797cd78825c18e03f781"
  },
  {
    "url": "audio/j_pro.mp3",
    "revision": "8b248a934ca394047ef3397fa240bae9"
  },
  {
    "url": "audio/j_sentance.mp3",
    "revision": "97d7f779a98ee086ca8b669f88f6d75d"
  },
  {
    "url": "audio/J.mp3",
    "revision": "e17a4629743c59a1b7369b7263eb02fe"
  },
  {
    "url": "audio/k_pro.mp3",
    "revision": "8173f90e13f5b2442168f2bd7c8ea891"
  },
  {
    "url": "audio/k_sentance.mp3",
    "revision": "2d7b499ce24b3218bcb9e1d44fec50cf"
  },
  {
    "url": "audio/K.mp3",
    "revision": "2992d0cc0e1ee0e066eca223c6af76b4"
  },
  {
    "url": "audio/l_pro.mp3",
    "revision": "6f0473831c53516677663a1d5a228ca9"
  },
  {
    "url": "audio/l_sentance.mp3",
    "revision": "a09bad1f514f84ebd06003e172c23123"
  },
  {
    "url": "audio/L.mp3",
    "revision": "947c84131915ba87c169cfbbc3d556d5"
  },
  {
    "url": "audio/m_pro.mp3",
    "revision": "6bad1b5a95a0aa0a70ccee280a4cb268"
  },
  {
    "url": "audio/m_sentance.mp3",
    "revision": "ba81e87be1124849a64959978ccb3319"
  },
  {
    "url": "audio/M.mp3",
    "revision": "65a7ec7fe635f29fa38fdd43122cbb3e"
  },
  {
    "url": "audio/n_pro.mp3",
    "revision": "7549864c10e9c0322323620375b87cf4"
  },
  {
    "url": "audio/n_sentance.mp3",
    "revision": "dc498bb76d2f51053e13c6d192e6fff1"
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
    "url": "audio/o_pro.mp3",
    "revision": "2c7dad7f53ad5e9915e7be87046cea88"
  },
  {
    "url": "audio/o_sentance.mp3",
    "revision": "4790b06d2987d5cc47c9c3a11d498bea"
  },
  {
    "url": "audio/O.mp3",
    "revision": "927e8bd9170c636dd9ea23605e2fc0bb"
  },
  {
    "url": "audio/p_pro.mp3",
    "revision": "85205b8f4253509d46de3fb2c0aa6b70"
  },
  {
    "url": "audio/p_sentance.mp3",
    "revision": "cfd7df5239bdbaae8caa1c10dfdf63b6"
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
    "url": "audio/q_pro.mp3",
    "revision": "537c469babdfb285828baf0d1b68e89c"
  },
  {
    "url": "audio/q_sentance.mp3",
    "revision": "55898deb519d1470ee684ab37c70cecc"
  },
  {
    "url": "audio/Q.mp3",
    "revision": "ffcc6509281393f73fbf4cc4a7de20d4"
  },
  {
    "url": "audio/r_pro.mp3",
    "revision": "0a193941b5ae20b9e98c16e165a98d18"
  },
  {
    "url": "audio/r_sentance.mp3",
    "revision": "f8c148c786ea6876fb45036cb0dad2a3"
  },
  {
    "url": "audio/R.mp3",
    "revision": "f8539668b4fe7140766cfb65ae934793"
  },
  {
    "url": "audio/s_pro.mp3",
    "revision": "e3dd49883785adeb6fad9a008b47694e"
  },
  {
    "url": "audio/s_sentance.mp3",
    "revision": "ac3d50f34440ceab391a8c3f48276e84"
  },
  {
    "url": "audio/S.mp3",
    "revision": "b80d9b79fdb8e6c226fbb78f463939e5"
  },
  {
    "url": "audio/t_pro.mp3",
    "revision": "8983d1817c9068bf160bfd2710a9607b"
  },
  {
    "url": "audio/t_sentance.mp3",
    "revision": "f7d22d6805cab15bef30d11aea30e44a"
  },
  {
    "url": "audio/T.mp3",
    "revision": "876e1956dc5c0e29c673be8641890c1e"
  },
  {
    "url": "audio/u_pro.mp3",
    "revision": "ad1f6593ffcb074fbc7f6989ed55905e"
  },
  {
    "url": "audio/u_sentance.mp3",
    "revision": "8938e8e1b4b02cce49ece980419bb085"
  },
  {
    "url": "audio/U.mp3",
    "revision": "120a563ea225764fa4c67f91b7658faf"
  },
  {
    "url": "audio/v_pro.mp3",
    "revision": "d34e5f47afec13101908c04c62161d97"
  },
  {
    "url": "audio/v_sentance.mp3",
    "revision": "ed5a9f9d020d6f5a10dba8c7001a8f83"
  },
  {
    "url": "audio/V.mp3",
    "revision": "642630af5237741aac455cdf83d457dd"
  },
  {
    "url": "audio/w_pro.mp3",
    "revision": "a170b99cc23242c70ed571cc4b451d27"
  },
  {
    "url": "audio/w_sentance.mp3",
    "revision": "35a946d7213c4ecabe7d930df5d493e6"
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
    "url": "audio/x_pro.mp3",
    "revision": "66fae80700cc0d122fa860f475796968"
  },
  {
    "url": "audio/x_sentance.mp3",
    "revision": "90169adcba7e59e8e95aba027b9f64a9"
  },
  {
    "url": "audio/X.mp3",
    "revision": "4cea3126be2c0575f8b35ec909dc803e"
  },
  {
    "url": "audio/y_pro.mp3",
    "revision": "2709b0c2a98783d4273c108bc4ccb979"
  },
  {
    "url": "audio/y_sentance.mp3",
    "revision": "6c36123909eec316ac4cca19a0266a8f"
  },
  {
    "url": "audio/Y.mp3",
    "revision": "0e6c25beee5bbf12ad9b775bb8bfdd0e"
  },
  {
    "url": "audio/z_pro.mp3",
    "revision": "509a99b71835c4a61cb1508728ae62e3"
  },
  {
    "url": "audio/z_sentance.mp3",
    "revision": "d62d761e814c7071e6477936e2df4f60"
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
    "revision": "ddca075c555dbb5d98f1ba4e477dcbdf"
  },
  {
    "url": "daube-header-fixed-compiled.js",
    "revision": "967e05dc672393ca3f43b1c48e9cb692"
  },
  {
    "url": "daube-main-container-compiled.js",
    "revision": "1b6c401de156bde4cdbc70f9957f07a2"
  },
  {
    "url": "daube-modal-compiled.js",
    "revision": "f3b45bbc96b480c1d51f14ca38fa4ecc"
  },
  {
    "url": "images/apple.png",
    "revision": "86cab9cd2c3c6136cb9eaf17cba6c786"
  },
  {
    "url": "images/bananas.png",
    "revision": "fdd9b982b093c0d148cf3fa504f3de9c"
  },
  {
    "url": "images/carrots.png",
    "revision": "9985a0ec68e3cfead7cd1fb581a456a9"
  },
  {
    "url": "images/daubedesign.ico",
    "revision": "24512db0081f46a91b8fdce36c155669"
  },
  {
    "url": "images/dog.png",
    "revision": "55c5121ea58119a4d033ddd1a2d547b6"
  },
  {
    "url": "images/elephant.png",
    "revision": "6dff63cc0a646d6c217647b3b2862d0b"
  },
  {
    "url": "images/frog.png",
    "revision": "140a259a554ab216ff98f0c1f6902176"
  },
  {
    "url": "images/giraffe.png",
    "revision": "de12d5f83703abb776cbdf548ff3897b"
  },
  {
    "url": "images/hat.png",
    "revision": "911a7063c0a6958d52ae519f31750f51"
  },
  {
    "url": "images/ice_cream_cone.png",
    "revision": "0485d16974dd3f70ddb3ba02ba9682d4"
  },
  {
    "url": "images/jar.png",
    "revision": "170d9eb3e76de476661ea87ab8aff7d1"
  },
  {
    "url": "images/key.png",
    "revision": "ad2fb3a02d88c3ba5f2c5b3c2820a433"
  },
  {
    "url": "images/light_bulb.png",
    "revision": "af9ec8df5e2b2038ec47f7485b10d64c"
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
    "url": "images/monkey.png",
    "revision": "44305fc933b17f37308d56fcdc72e75c"
  },
  {
    "url": "images/napkins.png",
    "revision": "873b97c589395bab393f370608634bb6"
  },
  {
    "url": "images/owl.png",
    "revision": "9681b898497bab65f8ee04ae25524f57"
  },
  {
    "url": "images/pencil.png",
    "revision": "39a86e17c7d48e79061ecae1071d56f0"
  },
  {
    "url": "images/queen.png",
    "revision": "2035a21d65b92ed5cc5ff112beb243ab"
  },
  {
    "url": "images/roses.png",
    "revision": "6fe09ddd99482ebf17913b4a92187628"
  },
  {
    "url": "images/salad.png",
    "revision": "3a413a1fc2ce789a025a192f3fb78ec0"
  },
  {
    "url": "images/turtle.png",
    "revision": "a068eac929aad257391e22db4b3b1012"
  },
  {
    "url": "images/umbrella.png",
    "revision": "43fd2802a28ed08c547e85672abe74dd"
  },
  {
    "url": "images/vase.png",
    "revision": "398b28aa8c9fa3cbaf872cbfdbb10d18"
  },
  {
    "url": "images/watermelon.png",
    "revision": "2c9e30e82144e8f78ce10966c91a1d7c"
  },
  {
    "url": "images/xylophone.png",
    "revision": "44013d8a567194cf0ee7d5e043fecd0c"
  },
  {
    "url": "images/yarn.png",
    "revision": "2363ceca1968787ffb49a64f2275d443"
  },
  {
    "url": "images/zebra.png",
    "revision": "9bdc33533b6b1919b3c3ae639bdda9f6"
  },
  {
    "url": "index.html",
    "revision": "e8af51b279d2d37cb4f09eadc7146a60"
  },
  {
    "url": "manifest.json",
    "revision": "eae91fbc85ce5f1af0d26f23699f3f1b"
  },
  {
    "url": "webcomponents-hi-ce.js",
    "revision": "bbf0111331ec4db7704caea0f6fcd3d9"
  },
  {
    "url": "webcomponents-hi-sd-ce.js",
    "revision": "a39a1b47d79e9775f6498d7e4a143936"
  },
  {
    "url": "webcomponents-hi.js",
    "revision": "ff02acd4dd990583b797b3691fa032a2"
  },
  {
    "url": "webcomponents-lite.js",
    "revision": "5515ef9284a196519c149cd12334a8b5"
  },
  {
    "url": "webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "webcomponents-sd-ce.js",
    "revision": "f4a43f3a971080853ecbeb06cf3f61b0"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
