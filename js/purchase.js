//  purchasing validation

document
  .getElementById("record-product")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    const purchasedProd = document.getElementById("purchasedProd").value;

    const quantityNumber = document.getElementById("quantityNumber").value;

    const pricePerUnit = document.getElementById("pricePurchase").value;

    if (quantityNumber > 0 && pricePerUnit > 0) {
      if (
        purchasedProd === "" ||
        quantityNumber === "" ||
        pricePerUnit === ""
      ) {
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
              const message = () => {
                document.getElementById("message").style.display = "block";
                document.getElementById("message").style.color = "white";
                document.getElementById(
                  "message"
                ).innerHTML = `<p>${recorded.mesage}</p>`;
              };

              const messageHide = () => {
                document.getElementById("message").style.display = "none";
              };
              setTimeout(message, 0);
              setTimeout(messageHide, 4000);
            })
            .catch((error) => console.log(error));
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      const message = () => {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.color = "red";
        document.getElementById(
          "message"
        ).innerHTML = `<p>Price Per Unit  or Quantinty should be greater than 0</p>`;
      };

      const messageHide = () => {
        document.getElementById("message").style.display = "none";
      };
      setTimeout(message, 0);
      setTimeout(messageHide, 4000);
    }
  });
