const imdb = require("imdb-api");

const cli = new imdb.Client({ apiKey: "104313cc" });
cli
  .search({ name: "Midway" })
  .then(search => {
    for (const result of search.results) {
      console.log(result);
    }
  })
  .catch(console.log);
