chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
        id: 'decodeUrl',
        title: 'Decode URL',
        type: 'normal',
        contexts: ['selection', 'link'],
    });
    chrome.contextMenus.onClicked.addListener(contextMenuClicked);
});

async function contextMenuClicked(info, tab) {
    console.log('context menu clicked!');
    if (info.menuItemId === 'decodeUrl') {
        const url = info.linkUrl ?? info.selectionText ?? 'wtf';
        await triggerPopover(url, tab);
    }
}

async function triggerPopover(url, tab) {
    if (!tab) {
      tab = (await chrome.tabs.query({active: true, lastFocusedWindow: true}))[0];
    }
    const response = await chrome.tabs.sendMessage(tab.id, {url});
}

async function init() {
}

init().catch(e => {
    console.error(e);
});