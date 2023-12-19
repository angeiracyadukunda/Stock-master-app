document.getElementById ('signup').addEventListener('click', (e) => {
    e.preventDefault();

    const yourName = document.getElementById('yourName').value;
    const yourEmail = document.getElementById('yourEmail').value;
    const yourPass = document.getElementById('yourPass').value;
    const comfirmPass = document.getElementById('comfirmPass').value;
    const  checkbox = document.getElementById('checkbox').value;

    let strongPassword = "";

    if(yourPass.length >= 8 ){
        strongPassword = yourPass;
      
    }else{
      return  alert ('password must be at least 8 characters');

    }
    if(yourName==="" || yourEmail==="" || yourPass==="" || comfirmPass===""){
         return alert ('fill out all fields');
    } if(strongPassword === comfirmPass ){

            return alert("information are correct");
    } 

})

