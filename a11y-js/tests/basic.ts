import assert from "assert";
import puppeteer from "puppeteer";
import { a11y, setNetworkInterception } from "a11y-js";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // uncomment to log values for debuging
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await setNetworkInterception(page);
  await page.setContent(drakeMock);

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await a11y({
    page,
    browser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
  });
  const nextTime = performance.now() - startTime;

  console.log(issues);
  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  // must return at least 44 errors or runner messed up.
  assert(meta.errorCount === 44);
  // must return at least 24 warnings or runner messed up.
  assert(meta.warningCount === 24);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
