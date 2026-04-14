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

