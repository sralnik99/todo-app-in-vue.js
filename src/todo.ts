const textBox = document.getElementById("addTodo");

export function onClick() {
    console.log("Clicked!")

    if (textBox?.value === "") {
        console.log(textBox?.value); 
        alert("Text is empty!!!")
    } else {
       NotEmpty()
       textBox.value = ""
    }
}

function NotEmpty() {
    console.log(textBox?.value);
    
    let textDiv = document.getElementById("textDiv")

    let newElement = document.createElement("p");
    newElement.textContent = textBox?.value || "";
    newElement.classList.add("newElement")

    textDiv?.appendChild(newElement)

    let Button = document.createElement("button");
    Button.textContent = "Delete";
    Button.classList.add("DeleteButton")
    Button.addEventListener("click", function() {
        textDiv?.removeChild(newElement);
        document.body.removeChild(Button);
    });
    document.body.appendChild(Button);
}