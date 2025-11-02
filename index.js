import puppeteer from "puppeteer";

const getGames = async () => {
  const browser = await puppeteer.launch({
    // a visible browser
    headless: false,
    // no default viewport
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://startplaying.games/search?gameSystems=lancer", {
    waitUntil: "load",
  });

  await page.waitForSelector('._1fs09382p._1dzxdjxc._1dzxdj13q._1dzxdj1a4._1dzxdj1gi._1dzxdj1tp._1dzxdj2qr._1dzxdj6vy._1fs093841._1fs093848._1fs09383n._1dzxdj6tv._1dzxdj6tz._1dzxdj6ta', { 
    visible: true,
    timeout: 5000 
  });

  console.log("Page has fully loaded!")

  const games = await page.evaluate(() => {

    //const firstGame = document.querySelector("div._1sn9nye8._1dzxdj5._1dzxdj3c._1dzxdj72k._1dzxdj1tk");
    // Fetch the sub-elements from the previously fetched quote element
    // Get the displayed text and return it (`.innerText`)
    const title = document.querySelector("p._1fs09382p._1dzxdjxc._1dzxdj13q._1dzxdj1a4._1dzxdj1gi._1dzxdj1tp._1dzxdj2qk._1fs093810._1dzxdj6vy._1fs093843._1fs093848._1fs09383n._1dzxdj6tv._1dzxdj6tz._1dzxdj6ti").innerText;
    //const gm = firstGame.querySelector("p._1fs09382p._1dzxdjxc._1dzxdj13q._1dzxdj1a4._1dzxdj1gi._1dzxdj1tp._1dzxdj2qy._1fs0938z._1dzxdj6vy._1fs093841._1fs093848._1fs09383n._1dzxdj6tv._1dzxdj6u2._1dzxdj6t9").innerText;  

    return { title, };


    /*
    const gameList = document.querySelectorAll("div._1sn9nye8._1dzxdj5._1dzxdj3c._1dzxdj72k._1dzxdj1tk");

    // Convert the quoteList to an iterable array
    // For each quote fetch the text and author
    return Array.from(gameList).map((game) => {
      // Fetch the sub-elements from the previously fetched quote element
      // Get the displayed text and return it (`.innerText`)
      const title = quote.querySelector("p._1fs09382p._1dzxdjxc._1dzxdj13q._1dzxdj1a4._1dzxdj1gi._1dzxdj1tp._1dzxdj2qk._1fs093810._1dzxdj6vy._1fs093843._1fs093848._1fs09383n._1dzxdj6tv._1dzxdj6tz._1dzxdj6ti").innerText;
      //const author = quote.querySelector(".author").innerText;

      return { title, };
    });*/
  
});

  // Display the quotes
  console.log("First game: ", games);

  // Close the browser
  //await browser.close();
};

// Start the scraping
getGames();
