var formE1 = document.querySelector("#task-form");
var taskToDoE1 = document.querySelector("#task-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input are empty (validate)
    if (taskNameInput === "" || taskTypeInput === "") {
        alert("You need to fill out the task form!");
        return false;
    }
    
formE1.reset();

   // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj); 
    };

    var createTaskEl = function(taskDataObj) {
     //create list item
     var listItemE1 = document.createElement("li");
     listItemE1.className = "task-item";

   // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemE1.appendChild(taskInfoEl);
  console.dir(listItemE1);

         // add list item to list
  taskToDoE1.appendChild(listItemE1);
    };

 formE1.addEventListener("submit", taskFormHandler);



