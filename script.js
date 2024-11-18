document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector(".togglebtn");
    const toggleBtnIcon = document.querySelector(".togglebtn i");
    const dropdown = document.querySelector(".dropdown");
    const hero = document.querySelector(".hero");
    const btn2 = document.querySelector(".btn-2");

    if (toggleBtn && toggleBtnIcon && dropdown) {
        toggleBtn.addEventListener('click', function(event) {
            dropdown.classList.toggle("open");
            const isOpen = dropdown.classList.contains("open");
            toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            event.stopPropagation();
        });

        document.body.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target) && dropdown.classList.contains("open")) {
                dropdown.classList.remove("open");
                toggleBtnIcon.classList = 'fa-solid fa-bars';
            }
        });

        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        hero.addEventListener('scroll', function() {
            if (dropdown.classList.contains("open")) {
                dropdown.classList.remove("open");
                toggleBtnIcon.classList = 'fa-solid fa-bars';
            }
        });

        btn2.addEventListener("click", ()=>{
            window.location.href="#projects";
        });

        // Typewriter effect
        const texts = ['Student', 'Web Developer'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.getElementById('typing-animation').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); 
            } else {
                setTimeout(type, 120); 
            }
        })();

        // CV download functionality
        document.getElementById('downloadCvButton').addEventListener('click', function() {
            var downloadLink = document.createElement('a');
            downloadLink.href = 'files/CV.pdf';
            downloadLink.download = 'AayushShrestha_CV.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });

        // Disable developer tools
        document.onkeydown = function (e) {
            if (e.keyCode == 123) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                return false;
            }
        };
    }
});
