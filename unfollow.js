// ==UserScript==
// @name         LinkedIn Auto Uncheck
// @version      1.0.2
// @description  Automatically unclicks the super annoying follow company checkbox that is always auto-checked
// @match        https://www.linkedin.com/*
// @grant        none
// ==/UserScript==


(function () {
    function uncheckFollowCompany() {
        const checkbox = document.getElementById('follow-company-checkbox');

        if (checkbox && checkbox.checked) {
            checkbox.click(); // triggers React
            console.log("Unchecked Follow Company checkbox");
        }
    }

    // Run immediately
    uncheckFollowCompany();

    // Watch for LinkedIn dynamically injecting the modal
    const observer = new MutationObserver(() => {
        uncheckFollowCompany();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
