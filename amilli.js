var epoch = document.getElementById("epoch");
var iso8601 = document.getElementById("iso8601");

const REFRESH_RATE_MS = 333;

function getPathValue() {
  const result = window.location.pathname.slice(
    1,
    window.location.pathname.length
  );

  // Attempt to cast to number
  const numericResult = Number(result);
  // If numeric result is NaN, return the value string
  if (numericResult.toString() == "NaN") return result;
  // Range for year-only input
  else if (numericResult >= 0 && numericResult < 3000) return result;
  // Is probably epoch, return as number
  else return numericResult;
}

var pathValue = getPathValue();

function render() {
  if (pathValue) var now = new Date(pathValue);
  else var now = new Date();

  epoch.innerHTML = now.getTime();
  iso8601.innerHTML = now.toISOString();
}

render();

// If there is not a set date, render the current time every so often
if (!pathValue) setInterval(render, REFRESH_RATE_MS);
