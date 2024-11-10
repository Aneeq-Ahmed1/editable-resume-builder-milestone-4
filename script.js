var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get reference to form by ids
    //type asssertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    var diplomaorcertificatesElement = document.getElementById('diplomaorcertificates');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement && diplomaorcertificatesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        var diplomaorcertificates = diplomaorcertificatesElement.value;
        //Picture Element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //Create Resume Output
        var resumeOutput = "\n   <h2>Resume</h2>\n   ".concat(profilePictureFile ? "<img src= ".concat(profilePictureURL, " alt= \"Profile Picture\" class= \"profilePicture style= width: 300px; height: 300px > \" ") : "", "\n   <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n\n   <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n\n   <p><strong>Contact Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n   \n\n   <h3>Education</h3>\n   <p id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n\n   <h3>Experiacne</h3>\n   <p id=\"edit-experiance\" class=\"editable\">").concat(experiance, "</p>\n\n   <h3>Skills</h3>\n   <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n     <h3>Diploma Or Certificates</h3>\n   <p id=\"edit-diplomaorcertificates\" class=\"editable\">").concat(diplomaorcertificates, "</p>\n\n   ");
        //Display the resume output
        var resumeOutputElemnent = document.getElementById('resumeOutput');
        if (resumeOutputElemnent) {
            resumeOutputElemnent.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //Replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove;
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus;
            }
        });
    });
}
