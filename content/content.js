(async () => {
    const popover = createDomElement('<div id="url-toolkit-popover" popover>Hello world!</div>');
    document.body.append(popover);

    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
        if ('url' in request) {
            await showDecodePopover(request.url);
        }
    });
})();

async function showDecodePopover(url) {
    const popover = document.querySelector('#url-toolkit-popover');
    popover.innerHTML = url;
    popover.showPopover();
}

function createDomElement(html) {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    return dom.body.firstElementChild;
}