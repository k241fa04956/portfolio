```javascript
/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", function () {

    const preloader =
        document.getElementById("preloader");

    setTimeout(function () {

        preloader.classList.add("hide");

    }, 500);

});



/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    const icon =
        menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* Close mobile menu */

document
    .querySelectorAll(".nav-link")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});



/* =========================================
   TYPING ANIMATION
========================================= */

const typingElement =
    document.getElementById("typing");


const words = [

    "Computer Science Student",

    "Web Developer",

    "Python Programmer",

    "Problem Solver",

    "Tech Enthusiast"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex === words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 50 : 90;

    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(element);

    }
);



/* =========================================
   SKILL BAR ANIMATION
========================================= */

const skillSection =
    document.getElementById("skills");


const skillBars =
    document.querySelectorAll(
        ".progress span"
    );


const skillObserver =
    new IntersectionObserver(

        function (entries) {

            if (
                entries[0].isIntersecting
            ) {

                skillBars.forEach(
                    function (bar) {

                        const width =
                            bar.style.width;

                        bar.style.width = "0";

                        setTimeout(
                            function () {

                                bar.style.width =
                                    width;

                            },
                            200
                        );

                    }
                );

                skillObserver.disconnect();

            }

        },

        {
            threshold: 0.2
        }

    );


skillObserver.observe(skillSection);



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 120;

                const sectionHeight =
                    section.clientHeight;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            return;

        }


        formMessage.textContent =
            "Thank you, " +
            name +
            "! Your message has been submitted.";


        contactForm.reset();

    }
);



/* =========================================
   CURRENT YEAR
========================================= */

const copyright =
    document.querySelector(
        ".copyright"
    );


copyright.textContent =
    "© " +
    new Date().getFullYear() +
    " Kallubavi Akshaya. All Rights Reserved.";
```
