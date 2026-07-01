let btn = document.getElementById("calculate").onclick = function(){
            let billAmount = document.getElementById("billAmount").value;
            let percentage = document.getElementById("percentage").value;
            let tip = (parseInt(percentage)/100) * parseInt(billAmount);
            totalBill = parseInt(billAmount) + parseInt(tip);
            console.log(totalBill);
            let tipOutput = document.getElementById("output").innerText = "Total bill:₹" + totalBill;
        }