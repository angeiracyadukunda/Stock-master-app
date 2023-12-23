// sale product js

const token = localStorage.getItem("token");
if (token === "" || !token) {
  location.href = "login.html";
}

const product = document.getElementById("product").value;
const quantity = document.getElementById("quantity").value;
const pricePerUnit = document.getElementById("price").value;
if (product.value !== "Select...") {
  // seting quantity for the default value of 1
  document.getElementById("quantity").value = 1;

  const products = async () => {
    try {
      const url = "http://localhost:3000/products";
      await fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((product) => {
          //  displaying Products in the drop down list
          const allProducts = product.products;
          allProducts.map((product) => {
            document.getElementById(
              "product"
            ).innerHTML += `<option key=${product.name} value=${product.pricePerUnit}>${product.name}</option>`;
          });

          // continuing with out complete
          document.getElementById("product").addEventListener("change", () => {
            if (document.getElementById("product").value !== "Select...") {
              document.getElementById("price").value =
                document.getElementById("product").value;

              const price = document.getElementById("price").value;
              const quantity = document.getElementById("quantity").value;
              document.getElementById("totalPrice").value = price * quantity;
            } else {
              document.getElementById("price").value = 0;
              document.getElementById("totalPrice").value = 0;
            }
          });
          document.getElementById("quantity").addEventListener("change", () => {
            const price = document.getElementById("price").value;
            const quantity = document.getElementById("quantity").value;
            document.getElementById("totalPrice").value = price * quantity;
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  products();
} else {
  document.getElementById("price").value = 0;
  document.getElementById("totalPrice").value = 0;
}

// adding eventlistener to the Sale button

document.getElementById("saleBTN").addEventListener("click", (e) => {
  e.preventDefault();
  const product = document.getElementById("product").value;
  if (product === "Select...") {
    document.getElementById("product").style.border = "1px solid red";

    const message = () => {
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.fontSize = "15px";
      document.getElementById("message").style.color = "red";
      document.getElementById("message").style.letterSpacing = "2px";
      document.getElementById(
        "message"
      ).innerHTML = `<p>Select valid product</p>`;
    };

    const messageHide = () => {
      document.getElementById("message").style.display = "none";
    };
    setTimeout(message, 0);
    setTimeout(messageHide, 2000);
    return;
  } else {
    document.getElementById("product").style.border = "1px solid black";

    try {
      const name = document
        .getElementById("product")
        .options[document.getElementById("product").selectedIndex].getAttribute(
          "key"
        );
      const quantity = document.getElementById("quantity").value;
      const pricePerUnit = document.getElementById("price").value;
      const sales = {
        name,
        quantity,
        pricePerUnit,
      };

      const token = localStorage.getItem("token");
      const url = "http://localhost:3000/sales/sell";
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sales),
      })
        .then((data) => data.json())
        .then((result) => {
          const message = () => {
            document.getElementById("message").style.display = "block";
            document.getElementById("message").style.fontSize = "15px";
            document.getElementById("message").style.color = "skyblue";
            document.getElementById("message").style.letterSpacing = "2px";
            document.getElementById(
              "message"
            ).innerHTML = `<p>${result.message}</p>`;
          };

          const messageHide = () => {
            document.getElementById("message").style.display = "none";
          };
          setTimeout(message, 0);
          setTimeout(messageHide, 2000);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }
});
