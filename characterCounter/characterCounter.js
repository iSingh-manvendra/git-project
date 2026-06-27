 let textbox = document.getElementById("text");
        let counter = document.getElementById("counter");
        let subBTN = document.getElementById("btnSubmit");

        text.addEventListener("input", function () {
            let length = textbox.value.length;
            counter.textContent = length;
            if (length > 50) {
                textbox.style.color = "red";
            }
            else {
                textbox.style.color = "Black";
            }
        });

        subBTN.onclick = function () {
            text = textbox.value;
            if (text.length > 50) {
                console.log("Word limit exceed");
                alert("Word limit exceed maximum word limit 50");
            }
            else {
                let post = document.querySelector(".post").innerHTML = text;
                console.log(text);
            }
        };

        let clearBtn = document.getElementById("clearBtn");
        clearBtn.addEventListener("click", () => {
            textbox.value = "";
        });

        let post = document.querySelector(".post");
        let delPost = document.getElementById("delPost");
        delPost.addEventListener("click", () => {
            post.innerHTML = "";
        });