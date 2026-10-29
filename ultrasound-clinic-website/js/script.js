// Show the current year in the footer (fills <span class="year">).
document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});