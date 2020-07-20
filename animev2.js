const rp = require("request-promise");
const cheerio = require("cheerio");
const request = require("request");

request("https://4anime.to/?s=test", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    console.log("okkey");

    const $ = cheerio.load(html);

    $(".landingHero-1OHkS9 a").each((i, el) => {
      const item = $(el).text();
      const link = $(el).attr("href");

      console.log(item);
      console.log(link);
    });
  }
});
