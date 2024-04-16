let animals = [
    "fennec fox",
    "lobster",
    "frog",
    "crocodile",
    "dog",
    "monkey",
    "manta ray",
    "horse",
    "red panda",
    "conure",
    "lizard",
    "koala bear",
    "drop bear",
    "whale shark",
    "lion",
    "turtle",
    "otter"
];

function createAnimalList() {
    animals.forEach((animal) => {
        console.log("animal: " + animal);

        let newList = document.createElement("li")
        newList.textContent = animal;
        newList.id = animal;

        let removeItemButton = document.createElement("button");

        removeItemButton.onclick= () => removeAnimalFromList(animal);

        removeItemButton.textContent = "Remove animal";

        newList.appendChild(removeItemButton)
        
        let rootOlNode = document.querySelector("ol");
        rootOlNode.appendChild(newList);
    });
}

function removeAnimalFromList(targetAnimalId) {
    let targetListItem = document.getElementById(targetAnimalId);
    targetListItem.remove();
    let isAnimalInList = animals.includes(targetAnimalId);

    animals = animals.filter(animal => {
        if(targetAnimalId == animal){
            return false;
        } else {
            return true;
        }
    })
}

createAnimalList()