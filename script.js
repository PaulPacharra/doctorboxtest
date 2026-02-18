function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Activate corresponding button
    const activeBtn = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function showGenderTab(testId, gender) {
    // Hide all gender contents for this test
    const genderContents = document.querySelectorAll(`#${testId} .gender-content`);
    genderContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all gender buttons for this test
    const genderBtns = document.querySelectorAll(`#${testId} .gender-tab-btn`);
    genderBtns.forEach(btn => btn.classList.remove('active'));

    // Show selected gender content
    const selectedContent = document.getElementById(`${testId}-${gender}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Activate corresponding button
    const activeBtn = document.querySelector(`#${testId} button[onclick="showGenderTab('${testId}', '${gender}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Initialize - show first tab on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('.tab-btn');
    if (firstButton) {
        firstButton.click();
    }
});
