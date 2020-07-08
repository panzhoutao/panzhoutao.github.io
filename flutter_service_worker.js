'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "7721c9ee45fbcef628ffcc06d04c17d2",
"/": "7721c9ee45fbcef628ffcc06d04c17d2",
"main.dart.js": "68b2af24b690a349c80510ed3f74c884",
"favicon.png": "88493d315c57f8db5a5eeeff146ac995",
"icons/Icon-192.png": "3f052ce7c558ba21ffa531f18b865f11",
"icons/Icon-512.png": "518babda2ce7b91dbb5cdc720bff78e0",
"manifest.json": "2690535e643318af022b329b1cf3e6dc",
"assets/res/images/my_module_2.webp": "401a02f81fd8338fdea4bb9b617bac90",
"assets/res/images/home_module_2.webp": "03941fad134aad05d98f7ac64f644536",
"assets/res/images/ic_bi_address.webp": "a3fa95fb47c35f0df1edd70466d71c9f",
"assets/res/images/ic_usdt.png": "7d861073c6342dd104a1263572a4324d",
"assets/res/images/my_module_3.webp": "839eaaf475fe8fbade86c49c696bd840",
"assets/res/images/buyRobot_payOrder_1.webp": "55a6459ef83b67198142fc590ac7702c",
"assets/res/images/robot_module_4.webp": "5d74df6759c0c39a0fd01cb78f6d97fd",
"assets/res/images/trade_module_4.webp": "6da0bf57e0833e85b42cbea0fa3a8925",
"assets/res/images/my_module_4.webp": "f3ac2d8a69179dd8f65b7af088a9bcdf",
"assets/res/images/robot_guide_step1.webp": "11413a8ae368f0613812d65c04398cc9",
"assets/res/images/logo_bi_an.webp": "025e562bf1764ee9d4a9d5d073aa833c",
"assets/res/images/trade_module_3.webp": "9a73881bde24c6802ee37c64a48d1cc8",
"assets/res/images/robot_module_3.webp": "4261c6017b99b7618c929e8484c5214a",
"assets/res/images/pic_sign_in_1.webp": "6ee87dae2b0abe13a8e14d166009238c",
"assets/res/images/test_banner2.webp": "7f528b8f2bd8460f53153cb7fb1a2e08",
"assets/res/images/robot_module_2.webp": "acb211561148d588c4c883ee95afd8c8",
"assets/res/images/logo.webp": "1a63f65e934c408b79ca7e86856f5cf5",
"assets/res/images/trade_module_2.webp": "94fef31e5a54c993fc3200f0e7c62408",
"assets/res/images/pic_commission.webp": "4fced3d553730a93c1a1b398e71cd269",
"assets/res/images/logo_huobi.webp": "590e85f6a6d0e5d196107f3f4aef7a1b",
"assets/res/images/pic_share.webp": "1175052b358919f24014e32c75c5f166",
"assets/res/images/logo_bybit.png": "44338e982adb012b78cd4217d1c7dd6d",
"assets/res/images/default_ic_user.webp": "651badb4de8db26e9ead7a5a9912be19",
"assets/res/images/pic_sign_in.webp": "b41b97ff0eb635373aa6038cce34180d",
"assets/res/images/robot_guide_step3.webp": "ee7962ca088248025be8b98500dcd921",
"assets/res/images/test_banner1.webp": "b09e9a22257349222a6dada5a977bcdb",
"assets/res/images/robot_module_1.webp": "6ec23c1c809fbba5de1a6c98fa3dcb19",
"assets/res/images/trade_module_1.webp": "79b0a6d09986ee079d9b20a0e29c256b",
"assets/res/images/robot_guide_step2.webp": "730ff1a9f1ff4407dcd9146521f1e20f",
"assets/res/images/buyRobot_payOrder_2.webp": "98a61f6a04597114184936a0509f59d3",
"assets/res/images/ic_safe.webp": "bc9585a9bfb55d81b33c9fd491bb6e02",
"assets/res/images/my_module_1.webp": "1e94d3407138023470ca0affbd50ee44",
"assets/res/images/home_module_1.webp": "b5a25ee8192453f67ff0b52c0eaedf14",
"assets/res/images/test_banner.webp": "8b0fd31e082b4c300d9afe51f292d321",
"assets/res/web_images/register_bg.webp": "21fa647672e870a722a0faff0b80b7a8",
"assets/res/web_images/logo_76.webp": "f8bda4396b30b2d3b5da647e66ffb6b4",
"assets/res/fonts/iconfont.ttf": "3e3452bbea390226e480eed356e10d91",
"assets/AssetManifest.json": "08c8e064bd1b4a9ffacf83c699a4a7cf",
"assets/NOTICES": "e391a563af60d76bc7c663b92c9df1a8",
"assets/FontManifest.json": "b1b7ae8445a65a94e73f7ff76d27508f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
