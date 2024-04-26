// Function to send form data to server
function sendForm() {
  // Get form data
  var formData = new FormData(document.getElementById("contact-form"));

  // Send form data to server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Display success message
        document.getElementById("response").innerHTML = xhr.responseText;
      } else {
        // Display error message
        document.getElementById("response").innerHTML = "Oops! Something went wrong. Please try again later.";
      }
    }
  };
  xhr.send(formData);
}

// Form submission event listener
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  sendForm(); // Call sendForm function to send data asynchronously
});