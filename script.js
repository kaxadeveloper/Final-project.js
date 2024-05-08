// header 
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// home_section

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateHomeSection() {
    var homeSection = document.getElementById('home');
    var homeContent = document.querySelector('.home_content');

    if (isInViewport(homeSection)) {
        homeContent.style.transform = 'translateX(0)';
        homeSection.style.backgroundPosition = 'center left';
    }
}

window.addEventListener('scroll', function () {
    animateHomeSection();
});

animateHomeSection();

function animateHomeSection() {
    var homeSection = document.getElementById('home');
    var homeContent = document.querySelector('.home_content');

    if (isInViewport(homeSection)) {
        homeContent.style.transform = 'translateX(0)';
        homeSection.style.backgroundPosition = 'center left';
    } else {
        homeContent.style.transform = 'translateX(-100%)';
    }
}

// form_section 

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var threshold = 1;
    return (
        rect.top <= (1 - threshold) * window.innerHeight &&
        rect.bottom >= threshold * window.innerHeight
    );
}

function handleBookFormVisibility() {
    var bookForm = document.getElementById('book-form');

    if (!isInViewport(bookForm)) {
        bookForm.style.opacity = '0';
    } else {
        bookForm.style.opacity = '1';
    }
}

window.addEventListener('scroll', function () {
    handleBookFormVisibility();
});

handleBookFormVisibility();


// section_about

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollHandler() {
    var aboutSection = document.getElementById('about');
    var videoContainer = document.querySelector('.about .video-container');
    var content = document.querySelector('.about .about_content');

    if (isInViewport(aboutSection)) {
        videoContainer.classList.add('show');
        content.classList.add('show');
    } else {
        videoContainer.classList.remove('show');
        content.classList.remove('show');
    }
}

window.addEventListener('scroll', scrollHandler);

scrollHandler();


// section_destination 

const initSlider = () => {
    // Encapsulating within a function scope to avoid global pollution
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    let maxScrollLeft = 0; // Initialize to 0

    // Function to initialize slider scrollbar
    const initializeSliderScrollbar = () => {
        maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        updateScrollThumbPosition(); // Update thumb position initially
    };

    // Function to handle mouse down on scrollbar thumb
    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    // Function to handle slider button clicks
    const handleSlideButtonClick = (direction) => {
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    // Function to handle slide button visibility
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    // Function to update scrollbar thumb position
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Event listeners setup
    scrollbarThumb.addEventListener("mousedown", handleMouseDown);
    slideButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const direction = index === 0 ? -1 : 1; // Assuming the first button is for "previous" and the second one is for "next"
            handleSlideButtonClick(direction);
        });
    });

    // Initialize scrollbar and set up scroll event listener
    initializeSliderScrollbar();
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });

    // Handle window resize event
    window.addEventListener("resize", initializeSliderScrollbar);
};

window.addEventListener("load", initSlider);


/* section_services */

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".ser-box-container");
    const prevButton = document.getElementById("pre-slide");
    const nextButton = document.getElementById("nex-slide");

    const scrollAmount = 300; 

    prevButton.addEventListener("click", function() {
        container.scrollLeft -= scrollAmount;
    });

    nextButton.addEventListener("click", function() {
        container.scrollLeft += scrollAmount;
    });
});

// section_gallery

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".gal-box-container");
    const prevButton = document.getElementById("gal-pre-slide");
    const nextButton = document.getElementById("gal-nex-slide");

    const scrollAmount = 350; // Adjust this value as needed

    prevButton.addEventListener("click", function() {
        container.scrollLeft -= scrollAmount;
    });

    nextButton.addEventListener("click", function() {
        container.scrollLeft += scrollAmount;
    });
});


/* section_blogs */

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".blog-box-container");

    const scrollAmount = container.clientWidth; // Scroll by the width of the container

    document.getElementById("blog-pre-slide").addEventListener("click", function() {
        container.scrollLeft -= scrollAmount;
    });

    document.getElementById("blog-nex-slide").addEventListener("click", function() {
        container.scrollLeft += scrollAmount;
    });
});















