document.querySelector('#open-options').addEventListener('click', e => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getUrl('/options/options.html'));
  }
});
