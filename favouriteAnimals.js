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

    let rootOlNode = document.querySelector("ol");
    rootOlNode.innerHTML = "";

    animals.forEach((animal) => {
        console.log("animal: " + animal);

        let newList = document.createElement("li")
        newList.textContent = animal;
        newList.id = animal;

        let removeItemButton = document.createElement("button");

        removeItemButton.onclick= () => removeAnimalFromList(animal);

        removeItemButton.textContent = "Remove animal";

        newList.appendChild(removeItemButton)
        
        
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


function addAnimalToList(event, targetInputId){
    event.preventDefault();

    let targetInputField = document.getElementById(targetInputId);

    let foundInputFieldValue = targetInputField.value;
    console.log("Input field value to add to list is: " + foundInputFieldValue)

    animals.push(foundInputFieldValue);

    createAnimalList();
}

let fakeFormButton = document.getElementById("fakeform-submit")
fakeFormButton.addEventListener("click", (event) => {addAnimalToList(event, "fakeform-addAnimal")})

let realFormButton = document.getElementById("realform-submit")
realFormButton.addEventListener("click", (event) => {addAnimalToList(event, "realform-addAnimal")})

createAnimalList("dark")