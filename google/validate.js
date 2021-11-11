
 function validate()
{ 
   if( document.StudentRegistrationForm.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistrationForm.textnames.focus() ;
     return false;
   }
   if( document.StudentRegistrationForm.age.value == "" )
   {
     alert( "Please provide your age!" );
     document.StudentRegistrationForm.age.focus() ;
     return false;
   }
   
   if( document.StudentRegistrationForm.university.value == "" )
   {
     alert( "Please provide your University!" );
     document.StudentRegistration.university.focus() ;
     return false;
   }
  
   
   if( document.StudentRegistrationForm.Subject.value == "-1" )
   {
     alert( "Please provide your Subject!" );
     document.StudentRegistrationForm.Subject.focus() ;
     return false;
   }    
}
   
button.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    var cln = document.getElementsByClassName("user")[0].cloneNode(true);
    document.getElementById("users").insertBefore(cln,this);
    return false;
 });
  
   
   
 