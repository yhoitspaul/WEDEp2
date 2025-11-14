//this finds the lighthouse with it's elements.....
const lighthouse = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close');

  //this finds all images in the gallery.....
const galleryImages = document.querySelectorAll('.gallery img');

//something will happen when an image is clicked.....
galleryImages.forEach(image => {
  img.addEventListener('click', () => {
      const fullSizeImage = img.getAttribute('data-full');
      lightboxImg.setAttribute('src', fullSizeImage);
      lightbox.style.display = 'block';
  });
});

//something will happen when the close button is clicked.....
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll(".service-item");

    items.forEach(item => {
        let serviceName = item.getAttribute('.service-item');
        if (serviceName.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
document.getElementById("enquiryForm").addEventListener("Submit", function(event) {
  event.preventDefault();

  let service = document.getElementById("service").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let quote;
  if (service === "Oil filter change") {
      quote = "R1000";
  } else if (service === "Software update") {
      quote = "R1500";
  } else if (service === "Full service") {
      quote = "R3000";
  } else if (service === "Car wash and vaccum") {
      quote = "R500";
  } else {
      quote = "Please select a service.";
  }

  document.getElementById("quoteResponce").innerHTML = `
  <h3>Thank you, ${name}!</h3>
  <p>We have received your enquiry for a ${service}.</p>
  <p>Your estimated quote is: <strong>${quote}</strong></p>
  <p>We will contact you shortly at ${email}.</p>
  <p>Your message: ${message}</p>
  `;
});