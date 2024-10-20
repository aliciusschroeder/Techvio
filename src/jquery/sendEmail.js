/** @format */

// !Initialize EmailJS with your user ID
emailjs.init("2sZoD0Sa-NFwPO-2q");

const btn = document.getElementById("button");
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerText = "Sending..."; // Show a sending state on the button

  const serviceID = "service_ys8nks8"; //? Your EmailJS service ID
  const templateID = "template_e57p2pc"; //? Your EmailJS template ID

  // !Send the form data using EmailJS
  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerText = "Send Message"; // Reset the button value
      alert("Sent!"); // Show success alert

      //TODO: Clear the form fields
      form.reset();
    },
    (err) => {
      btn.value = "Send Email"; // Reset the button value in case of an error
      alert(JSON.stringify(err)); // Display error message
    }
  );
});
