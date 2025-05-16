let icon=document.getElementById("menu-icon")
let nav__lists = document.querySelector(".navbar");

icon.addEventListener("click", () => {
    nav__lists.classList.toggle("show");
})

function sendMail() {
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    }
    const serviceID = "service_7rxwx7l";
    const templateID = "template_zmlj5dc";
emailjs.send(serviceID, templateID, params).then(
    res => {
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        document.getElementById("phone").value=""
        document.getElementById("message").value=""
        console.log(res);
        alert("Your message send successfully")
        
    }
).catch((err)=>console.log(err))
}