let addTsk = document.querySelector("#add-task");
let taskContainer = document.querySelector(".task-container");
let select = document.querySelector(".select");

let task = () => {
  
  let taskName = document.getElementById("task-name").value;
  if (taskName !== "") {
    document.getElementById("task-name").value = "";

    let taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = ` <button type="button" class="checkbox"> <i class="fa-regular fa-circle" ></i></button>
 <span > ${taskName} </span> 
 <div class="mainpulate">

 <button type="button" class="edit"><i class="fa-regular fa-pen-to-square"></i></button> <button type="button" class="delete"><i class="fa-solid fa-xmark"></i></button>
 </div>
`;

    taskContainer.appendChild(taskElement);
    DeleteFunctionality();
    CheckFunctionality();
    editFunctionality();
  }
};

addTsk.addEventListener("click", task);

function DeleteFunctionality() {
  let deleteTask = document.querySelectorAll(".delete");

  deleteTask.forEach((button) => {
    button.onclick = () => {
      button.parentElement.parentElement.remove();
    };
  });
}
function CheckFunctionality() {
  let checkTask = document.querySelectorAll(".checkbox");

  checkTask.forEach((button) => {
    button.onclick = () => {
      let child = button.querySelector("i");
      button.removeChild(child);
      button.innerHTML =
        '<i class="fa-regular fa-circle-check" style="color: #4e5abd;"></i>';
      let taskText = button.nextElementSibling;
      taskText.classList.add("task-text-style");
    };
  });
}

function editFunctionality() {
  let editTask = document.querySelectorAll(".edit");

  editTask.forEach((button) => {
    button.onclick = () => {
      document.getElementById("task-name").focus();
      addTsk.textContent = "Edit";

      preText = button.parentElement.previousElementSibling.textContent;
      document.getElementById("task-name").value = preText;
      addTsk.onclick = () => {
        button.parentElement.parentElement.remove();
        addTsk.textContent = "Add";
      };
    };
  });
}

let deleteAll = document.querySelector(".deleteAll");
deleteAll.onclick = () => {
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
};
let selectAll = document.querySelector(".selectAll");
selectAll.onclick = () => {
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    let checkButton = task.querySelector("button");
    checkButton.innerHTML =
      '<i class="fa-regular fa-circle-check" style="color: #4e5abd;"></i>';
    let taskText = checkButton.nextElementSibling;
    taskText.classList.add("task-text-style");
  });
};

let selectfun = () => {
  select.classList.add("hidden");
  selectAll.classList.add("hidden");
  deleteAll.classList.add("hidden");
  let deselect = document.createElement("button");
  deselect.className = "deselect";
  let textNode = document.createTextNode("Deselect");
  deselect.append(textNode);

  taskContainer.prepend(deselect);
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.innerHTML = '<input type="checkbox" id="select">' + task.innerHTML;
  });
  let options = document.createElement("div");
  options.className = "options";
  options.innerHTML =
    ' <button class="deletemult"> <i class="fa-solid fa-trash-can"></i></button> <button class="selectmult"><i class="fa-solid fa-check"></i></button>';

  taskContainer.append(options);
  let c = document.querySelectorAll("#select");
  let deletemult = document.querySelector(".deletemult");

  deletemult.onclick = () => {
    c.forEach((box) => {
      if (box.checked) {
        box.parentElement.remove();
      }
    });
    select.classList.add("visible");
    selectAll.classList.add("visible");
    deleteAll.classList.add("visible");
    deselect.remove()

    c.forEach((b) => {
      b.remove();
    });
    options.remove();
  };

  let selectmult = document.querySelector(".selectmult");

  selectmult.onclick = () => {
    c.forEach((box) => {
      if (box.checked) {
        box.nextElementSibling.innerHTML =
          '<i class="fa-regular fa-circle-check" style="color: #4e5abd;"></i>';
        box.nextElementSibling.nextElementSibling.classList.add(
          "task-text-style"
        );
      }
    });
    c.forEach((b) => {
      b.remove();
    });
    options.remove();
    deselect.remove();
    select.classList.remove("hidden");
    selectAll.classList.remove("hidden");
    deleteAll.classList.remove("hidden");
    deselect.remove()

    DeleteFunctionality();
    CheckFunctionality();
    editFunctionality();
  };

  deselect.onclick = () => {
    c.forEach((b) => {
      b.remove();
    });
    options.remove();
    select.classList.remove("hidden");
    selectAll.classList.remove("hidden");
    deleteAll.classList.remove("hidden");
    DeleteFunctionality();
    CheckFunctionality();
    editFunctionality();
    deselect.remove();
  };
};
select.addEventListener("click", selectfun);
