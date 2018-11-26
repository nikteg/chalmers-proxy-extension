"use strict";

window.location =
  location.protocol +
  "//" +
  location.hostname.replace(/\./g, "-") +
  ".proxy.lib.chalmers.se" +
  location.pathname +
  location.search +
  location.hash;
