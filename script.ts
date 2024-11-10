//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
   event.preventDefault();

  // Get reference to form by ids

   //type asssertion

   const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;



   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement;
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const experianceElement = document.getElementById('experiance') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;
   const diplomaorcertificatesElement = document.getElementById('diplomaorcertificates') as HTMLInputElement;


  
   if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement && diplomaorcertificatesElement ){
     
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experiance = experianceElement.value;
    const skills = skillsElement.value;
    const diplomaorcertificates = diplomaorcertificatesElement.value;
    

//Picture Element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : ''


   



   //Create Resume Output
const resumeOutput = `
   <h2>Resume</h2>
   ${profilePictureFile ?  `<img src= ${profilePictureURL} alt= "Profile Picture" class= "profilePicture style="width: 300px; height: 300px/>  " `   : ""}
   <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>

   <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>

   <p><strong>Contact Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

   

   <h3>Education</h3>
   <p id="edit-education" class="editable" >${education}</p>

   <h3>Experiacne</h3>
   <p id="edit-experiance" class="editable">${experiance}</p>

   <h3>Skills</h3>
   <p id="edit-skills" class="editable">${skills}</p>

     <h3>Diploma Or Certificates</h3>
   <p id="edit-diplomaorcertificates" class="editable">${diplomaorcertificates}</p>

   `;




   //Display the resume output

  const resumeOutputElemnent = document.getElementById('resumeOutput')
  if (resumeOutputElemnent){
    resumeOutputElemnent.innerHTML = resumeOutput
    makeEditable();
  } 

   } else{
    console.error('one or more output are missing');
    
   }

})

function makeEditable(){
  const editableElement = document.querySelectorAll('.editable')
  editableElement.forEach(element =>{
    element.addEventListener('click' , function(){
      const currentElement = element as HTMLElement
      const currentValue = currentElement.textContent || "";

      //Replace content
      if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {

        const input = document.createElement ('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing-input')


        input.addEventListener('blur' , function(){
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline'
          input.remove
        })







        currentElement.style.display = 'none'
        currentElement.parentNode?.insertBefore(input, currentElement)
        input.focus

      }

    })
  })

}