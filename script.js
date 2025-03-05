let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("")
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className= "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)



                                      // skill animation

 document.addEventListener("DOMContentLoaded", function () {
    let skillBars = document.querySelectorAll(".skill-bar .bar span");

    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                }
            });
        },
        { threshold: 0.5 } // Adjust threshold if needed
    );

    skillBars.forEach((bar) => {
        bar.style.animationPlayState = "paused"; // Ensure animation is paused initially
        observer.observe(bar);
    });
});


                                             // circle skill

const circles = document.querySelectorAll(".circle");

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                var dots = elem.getAttribute("data-dots");
                var marked = elem.getAttribute("data-percent");
                var percent = Math.floor(dots * marked / 100);
                var points = "";
                var rotate = 360 / dots;

                for (let i = 0; i < dots; i++) {
                    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
                }

                elem.innerHTML = points;

                const pointsMarked = elem.querySelectorAll(".points");
                for (let i = 0; i < percent; i++) {
                    pointsMarked[i].classList.add("mark");
                }

                observer.unobserve(elem); // Stop observing after animation runs
            }
        });
    }, { threshold: 0.5 }); // Triggers when 50% of the element is visible

    circles.forEach(circle => {
        observer.observe(circle);
    });
});



const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".navlist a"); // Select all menu links

// Toggle menu open/close on menu icon click
menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("bx-x");  // Rotate the menu icon
    navList.classList.toggle("open");   // Show/hide the menu
});

// Close menu when clicking any menu link
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        menuIcon.classList.remove("bx-x"); // Remove menu icon rotation
        navList.classList.remove("open");  // Hide menu
    });
});

// Close menu when scrolling
window.addEventListener("scroll", function () {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
});

AOS.init({
    duration: 1000,  // Animation duration in ms
    once: true,      // Animation happens only once
});






                            