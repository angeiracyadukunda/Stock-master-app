//  purchasing validation 
 
document.getElementById("record-product").addEventListener("click",(e) => {
    e.preventDefault();
   
  const purchasedProd = document.getElementById('purchasedProd').value;
  
 const quantityNumber = document.getElementById('quantityNumber').value;

 const pricePerUnit = document.getElementById('pricePurchase').value;

 if(purchasedProd === "" || quantityNumber === "" || pricePerUnit === ""){
    alert("please fill out all fields");
    
 }else{
    alert("product purchased successfully")
 }


  })