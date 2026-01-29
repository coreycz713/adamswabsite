//Javascript for basic sections on the page

//Carousel functionality
let slideIndex = 1;
showSlides();

//Initialize carousel on page
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    
    // Auto-advance slides every 5 seconds
    setInterval(function() {
        plusSlides(1);
    }, 5000);
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-items");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("fade");
    }
    
    // Add active class to current dot
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

//MY OLD CODE
//function showSlides() {
  //let i;
  //let slides = document.getElementsByClassName("carousel-items fade");
  //let dots = document.getElementsByClassName("dot");
  //for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";
  //}
  //slideIndex++;
  //if (slideIndex > slides.length) {slideIndex = 1}    
  //for (i = 0; i < dots.length; i++) {
    //dots[i].className = dots[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  //setTimeout(showSlides, 4000); // Change image every 4 seconds
//}

// Contact button function
function myFunction() {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


//OLD BUTTON CODE I MOVED IN TO FILE BLINDLY
 //button onclick="myFunction();

 // Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
