var epoch = document.getElementById("epoch");
var iso8601 = document.getElementById("iso8601");

const REFRESH_RATE_MS = 666;

function getPathEpoch() {
  return Number(
    window.location.pathname.slice(1, window.location.pathname.length)
  );
}

var pathEpoch = getPathEpoch();

function render() {
  if (pathEpoch) var now = new Date(pathEpoch);
  else var now = new Date();

  epoch.innerHTML = now.getTime();
  iso8601.innerHTML = now.toISOString();
}

render();

// If there is not a set date, render the current time every so often
if (!pathEpoch) setInterval(render, REFRESH_RATE_MS);
