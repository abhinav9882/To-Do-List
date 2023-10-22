const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Enter the task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.onclick = function() {
            let li = this.parentElement;
            listContainer.removeChild(li);
        }

        li.onclick = function() {
            this.classList.toggle('checked');
        }
    }

    inputBox.value = "";
}
