document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closeBtn");

    // Show the popup when the page loads
    popupOverlay.style.display = "flex";

    // Close the popup when close button is clicked
    closeBtn.addEventListener("click", function() {
        popupOverlay.style.display = "none";
    });
});
