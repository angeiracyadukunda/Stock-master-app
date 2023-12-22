// Creating Account

document.getElementById("signup").addEventListener("click", async (e) => {
  e.preventDefault();

  const userName = document.getElementById("yourName").value;
  const email = document.getElementById("yourEmail").value;
  const password = document.getElementById("yourPass").value;
  const confirmPass = document.getElementById("comfirmPass").value;

  if (password.length < 8) {
    return alert("Password must be at least 8 characters");
  }

  if (
    userName === "" ||
    email === "" ||
    password === "" ||
    confirmPass === ""
  ) {
    document.getElementById("message").style.color = "red";
    const message = () => {
      document.getElementById("message").style.display = "block";
      document.getElementById(
        "message"
      ).innerHTML = `<p>Fill out all fields</p>`;
    };

    const messageHide = () => {
      document.getElementById("message").style.display = "none";
    };
    setTimeout(message, 0);
    setTimeout(messageHide, 2000);
    return;
  }

  if (password !== confirmPass) {
    document.getElementById("message").style.color = "red";
    const message = () => {
      document.getElementById("message").style.display = "block";
      document.getElementById(
        "message"
      ).innerHTML = `<p>Password should match</p>`;
    };

    const messageHide = () => {
      document.getElementById("message").style.display = "none";
    };
    setTimeout(message, 0);
    setTimeout(messageHide, 2000);
    return;
  }

  const userInfo = {
    userName,
    email,
    password,
  };
  function clear() {
    document.getElementById("yourName").value = "";
    document.getElementById("yourEmail").value = "";
    document.getElementById("yourPass").value = "";
    document.getElementById("comfirmPass").value = "";
  }

  try {
    const url = "http://localhost:3000/users/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (data.message === `User with <b>${userInfo.email}</b> have been taken`) {
      document.getElementById("message").style.color = "red";
    } else document.getElementById("message").style.color = "skyblue";
    const message = () => {
      document.getElementById("message").style.display = "block";
      document.getElementById("message").innerHTML = `<p>${data.message}</p>`;
    };

    const messageHide = () => {
      document.getElementById("message").style.display = "none";
    };
    setTimeout(message, 0);
    setTimeout(messageHide, 2000);
    clear();
  } catch (error) {
    console.error("Error:", error);
  }
});
