var form1 = document.getElementById("form");
var display = document.getElementById("display");
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var Fname = document.getElementById("Fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skill = document.getElementById("skill").value;
    var resumeHTML = "<h2><b>Resume</b></h2> \n<h3>Personal Information</h3>\n<p><b>Name: </b>".concat(name, "</p>\n<p><b>F/Name: </b>").concat(Fname, "</p>\n<p><b>Email: </b>").concat(email, "</p>\n<p><b>Phone No: </b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n<h3>Skills </h3>\n<p>").concat(skill, "</p>\n");
    if (display) {
        display.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display is missing.");
    }
});