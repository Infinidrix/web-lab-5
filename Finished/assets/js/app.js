// Define state variables
let isAscending = true;

// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
const desendingBtn = document.querySelector("#descending-btn");
const ascendingBtn = document.querySelector("#ascending-btn")

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', modifyTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, { "constrainWidth": false });
});

desendingBtn.addEventListener('click', (e) => sort(true));
ascendingBtn.addEventListener('click', (e) => sort(false));

function sort(makeDesending) {
    if ((isAscending ^ makeDesending)) return

    let tasks = taskList.children.length;
    for (let i = 1; i < tasks; i++) {
        let task = taskList.children[i];
        taskList.removeChild(task);
        taskList.prepend(task);
    }
    isAscending = !isAscending;
}

// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    let link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove" aria-hidden="true"></i>';
    // Append link to li
    li.appendChild(link);
    link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'edit-item secondary-content';
    link.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    (isAscending) ? taskList.appendChild(li): taskList.prepend(li);
}





// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 

    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    */
    document.querySelectorAll(".collection-item").forEach(element => {
        element.style.display = (element.textContent.includes(filter.value)) ? "list-item" : "none";
    });

}

// Remove Task function definition 
function modifyTask(e) {
    console.log(e);
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }
    } else if (e.target.parentElement.classList.contains('edit-item')){
        e.target.parentElement.previousSibling.previousSibling.data = prompt("Edit task name");
    }
}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}