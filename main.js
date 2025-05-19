let icon=document.getElementById("menu-icon")
let nav__lists = document.querySelector(".navbar");

icon.addEventListener("click", () => {
    nav__lists.classList.toggle("show");
})

// function sendMail() {
//         var params = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             phone: document.getElementById("phone").value,
//             message: document.getElementById("message").value,
//         }
//         const serviceID = "service_7rxwx7l";
//         const templateID = "template_zmlj5dc";
//         emailjs.send(serviceID, templateID, params).then(
//             res => {
//                 document.getElementById("name").value = ""
//                 document.getElementById("email").value = ""
//                 document.getElementById("phone").value = ""
//                 document.getElementById("message").value = ""
//                 console.log(res);
//                 alert("Your message send successfully");
//             }
//     ).catch((err) => console.log(err));
// }


    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
    
        // Clear previous messages
        document.getElementById("error-message").textContent = "";
        document.getElementById("success-message").textContent = "";
    
        // Get field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
    
        // Basic validation
        if (!name || !email || !phone || !message) {
          document.getElementById("error-message").textContent = "All fields are required.";
          return;
        }
    
        // Send email via EmailJS
        const serviceID = "service_7rxwx7l";
        const templateID = "template_zmlj5dc";
        emailjs.send(serviceID, templateID, {
            name: name,
            email: email,
            phone: phone,
            message: message
        })
        .then(() => {
          document.getElementById("success-message").textContent = "Message sent successfully!";
          document.getElementById("contact-form").reset(); // Clear form
        })
        .catch((error) => {
          document.getElementById("error-message").textContent = "Failed to send message. Try again.";
          console.error("EmailJS Error:", error);
        });
      });
        