// 1. Show or hide the menu on small screens
var menuBtn = document.getElementById("menu-btn");
var navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// 2. Show a greeting based on the time of day
var hour = new Date().getHours();
var greeting = document.getElementById("greeting");

if (hour < 12) {
  greeting.textContent = "Good morning! Welcome to my website.";
} else if (hour < 17) {
  greeting.textContent = "Good afternoon! Welcome to my website.";
} else {
  greeting.textContent = "Good evening! Welcome to my website.";
}

// 3. Open a bigger picture when you click an image in the gallery
var galleryImages = document.querySelectorAll(".gallery img");
var popup = document.getElementById("popup");
var popupImg = document.getElementById("popup-img");
var closeBtn = document.getElementById("close-btn");

for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function () {
    popup.style.display = "flex";
    popupImg.src = this.src;
  });
}

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// 4. Check the contact form before sending
var form = document.getElementById("contact-form");
var formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.style.color = "red";
  } else if (email.indexOf("@") === -1) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you " + name + "! Your message has been sent.";
    formMessage.style.color = "green";
    form.reset();
  }
});

// 5. Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
