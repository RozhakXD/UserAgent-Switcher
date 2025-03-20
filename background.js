let currentUserAgent = '';

async function updateUserAgentRule(userAgent) {
    try {
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [1],
            addRules: [{
                id: 1,
                priority: 1,
                action: {
                    type: 'modifyHeaders',
                    requestHeaders: [{
                        header: 'User-Agent',
                        operation: 'set',
                        value: userAgent
                    }]
                },
                condition: {
                    urlFilter: '*',
                    resourceTypes: ['main_frame', 'xmlhttprequest']
                }
            }]
        });
    } catch (error) {
        console.error('Gagal update:', error);
    }
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'setUserAgent') {
        currentUserAgent = message.userAgent;
        updateUserAgentRule(currentUserAgent);
    }
});