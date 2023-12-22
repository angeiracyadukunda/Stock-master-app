// sale product js

const token = localStorage.getItem("token");
if (token === "" || !token) {
  location.href = "login.html";
}

const product = document.getElementById("product").value;
const quantity = document.getElementById("quantity").value;
const pricePerUnit = document.getElementById("price").value;

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
          ).innerHTML += `<option key=${product._id}>${product.name}</option>`;
          // displaying price per unit in the input field
        });
        document
          .getElementById("product")
          .addEventListener("onchange", function () {
            document.getElementById("price").value = this.pricePerUnit;
          });
        // document
        //   .getElementById("quantity")
        //   .addEventListener("change", function () {
        //     // document.getElementById("totalPrice").value =
        //   });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
products();

document.getElementById("saleBTN").addEventListener("click", function (e) {
  e.preventDefault();

  if (product === "Select...") {
    document.getElementById("product").style.border = "1px solid red";
  } else if (quantity === "") {
    document.getElementById("product").style.border = "1px solid black";
    document.getElementById("quantity").style.border = "1px solid red";
  } else if (pricePerUnit === "") {
    document.getElementById("product").style.border = "1px solid black";
    document.getElementById("quantity").style.border = "1px solid black";
    document.getElementById("price").style.border = "1px solid red";
  } else {
    document.getElementById("product").style.border = "1px solid black";
    document.getElementById("quantity").style.border = "1px solid black";
    document.getElementById("price").style.border = "1px solid black";

    const prices = quantity * pricePerUnit;

    // validating form of sales
    console.log("Product sold successfully 👏");
  }
});
