//  purchasing validation

document
  .getElementById("record-product")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    const purchasedProd = document.getElementById("purchasedProd").value;

    const quantityNumber = document.getElementById("quantityNumber").value;

    const pricePerUnit = document.getElementById("pricePurchase").value;

    if (purchasedProd === "" || quantityNumber === "" || pricePerUnit === "") {
      alert("Fill out all fields");
    } else {
      // STARTING FETCHING PROCESS

      try {
        const name = document.getElementById("purchasedProd").value;
        const quantity = document.getElementById("quantityNumber").value;
        const pricePerUnit = document.getElementById("pricePurchase").value;
        const newProduct = {
          name,
          quantity,
          pricePerUnit,
        };

        const token = localStorage.getItem("token");
        const url = "http://localhost:3000/product";
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newProduct),
        })
          .then((product) => product.json())
          .then((recorded) => {
            console.log(recorded);
            alert(recorded.mesage);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }
  });
