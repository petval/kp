const staticPaths = new Set(["/kp/","/kp/404.html/","/kp/_headers","/kp/blog/","/kp/blog/demo-post-1/","/kp/blog/demo-post-2/","/kp/blog/demo-post-3/","/kp/blog/demo-post-4/","/kp/blog/demo-post-5/","/kp/blog/demo-post-6/","/kp/brusperk/","/kp/favicon.svg","/kp/images/foto/lide/andrea.jpg","/kp/images/foto/lide/jana.jpg","/kp/images/foto/lide/marie.jpg","/kp/images/foto/lide/michaela.jpg","/kp/images/kp.site.logo.png","/kp/images/placeholder-1024x640.png","/kp/kontakty/","/kp/manifest.json","/kp/o-nas-md/","/kp/o-nas/","/kp/ostrava/","/kp/podminky/","/kp/privacy/","/kp/q-manifest.json","/kp/robots.txt","/kp/service-worker.js","/kp/sitemap.xml","/kp/sluzby/"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/kp/build/")) {
    return true;
  }
  if (p.startsWith("/kp/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };