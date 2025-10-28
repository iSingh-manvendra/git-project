let CreateBill = document.querySelector("#Create_bill");
CreateBill.addEventListener("click", () => {
  let branch = document.querySelector("#branch").value;
  let CustomerName = document.querySelector("#customerName").value;
  let mobileNo = document.querySelector("#contNo").value;
  console.log("Branch:", branch);
  console.log("Name:", CustomerName);
  console.log("Phone no.", mobileNo);



  let food_item1 = document.querySelector("#food_item1").value;
  let Item1Quant = document.querySelector("#Item1Quant").value;
  let item1price = food_item1 * Item1Quant;
  console.log(item1price);
  document.querySelector("#out1").innerHTML = item1price + "₹";

  let food_item2 = document.querySelector("#food_item2").value;
  let Item2Quant = document.querySelector("#Item2Quant").value;
  let item2price = food_item2 * Item2Quant;
  console.log(item2price);
  document.querySelector("#out2").innerHTML = item2price + "₹";

  let food_item3 = document.querySelector("#food_item3").value;
  let Item3Quant = document.querySelector("#Item3Quant").value;
  let item3price = food_item3 * Item3Quant;
  console.log(item3price);
  document.querySelector("#out3").innerHTML = item3price + "₹";

  let food_item4 = document.querySelector("#food_item4").value;
  let Item4Quant = document.querySelector("#Item4Quant").value;
  let item4price = food_item4 * Item4Quant;
  console.log(item4price);
  document.querySelector("#out4").innerHTML = item4price + "₹";

  let foodCost = item1price + item2price + item3price + item4price;
  let gst = (18 / 100) * foodCost;
  let Bill = foodCost + gst;

  let totalBill = document.querySelector("#totalBill");
  let GST = document.querySelector("#gst");
  GST.innerHTML = "GST: " + gst;
  totalBill.innerHTML = "Total Bill: " + Bill;
});

// Clear btn
let clearBtn = document.querySelector("#Clear");
clearBtn.addEventListener("click", () => {
  totalBill = document.querySelector("#totalBill").innerHTML = "Total Bill:";
  document.querySelector("#gst").innerHTML = "GST:";
  document.querySelector("#customerName").value = "";
  document.querySelector("#contNo").value = "";
  const outs = document.querySelectorAll(".div-out");
  outs.forEach(div => div.innerHTML = "₹");
});
