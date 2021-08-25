chrome.browserAction.onClicked.addListener((tab) =>
  chrome.tabs.create({
    url:
      "https://my.1feed.app/add?url=" +
      encodeURIComponent(tab.url) +
      "&utm_source=extension",
  })
);
