const rp = require("request-promise");
const puppeteer = require("puppeteer");
const $ = require("cheerio");
const url = "https://4anime.to/?s=test";

puppeteer
  .launch()
  .then(function (browser) {
    return browser.newPage();
  })
  .then(function (page) {
    console.log("sayfa yükleniyor");
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  //   .then(function (html) {
  //     console.log("sayfa yüklendi");
  //     document.getElementById("").href.innerHTML = html;
  //     console.log("getelement by id boş döndü");
  //   })
  .then(function (html) {
    $("a", html).each(function () {
      console.log("pumpeteeer burasııııııııııııııııııııııııııı");
      console.log($(this).text());
    });
  })
  .catch(function (err) {
    //handle error
  });
