document.getElementById("signup").addEventListener("click", (e) => {
  e.preventDefault();

  const yourName = document.getElementById("yourName").value;
  const yourEmail = document.getElementById("yourEmail").value;
  const yourPass = document.getElementById("yourPass").value;
  const comfirmPass = document.getElementById("comfirmPass").value;

  let strongPassword = "";

  if (yourPass.length >= 8) {
    strongPassword = yourPass;
  } else {
    return alert("password must be at least 8 characters");
  }
  if (
    yourName === "" ||
    yourEmail === "" ||
    yourPass === "" ||
    comfirmPass === ""
  ) {
    return alert("fill out all fields");
  }
  if (strongPassword === comfirmPass) {
    const createAccount = async () => {
      try {
        const userInfo = {
          yourName,
          yourEmail,
          strongPassword,
        };

        const url = "http:localhost:3000/users/signup";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        })
          .then((data) => data.json())
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    };
    createAccount();
  } else {
    return alert("Password Should match");
  }
});
