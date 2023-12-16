// const form = document.getElementById("signup-form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");

// form.addEventListener("submit",e =>{
//     e.preventDefault();
//     validateInputs();
// });

// const setError = (element, message)=>{
//     const inputControl = element.parentElement;
//     const errorDisplay =  inputControl.querySelector(".error");

//     errorDisplay.innerText = message;
//     inputControl.classList.add("error");
//     inputControl.classList.remove("success")
// }

// const setSuccess = element =>{
//     const inputControl = element.parentElement;
//     const errorDisplay =inputControl.querySelector('.error');
//     errorDisplay.innerText = '';
//     inputControl.classList.add("success");
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// const  validateInputs = () => {
//     const usernameValue  = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//    const confirmPasswordValue = confirmPassword.value.trim();
     
//    if(usernameValue === ""){
//     setError(usernameValue, 'username is required');

//    }else{
//           setSuccess(username)
//    }

//    if(emailValue === ''){
//     setError(email, 'Email is required')
//    }else if (! isValidEmail(emailValue)){
//     setError(email, 'provide a valid email');
//    }else{
//     setSuccess (email )
//    }
//   if(passwordValue === ''){
//     setError(password, 'password is required');
//   }else if (passwordValue.length < 8 ){
//     setError(password, 'password must be at least 8 characters.')

//   }else{
//     setSuccess(password);
//   }

//   if(confirmPasswordValue === ''){
//     setError(confirmPassword, 'confirm your password');

//     }else if (confirmPasswordValue !== passwordValue){
//         setError(confirmPassword, 'password does not match');
//     }else{
//         setSuccess(confirmPassword);
//     }
//   }
   


const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}
