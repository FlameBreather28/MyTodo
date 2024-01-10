const userTodoAdd = document.querySelector(".userTodoDisplay");
const formButton = document.querySelector("#userTodoSubmitBtn");



formButton.addEventListener("click", (e) => {
  e.preventDefault()
    console.dir(e.target.previousElementSibling)
    if (e.target.id == "userTodoSubmitBtn") {
        if (e.target.previousElementSibling.value === "" ) {
            alert("Text box cannot be empty");
        } else {
            
            const divElement = document.createElement("div");
            divElement.setAttribute("class", "userTodoDisplayTextAndBtn");
            const pElement = document.createElement("p");
            const button = document.createElement("button");

            const buttonText = document.createTextNode("Completed");
            button.appendChild(buttonText);
            const value = e.target.previousElementSibling.value;
            const pdata = document.createTextNode(`${value}`);
            pElement.appendChild(pdata);
            divElement.append(pElement, button);
            userTodoAdd.append(divElement);
        }

    }
});



// new event listner for deleting the todo item
userTodoAdd.addEventListener("click", (e) => {
    if (e.target.localName == "button") {
        const currentElementToBeRemoved = e.target.parentElement;
        const userTodoDisplay = document.querySelector(".userTodoDisplay");
        console.log(userTodoDisplay);
        console.log(e.target.previousElementSibling.style)
        console.dir(e.target.previousElementSibling.style.textDecorationLine = "line-through");
        setTimeout(() => {
            userTodoDisplay.removeChild(currentElementToBeRemoved);
        }, 1500);

    }

})