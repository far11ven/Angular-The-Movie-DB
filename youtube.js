const { google } = require("googleapis");
var youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyCZgW7uYw777CgDgPp20zOU3PczztsaaOs"
});

youtube.search.list(
  {
    part: "snippet",
    q: "midway+trailer"
  },
  function(err, data) {
    if (err) {
      console.error("Error: " + err);
    }
    if (data) {
      console.log(data.data.items);
    }
  }
);
