chrome.browserAction.onClicked.addListener((tab) =>
  chrome.tabs.update(tab.id, {
    url: "https://my.1feed.app/add?url=" + encodeURIComponent(tab.url),
  })
);
