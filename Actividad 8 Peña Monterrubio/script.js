
    var menuIcon = document.getElementById("menuIcon");
    var mainMenu = document.getElementById("mainMenu");

    menuIcon.addEventListener("click", function () {
        if (mainMenu.style.display === "block") {
            mainMenu.style.display = "none";
        } else {
            mainMenu.style.display = "block";
        }
    });

    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }