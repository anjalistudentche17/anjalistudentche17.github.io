'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "055a0f8c3075f8925d7972079390d93b",
"index.html": "81369b0575b7c25404787e931bfd588c",
"/": "81369b0575b7c25404787e931bfd588c",
"main.dart.js": "89ff1641b21c8f8a25db289a1f4824ba",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "25abe3a10117f5eb35c590b1232cd0ce",
".git/config": "546e689336f280d0e1ed84aac7405330",
".git/objects/66/051678e8e8f32a3785176a153005d86a69c08a": "af3a34b19d732b47d8ac6a263ac8498c",
".git/objects/9e/e6abc342286271cfdc5e362bdb2de3e4fc6de7": "bebb4266fd64a3ef1216630114682646",
".git/objects/69/315f27f2669d4e4e65e185ddc655a62bcb0146": "fdfcb17311333d3cb7a8172b5c7ad2c8",
".git/objects/56/142d2672ef4a7b913595ebf03d0aa3c67b543c": "97a9936bb5caf3bbf79dca72f146d05e",
".git/objects/51/5340d735b5dc5530d84b584e98372e699b2f62": "f8094ad88d6433a024d1c5cf3b9d1a40",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/a4/ef23d44be1c2112ca896ea9b03ad7f75f5e5eb": "4c4f07e02c928d72089e22d379019e03",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/b08f23c13525b657303c22beb2428884dbd5b2": "aca0bc6a0596f7aa20ad5973e954e163",
".git/objects/df/3fd6c328306ccf008cd21ed1ce837c911ebeff": "309d9f9e1015ad8c3747fce4db687f25",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/4e/ca578ec92f50bdd652e215b88d316daec20ec3": "d24bf76754d0424741f0f6c910cee3d6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/67d0fe9f53174a9262b668024a59de36a5480b": "f113e810f00477897ec63a2f5dcf24e3",
".git/objects/87/dd4a2f87c39d5e6c388c5189128dc25ddfc0fa": "e40079b5b3b38a458cd6fef60b68137d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/0eb2998a29eee61a21614a47fc59880cf537f5": "ebda95c4f6909e48a084008c1be2d48f",
".git/objects/44/6b6898c46671c1d4dae6cc073b392f970cd083": "0fa2292ed6ba987f26c8e70b8e01e979",
".git/objects/43/983942cb61c07f93577723e6cd9ea2fccded47": "c6c894694bbda63f1ba352289ae85824",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/766b3c36e75d4dab07921d74e5684271180ed7": "6e980f51fb36c55773c289f50be916e1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/06/fbea18a5bd066b534d7316d491959fd9c2497a": "c8b427b8ae6b8fe457422aae3816155e",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/d3/d2c51436895c7f7f0e114b8eda96123454f6a3": "4e05dc12ccf5feb21572dd36df2cc0ce",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/8735bbc86cf6746129e2eeff6af3465bb1c7d7": "aee7cf17776814047bc31a59733ed9c5",
".git/objects/a9/33fa31327702b32876516cc605c338943b56c5": "2f1498633ccec2632f5e70fbc5211b48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1aa53563bbb82f607f9c4fffd6afe53ebeb3f3": "e8a89ec8247bc7318ecb78ef35c3a53a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/b1c0905dbe8c0de2402169c3a62b051aed7ace": "e46a1f8490a0efd4687754e40223cb4e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/01f223a0dd315f8da7b75cb8b011e08eb3862a": "a3c5edf0c0fc14a985c3b0a48a88cc06",
".git/objects/f1/1e43a742fb2f98d64ccb3eb9e0fc242cf3ab3e": "c969ba54a12ed0fe9d86087ab08e395b",
".git/objects/ce/774450b43a35e08dfe6f19ed777a9980ef9c4f": "e45769545ab975a2c0f06d611a56ca83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/79/c09ad77c62bf378d9742763f3326a62e3cf6eb": "203ac7fed8b1d1e186ece1f58265e986",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/a7ecf321964eaa968e747e25a54365fee23b23": "da5bcdc1985e60c890ec30e0b4f52686",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/82/93519eb53b99d76d11038b25fa0813d9e1e99b": "b5d8c8a0a0349930004932a560a10458",
".git/objects/40/0e3ef684c68096fc3a381f5266c06a4fd395ba": "e1946fb2e921582165285ec3264eb7ca",
".git/objects/14/b76b3acc0926ff77f32d638150ae9cdf47c867": "6af7093f8dad66714d2f2f0f79e17273",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cbaf629b24fe8a8cf54019581b62d816",
".git/logs/refs/heads/main": "f72ca1e6b2ee6a3fc01a24c7261964bf",
".git/logs/refs/remotes/origintwo/main": "82a5ea4a7c406a1c7ad85278add476b3",
".git/logs/refs/remotes/origin/main": "e50ffe7d04434769d42a7e16a495b38c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e45ba018d6fefb61d30d6c837be948d3",
".git/refs/remotes/origintwo/main": "e45ba018d6fefb61d30d6c837be948d3",
".git/refs/remotes/origin/main": "e45ba018d6fefb61d30d6c837be948d3",
".git/index": "9f5e7f01a8e656483fa3406334bc0e48",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/ticket.pdf": "ca76b18463b5e1f6f51e46a320179ee4",
"assets/AssetManifest.json": "1f84435fdd509236b280e6dc6294ff03",
"assets/google-logo-vector-28387554.jpg": "101be86580cedb93a5b159dc36baaf5b",
"assets/NOTICES": "3f55f6f631ba01a00ef446e12a122358",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c27c8758c83deda5c7c4b39978d2774c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/9025437.svg": "c6249d6ab1b31425af7e16d9c0e40cc2",
"assets/5719321.svg": "5d5d899ced6341a9e194d9a68f9be8c0",
"assets/AssetManifest.bin": "f9d5f61645be341037383cc2769a19fb",
"assets/fonts/MaterialIcons-Regular.otf": "d27771265b91ecc010d65bcda852992b",
"assets/elders.svg": "5e439b544bc11dcbe514231d5b266589",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "4372fb8a8815b82f7df32021d3817016",
"canvaskit/canvaskit.js.symbols": "9bf8b1ab7b28925759539f5dab0f7942",
"canvaskit/skwasm.wasm": "74508f684b7e5dd9c4cbfe4612c00422",
"canvaskit/chromium/canvaskit.js.symbols": "4204b7a336643ac3dbd6d57125388d8f",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "a88b8f0f6ae548cfdb1fc64066e498e0",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "ae51eacec65638751a9f8337a12ce1e8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
