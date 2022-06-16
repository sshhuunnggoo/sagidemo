import * as platform from "https://cdn.skypack.dev/platform@1.3.6";
  let c = 6 * 60 * 60;
      setInterval(() => {
        $("#hour").text(Math.floor(c / 3600));
        $("#min").text(Math.floor((c % 3600) / 60));
        $("#sec").text(Math.floor(c % 60));
        c = c - 1;
      }, 1000)
$("#device").text(platform.description);