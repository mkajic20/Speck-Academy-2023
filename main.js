window.addEventListener("load", () => {
    let techs = document.getElementById("technologies");
    
    let add = document.getElementById("add");
    let remove = document.getElementById("remove");
    let input = document.getElementById("input")

    add.addEventListener("click", addItem);

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    remove.addEventListener("click", () => {
        techs.innerHTML = "";
    });

    function addItem(){
        let value = input.value;
        input.value = "";

        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        let itemText = document.createElement("p");
        itemText.classList.add("item-text");
        itemText.innerText = value;

        itemDiv.appendChild(itemText);
        techs.appendChild(itemDiv);
    }
});
