document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(navLink => {
      navLink.classList.remove('active');
    });
    this.classList.add('active');
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 75; // Adjust for navbar
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// Scroll to top when profile image is clicked
document.querySelector('.profile-icon').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({
    top: 0, // Scroll to the top
    behavior: 'smooth' // Smooth scroll
  });
});

// script.js
function displayImage(element) {
    const imageUrl = element.getAttribute('data-image'); // Get the image URL from data attribute
    const skillImage = document.getElementById('skill-image'); // Get the image element

    skillImage.src = imageUrl; // Set the image source
    skillImage.style.display = 'block'; // Show the image
}

function openImageGallery() {
  var imageGallery = document.getElementById("image-gallery");
  imageGallery.style.display = "flex";
}

document.addEventListener("click", function(event) {
  var imageGallery = document.getElementById("image-gallery");
  if (event.target == imageGallery) {
    imageGallery.style.display = "none";
  }
});


// script.js
function openResumeModal() {
    document.getElementById("resume-modal").style.display = "flex"; // Show the modal
}

function closeResumeModal() {
    document.getElementById("resume-modal").style.display = "none"; // Hide the modal
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("resume-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};