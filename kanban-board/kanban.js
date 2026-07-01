const todo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
const taskHeading = document.querySelector("#taskHeading");
const taskDiscription = document.querySelector("#taskDiscription");
const addTask = document.querySelector("#addTask");
const myModal = document.querySelector("#myModal");

let dragElement = null;

// for listen all task 
tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // console.log("dragging",e);
        dragElement = task;
    })
});

//adding hover-over class effect on columns when user drag task
function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    // this help to drop the element because browser not allowed
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    // droping task
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("dropped", dragElement, column);
        column.appendChild(dragElement);
        column.classList.remove("hover-over");   //this will remove hover effect after element droped

    });

    // adding count funtion using loop
    
};

//calling function for all column
addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);



const taskContent = document.querySelector(".taskContent");
// creating task
addTask.addEventListener("click", () => {
    const task = document.createElement("div");
    task.className = "task px-2 py-1 rounded-3 mb-1";
    task.draggable = true;
    task.innerHTML = ` <h5>${taskHeading.value}</h5>
                        <p>${taskDiscription.value}</p>
                        <button class="btn d-flex justify-content-center align-items-center"
                            id="delete-btn">Delete</button>`

    taskContent.appendChild(task);
    
    task.addEventListener("drag", (e) => {
        dragElement = task;
    })
    
});
