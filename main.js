const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        header.classList.remove("scrolled");
        goUp.style.opacity = "0";
    } else if(this.scrollY >= 200) {
        header.classList.add("scrolled");
        goUp.style.opacity = "1";
    }
});

//
const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});

// faq
const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));

questions.forEach(q => {
    q.addEventListener("click", function() {
        for(let i = 0; i < questions.length; i++) {
            questions[i].classList.remove("active");
        }
        answers.forEach(a => a.classList.add("hide"));
        this.classList.add("active");
        this.nextElementSibling.classList.remove("hide");
    });
});