// sale product js
document.getElementById("saleBTN").addEventListener("click", function (e) {
  e.preventDefault();

  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const pricePerUnit = document.getElementById("price").value;

  if (product === "select") {
    document.getElementById("product").style.border = "1px solid red";
  } else if (quantity === "") {
    document.getElementById("quantity").style.border = "1px solid red";
  } else if (pricePerUnit === "") {
    document.getElementById("price").style.border = "1px solid red";
  } else {
    document.getElementById("product").style.border = "1px solid black";
    document.getElementById("quantity").style.border = "1px solid black";
    document.getElementById("price").style.border = "1px solid black";

    // Calculating total price

    const prices = quantity * pricePerUnit;

    const totalPrice = document.getElementById("totalPrice");
    if (totalPrice && prices) {
      totalPrice.value = prices;
    }

    // validating form of sales
    console.log("Product sold successfully 👏");
  }
});





