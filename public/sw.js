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
    "revision": "b6128cace11d621214959cf7bab36576"
  },
  {
    "url": "audio/a_sentance.mp3",
    "revision": "88d459b8052230167b8bd9e3aab2135f"
  },
  {
    "url": "audio/A.mp3",
    "revision": "4964588888a965dc2ded6d533e163305"
  },
  {
    "url": "audio/b_sentance.mp3",
    "revision": "14956de0757750ea950fad1d6481f5c4"
  },
  {
    "url": "audio/B.mp3",
    "revision": "f1924686135cdbc6f7c3461061aee921"
  },
  {
    "url": "audio/c_sentance.mp3",
    "revision": "f0514f59183471a38f9afb6d6d7ec407"
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
    "url": "audio/d_sentance.mp3",
    "revision": "150b758f2740fa2251c13e55d373d88c"
  },
  {
    "url": "audio/D.mp3",
    "revision": "3b312396c21775a835ae9e349955c590"
  },
  {
    "url": "audio/e_sentance.mp3",
    "revision": "80e4b93d24d19797249457cfca1b692d"
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
    "url": "audio/f_sentance.mp3",
    "revision": "012bdb673a1e7fb6e894f924f1a9e217"
  },
  {
    "url": "audio/F.mp3",
    "revision": "632a3e6c9d2303e342a397ef8db32e7d"
  },
  {
    "url": "audio/g_sentance.mp3",
    "revision": "23686839c4fdb50eec0bc9e0e5196f3c"
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
    "url": "audio/h_sentance.mp3",
    "revision": "4c874c53e67dd0f77f8d4255577b711f"
  },
  {
    "url": "audio/H.mp3",
    "revision": "7351d79c7b57739999b3c1c937b29519"
  },
  {
    "url": "audio/i_sentance.mp3",
    "revision": "3d0d7d089c6041286c3192fb15a2c251"
  },
  {
    "url": "audio/I.mp3",
    "revision": "9d76658c8682797cd78825c18e03f781"
  },
  {
    "url": "audio/j_sentance.mp3",
    "revision": "4727fec07ffa305afb51c9c63e1c7555"
  },
  {
    "url": "audio/J.mp3",
    "revision": "e17a4629743c59a1b7369b7263eb02fe"
  },
  {
    "url": "audio/k_sentance.mp3",
    "revision": "77154f8fd2741caeb1f2089e9af6ea13"
  },
  {
    "url": "audio/K.mp3",
    "revision": "2992d0cc0e1ee0e066eca223c6af76b4"
  },
  {
    "url": "audio/l_sentance.mp3",
    "revision": "c88a9dd164bc8b509ae03278230f64b9"
  },
  {
    "url": "audio/L.mp3",
    "revision": "947c84131915ba87c169cfbbc3d556d5"
  },
  {
    "url": "audio/m_sentance.mp3",
    "revision": "768693ecea2eb84dfebf00d4219c512f"
  },
  {
    "url": "audio/M.mp3",
    "revision": "65a7ec7fe635f29fa38fdd43122cbb3e"
  },
  {
    "url": "audio/n_sentance.mp3",
    "revision": "f38bb8391905b7d7adeb276b0e6e3aae"
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
    "url": "audio/o_sentance.mp3",
    "revision": "2b21238cc75c4ac6813a8919e990a617"
  },
  {
    "url": "audio/O.mp3",
    "revision": "927e8bd9170c636dd9ea23605e2fc0bb"
  },
  {
    "url": "audio/p_sentance.mp3",
    "revision": "023c484a2ff0ad3ce7c0d68ee4af767f"
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
    "url": "audio/q_sentance.mp3",
    "revision": "42bb9539e425fcd6f01d96ad9b82a251"
  },
  {
    "url": "audio/Q.mp3",
    "revision": "ffcc6509281393f73fbf4cc4a7de20d4"
  },
  {
    "url": "audio/r_sentance.mp3",
    "revision": "0aa1ead90fd91d4b071a0f5890bb5686"
  },
  {
    "url": "audio/R.mp3",
    "revision": "f8539668b4fe7140766cfb65ae934793"
  },
  {
    "url": "audio/s_sentance.mp3",
    "revision": "80fb33f235f774c1e169691fbf4a8b38"
  },
  {
    "url": "audio/S.mp3",
    "revision": "b80d9b79fdb8e6c226fbb78f463939e5"
  },
  {
    "url": "audio/t_sentance.mp3",
    "revision": "a388aa9377169855421c5779c71ee2e4"
  },
  {
    "url": "audio/T.mp3",
    "revision": "876e1956dc5c0e29c673be8641890c1e"
  },
  {
    "url": "audio/u_sentance.mp3",
    "revision": "da3a202b3fb6fccf065e3dd97938877e"
  },
  {
    "url": "audio/U.mp3",
    "revision": "120a563ea225764fa4c67f91b7658faf"
  },
  {
    "url": "audio/v_sentance.mp3",
    "revision": "cae8e296c7bebb55ee3799182f0f51ec"
  },
  {
    "url": "audio/V.mp3",
    "revision": "642630af5237741aac455cdf83d457dd"
  },
  {
    "url": "audio/w_sentance.mp3",
    "revision": "474f9a0d945d9878611010f8b49501ff"
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
    "url": "audio/y_sentance.mp3",
    "revision": "1f9837b71307816f5635d44c40a12aea"
  },
  {
    "url": "audio/Y.mp3",
    "revision": "0e6c25beee5bbf12ad9b775bb8bfdd0e"
  },
  {
    "url": "audio/z_sentance.mp3",
    "revision": "5e29d86db057d8e4ad6f9ebfabb43e64"
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
    "revision": "cc26dfe10137309c7ba028abb0e3fd41"
  },
  {
    "url": "daube-header-fixed-compiled.js",
    "revision": "612249e4b23c0c81dc33c98a96262313"
  },
  {
    "url": "daube-main-container-compiled.js",
    "revision": "b0d835d1fd2ec9dc1337a83739537ecd"
  },
  {
    "url": "daube-modal-compiled.js",
    "revision": "ebe11eba30fe4d078019d5b64ea3a089"
  },
  {
    "url": "images/apple.png",
    "revision": "f3dae4bc5bf73d34537d5e6abe124499"
  },
  {
    "url": "images/bananas.png",
    "revision": "b03995102853abbf614139cbfac5c266"
  },
  {
    "url": "images/carrots.png",
    "revision": "895d197ba1e60b1c7c4aab5e020a28ea"
  },
  {
    "url": "images/daubedesign.ico",
    "revision": "24512db0081f46a91b8fdce36c155669"
  },
  {
    "url": "images/dog.png",
    "revision": "5c920bb8cec1067dd797e51db7a11e5c"
  },
  {
    "url": "images/elephant.png",
    "revision": "7d6bb70b1f4635acada6a16d0a515df0"
  },
  {
    "url": "images/frog.png",
    "revision": "70b9ddaa11664a849003faf74db22f51"
  },
  {
    "url": "images/giraffe.png",
    "revision": "1eec9312402bb27a45825de2b670560d"
  },
  {
    "url": "images/hat.png",
    "revision": "61c9c818a3300d29279878ba1bf2ca3e"
  },
  {
    "url": "images/ice_cream_cone.png",
    "revision": "1a79cfde7439208279a7ecf74c45bf7f"
  },
  {
    "url": "images/jar.png",
    "revision": "38abdbf6b4ad046ec88bf264c1a6582d"
  },
  {
    "url": "images/key.png",
    "revision": "9d6432f280b2c82bd91f0caea83af60f"
  },
  {
    "url": "images/light_bulb.png",
    "revision": "bab2e4cde99de0aec9ef9fdf5f2352b8"
  },
  {
    "url": "images/manifest/daubedesign-144x144.png",
    "revision": "21ea699f2983284c68587b23d160d01a"
  },
  {
    "url": "images/manifest/daubedesign-192x192.png",
    "revision": "df3aa9154f3fba74ce72fdcddbbee1f4"
  },
  {
    "url": "images/manifest/daubedesign-48x48.png",
    "revision": "7a96e5276986699d41d7172cdf69298c"
  },
  {
    "url": "images/manifest/daubedesign-512x512.png",
    "revision": "03033e1a83fe2d17015c123984cdb080"
  },
  {
    "url": "images/manifest/daubedesign-72x72.png",
    "revision": "0efd06d9c208888fd7946a1200769b5a"
  },
  {
    "url": "images/manifest/daubedesign-96x96.png",
    "revision": "5a9ea3135f7296b7905212ef6e288610"
  },
  {
    "url": "images/monkey.png",
    "revision": "9592f7377ade878aca9b2fd0e42dfcd6"
  },
  {
    "url": "images/napkins.png",
    "revision": "be794ce8a66c57215e2781691dc6fe00"
  },
  {
    "url": "images/owl.png",
    "revision": "3560ba338f8036135f7c9ac85a8ddcad"
  },
  {
    "url": "images/pencil.png",
    "revision": "d1bb53c5d6563edaa63db8588e077602"
  },
  {
    "url": "images/queen.png",
    "revision": "02a39ad8668f87fc2fc16f28c84c514b"
  },
  {
    "url": "images/roses.png",
    "revision": "ef37fe407fed41db8847ce3eb40adecb"
  },
  {
    "url": "images/salad.png",
    "revision": "34d87bd19b380884c649257b0865c810"
  },
  {
    "url": "images/turtle.png",
    "revision": "3865fb44c3515c890c73612791728b23"
  },
  {
    "url": "images/umbrella.png",
    "revision": "976834e82cefd8baf28692992aea38dc"
  },
  {
    "url": "images/vase.png",
    "revision": "e2e27359bc87b91099f70c85f7b344db"
  },
  {
    "url": "images/watermelon.png",
    "revision": "ccaf2bad093b2297e4427fb04e1e4662"
  },
  {
    "url": "images/xylophone.png",
    "revision": "e6f3a22b8dbc72fd8aadefd5d1a6847b"
  },
  {
    "url": "images/yarn.png",
    "revision": "b609774100b969272c1afa1f08d1a51b"
  },
  {
    "url": "images/zebra.png",
    "revision": "6afc043fcd05cbb17164f71f8ed90dfe"
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
