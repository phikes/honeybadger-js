// Initialize button with user's preferred color
const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

// Button to throw an error and have it reported on Honeybadger
const reportErrorButton = document.getElementById('reportErrorButton');
reportErrorButton.addEventListener('click', async () => {
  // eslint-disable-next-line no-undef
  someUndefinedFunction();
});
