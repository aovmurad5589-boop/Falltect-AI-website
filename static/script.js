// Function for simple button navigation
function navigateTo(url) {
    window.location.href = url;
}

// Global script executed on content load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Page Load Animations ---
    const animatedElements = document.querySelectorAll('.hero-content, .feature-card, .bio-container, .vdo-container, .process-container');
    
    // Simple staggered fade-in effect
    animatedElements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(15px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 150 * (index + 1)); // Staggered delay
    });

    // --- 2. Download Interaction Tracking (Alpha Test) ---
    const downloadBtns = document.querySelectorAll('.download-btn');
    const discordbtn = document.querySelector('.discord-btn');
    const inviteBotBtn = document.querySelector('.invite-bot-btn');

    discordbtn.addEventListener('click', (e) => {
        window.open("https://discord.com/channels/@me");
    });

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSd5Z8d_WjHRkqOS1b2TeVpe2c7q7FB_EpAUBM92VXWHneWDxw/viewform?usp=publish-editor");
        });
    });

    inviteBotBtn.addEventListener('click', (e) => {
        window.open("https://discord.com/oauth2/authorize?client_id=1455413525274034188&permissions=8&integration_type=0&scope=bot");
    });
});

function navigateTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Page Load Animations ---
    const animatedElements = document.querySelectorAll('.hero-content, .feature-card, .bio-container, .vdo-container, .process-container');
    animatedElements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(15px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });

    // --- 2. Button Action Handlers ---
    const downloadBtns = document.querySelectorAll('.download-btn');
    const discordbtn = document.querySelector('.discord-btn');
    const inviteBotBtn = document.querySelector('.invite-bot-btn');

    if (discordbtn) {
        discordbtn.addEventListener('click', () => { window.open("https://discord.com/channels/@me"); });
    }
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSd5Z8d_WjHRkqOS1b2TeVpe2c7q7FB_EpAUBM92VXWHneWDxw/viewform?usp=publish-editor");
        });
    });
    if (inviteBotBtn) {
        inviteBotBtn.addEventListener('click', () => {
            window.open("https://discord.com/oauth2/authorize?client_id=1455413525274034188&permissions=8&integration_type=0&scope=bot");
        });
    }

    // --- 3. High-Performance Language Engine ---
    const langButtons = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        // [Existing Cache Storage and Button Class Updates Remain Here]
        localStorage.setItem('preferredLang', lang);
        
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-select') === lang);
        });

        // 1. Text translations swap
        const translatableElements = document.querySelectorAll('[data-en], [data-th]');
        translatableElements.forEach(el => {
            const translation = el.getAttribute(`data-${lang}`);
            if (translation) el.innerHTML = translation;
        });

        // 2. Update the offline download button file asset
        const researchBtn = document.getElementById('research-download-btn');
        if (researchBtn) {
            const targetFile = researchBtn.getAttribute(`data-file-${lang}`);
            if (targetFile) researchBtn.setAttribute('href', targetFile);
        }

        // 3. Update the strong document label metadata text
        const docLabel = document.getElementById('research-doc-label');
        if (docLabel) {
            const targetLabel = docLabel.getAttribute(`data-doc-${lang}`);
            if (targetLabel) docLabel.innerText = targetLabel;
        }

        // 4. Hot-swap the interactive iframe content view path
        const researchIframe = document.getElementById('research-iframe');
        if (researchIframe) {
            const targetIframeSrc = researchIframe.getAttribute(`data-iframe-${lang}`);
            if (targetIframeSrc && researchIframe.getAttribute('src') !== targetIframeSrc) {
                researchIframe.setAttribute('src', targetIframeSrc);
            }
        }

        // 5. Update the hidden viewport fallback fallback link target
        const fallbackBtn = document.getElementById('research-fallback-btn');
        if (fallbackBtn && researchBtn) {
            fallbackBtn.setAttribute('href', researchBtn.getAttribute('href'));
        }
    }

    // Initialize Language from Cache or system default
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);

    // Attach Event Listeners to Buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang-select');
            setLanguage(targetLang);
        });
    });
});