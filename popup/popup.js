let userAgents;

document.addEventListener('DOMContentLoaded', () => {
    const customDiv = document.getElementById('customAgent');
    const customInput = document.getElementById('customInput');
    const saveBtn = document.getElementById('saveCustom');

    userAgents = {
        default: navigator.userAgent,
        iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
        android: "Mozilla/5.0 (Linux; Android 12; Pixel 5 Build/SP1A.210812.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
        custom: ""
    };

    chrome.storage.local.get(['selectedAgent'], (result) => {
        if (result.selectedAgent) {
            const selectedOption = document.querySelector(`[data-value="${result.selectedAgent}"]`);
            if (selectedOption) {
                document.querySelector('#selectedUA span').textContent = selectedOption.textContent;
            }
        }
    });

    document.getElementById('selectedUA').addEventListener('click', toggleDropdown);

    document.querySelectorAll('.ua-option').forEach(option => {
        option.addEventListener('click', handleOptionClick);
    });

    saveBtn.addEventListener('click', handleSaveCustom);
});

function toggleDropdown() {
    const options = document.getElementById('uaOptions');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function handleOptionClick(e) {
    const value = e.currentTarget.dataset.value;
    document.querySelector('#selectedUA span').textContent = e.currentTarget.textContent;
    document.getElementById('uaOptions').style.display = 'none';

    if (value === 'custom') {
        document.getElementById('customAgent').style.display = 'block';
    } else {
        document.getElementById('customAgent').style.display = 'none';
        chrome.storage.local.set({ selectedAgent: value });
        updateUserAgent(value);
        showNotification(`Berhasil! UserAgent telah diubah menjadi: ${value.toUpperCase()}`);
    }
}

function handleSaveCustom() {
    const customUA = document.getElementById('customInput').value.trim();
    if (customUA) {
        userAgents.custom = customUA;
        chrome.storage.local.set({ selectedAgent: 'custom' });
        updateUserAgent('custom');
        showNotification("Berhasil! Pengaturan UserAgent kustom telah disimpan.");
    }
}

function updateUserAgent(agentKey) {
    chrome.runtime.sendMessage({
        action: 'setUserAgent',
        userAgent: userAgents[agentKey] || userAgents.default
    });
}

function showNotification(message, duration = 5000) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.top = '20px';
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.top = '-50px';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, duration);
}