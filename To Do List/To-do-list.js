    let Do_list = [];
        function update_list() {
            let ToDoList = document.querySelector(".To_Do_List");
            ToDoList.innerHTML = "";
            Do_list.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item;
                ToDoList.appendChild(li);
            });
        }
        let addBtn = document.querySelector(".addBtn").onclick = function () {
            let inputItem = document.querySelector(".inputItem").value.trim();
            if (inputItem !== "") {
                Do_list.push(inputItem);
                document.querySelector(".inputItem").value = "";
                update_list();
                console.log(Do_list);
            }
        }
        let removeBtn = document.querySelector(".removeBtn").onclick = function () {
            let removeItem = document.querySelector(".removeItem").value.trim();
            if (removeItem !== "") {
                Do_list = Do_list.filter(item => item !== removeItem)
                document.querySelector(".removeItem").value = "";
                update_list();
                console.log(Do_list);
            }
            else{
                alert("Not in list!");
                Do_list = Do_list.filter(item => item !== removeItem)
                document.querySelector(".removeItem").value = "";
            }
        }