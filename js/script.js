document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
    const readMoreButton = document.getElementById('read-more');

    function showPopup() {
        if (!localStorage.getItem('popupShown')) {
            popup.style.display = 'block';
            localStorage.setItem('popupShown', 'true');
        } else {
            popup.classList.add('corner-popup');
            popup.style.display = 'block';
        }
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    closeButton.addEventListener('click', closePopup);
    readMoreButton.addEventListener('click', () => {
        window.location.href = 'your-read-more-link.html';
    });

    showPopup();
});
