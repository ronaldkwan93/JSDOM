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
        
        let rootOlNode = document.querySelector("ol");
        rootOlNode.appendChild(newList);
    });
}

createAnimalList()