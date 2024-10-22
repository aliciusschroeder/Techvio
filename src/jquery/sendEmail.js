/** @format */

// !Initialize EmailJS with your user ID
emailjs.init("2sZoD0Sa-NFwPO-2q");

const btn = document.getElementById("button");
const form = document.getElementById("contactForm");
const sentMess = document.querySelector(".sent");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let btnVal = btn.innerText;
  btn.innerText = "Sending...";

  const serviceID = "service_ys8nks8"; //? Your EmailJS service ID
  const templateID = "template_e57p2pc"; //? Your EmailJS template ID

  // !Send the form data using EmailJS
  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerText = btnVal;
      sentMess.classList.add("active");

      //TODO: Clear the form fields
      form.reset();
    },
    (err) => {
      btn.value = "Send Email"; // Reset the button value in case of an error
      alert(JSON.stringify(err)); // Display error message
    }
  );
});
