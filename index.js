window.onload = function() {
    var buttons = document.querySelectorAll('.value');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
};
