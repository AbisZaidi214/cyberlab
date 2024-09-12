let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});


    
const TARGET_VALUE1 = 2000;
const TARGET_VALUE2 = 1000;
const TARGET_VALUE3 = 500;

const incrementSpeed = 10; 

function incrementCount(id, targetValue) {
    const countElement = document.getElementById(id);
    const currentCount = parseInt(countElement.textContent, 10);

    if (currentCount < targetValue) {
        countElement.textContent = currentCount + 1;
    }
}

function startCounting() {
    const interval1 = setInterval(() => {
        incrementCount('count1', TARGET_VALUE1);
    }, incrementSpeed);

    const interval2 = setInterval(() => {
        incrementCount('count2', TARGET_VALUE2);
    }, incrementSpeed);

    const interval3 = setInterval(() => {
        incrementCount('count3', TARGET_VALUE3);
    }, incrementSpeed);

   
    const clearIntervals = setInterval(() => {
        if (parseInt(document.getElementById('count1').textContent, 10) >= TARGET_VALUE1) {
            clearInterval(interval1);
        }
        if (parseInt(document.getElementById('count2').textContent, 10) >= TARGET_VALUE2) {
            clearInterval(interval2);
        }
        if (parseInt(document.getElementById('count3').textContent, 10) >= TARGET_VALUE3) {
            clearInterval(interval3);
        }
        if (parseInt(document.getElementById('count1').textContent, 10) >= TARGET_VALUE1 &&
            parseInt(document.getElementById('count2').textContent, 10) >= TARGET_VALUE2 &&
            parseInt(document.getElementById('count3').textContent, 10) >= TARGET_VALUE3) {
            clearInterval(clearIntervals); 
        }
    }, incrementSpeed);
}


document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.getElementById('stats-section');

    const observerOptions = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    observer.observe(statsSection);
});

