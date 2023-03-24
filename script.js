const textElement = document.querySelector('.text');
const cursorElement = document.querySelector('.cursor');
const words = ['Software Developer', 'Mathematician', 'Paulaner Spezi Connoisseur'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
    const currentWord = words[wordIndex % words.length];

    if (isDeleting) {
        letterIndex--;
        delay = 100;
    } else {
        letterIndex++;
        delay = 200;
    }

    textElement.textContent = currentWord.slice(0, letterIndex);

    if (letterIndex === currentWord.length) {
        isDeleting = true;
        delay = 1000;
    } else if (letterIndex === 0) {
        isDeleting = false;
        wordIndex++;
        delay = 200;
    }

    setTimeout(type, delay);
}

type();


document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills-section');
    const skills = document.querySelectorAll('.skill');

    const triggerAnimation = () => {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight * 0.75) { // Adjust the multiplier (0.75) to control when the animation triggers
            for (let i = 0; i < skills.length; i++) {
                if (skills[i].getAttribute('data-animate') === 'false') {
                    setTimeout(() => {
                        skills[i].classList.add('animate');
                        skills[i].setAttribute('data-animate', 'true');
                    }, i * 100);
                }
            }
        }
    };

    window.addEventListener('scroll', triggerAnimation);
    triggerAnimation(); // Call the function once on page load to handle cases where the section is already visible
});
