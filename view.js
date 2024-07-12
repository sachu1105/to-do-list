const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
const addTask = () => {
    if(inputBox.value === '') {
        alert("You must write something!"); // Alert if input is empty
    } else {
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = inputBox.value; // Set the list item's text to the input value
        listContainer.appendChild(li); // Add the list item to the list container

        let span = document.createElement("span"); // Create a span element for the delete button
        span.innerHTML = "\u00d7"; // Set the span's content to the multiplication sign (×)
        li.appendChild(span); // Add the span to the list item
    }
    inputBox.value = ""; // Clear the input box after adding the task
    saveData(); // Save the updated list to local storage
}

// Event listener for handling task completion and deletion
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked'); // Toggle 'checked' class on list item for marking task as complete
        saveData(); // Save the updated list to local storage
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the list item when the delete button is clicked
        saveData(); // Save the updated list to local storage
    }
});

// Function to save the list data to local storage
let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML); // Store the current list's HTML in local storage
}

// Function to display the saved tasks from local storage
let showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data"); // Retrieve the stored list's HTML from local storage and display it
}
showTask(); // Display the tasks when the page loads
