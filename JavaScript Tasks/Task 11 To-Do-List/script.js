const inputButton = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function addTask() {
    //This condition will check if user didn't give any input it will display an alert dialog box showing a message that "You must write something!"
    if (inputButton.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputButton.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        listContainer.appendChild(li)
    }
    inputButton.value = '';
    saveData();
}

//This Function actually performing a condition check here, firstly it generate an event "click-event", if this event occurs then it will execute the body of this eventlistener. Inside this eventListener we will check that if user clicks on the specific element that we have targeted in this case span element is targeted here, so it will remove the parent element, which is "li". 
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

//This Function will save the data(In this case task's) in the local storage of the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//This Function will retrieve and display the data within the browser
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

//Here this function will be called
showData();