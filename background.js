// This code runs when you first install the extension, showing a welcome page
chrome.runtime.onInstalled.addListener(({ reason }) => {
  // See https://stackoverflow.com/a/64660664
  if (reason === "install")
    chrome.tabs.create({ url: "https://1feed.app/extension-installed/" });
});

// This code runs when you click the 1Feed icon in your browser
chrome.browserAction.onClicked.addListener((tab) => {
  if (["about:newtab", "chrome://newtab/"].includes(tab.url)) {
    // If on the new tab page, open 1Feed in the current tab
    chrome.tabs.update(tab.id, {
      url: "https://my.1feed.app/?utm_source=extension",
    });
  } else {
    // If on any other page, open the 1Feed add page in new tab
    chrome.tabs.create({
      url:
        "https://my.1feed.app/add?url=" +
        encodeURIComponent(tab.url) +
        "&utm_source=extension",
    });
  }
});
