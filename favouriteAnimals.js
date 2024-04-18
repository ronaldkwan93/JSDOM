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
    
    targetInputField.value = "";
    
    createAnimalList();
}

let fakeFormButton = document.getElementById("fakeform-submit")
fakeFormButton.addEventListener("click", (event) => {addAnimalToList(event, "fakeform-addAnimal")})

let realFormButton = document.getElementById("realform-submit")
realFormButton.addEventListener("click", (event) => {addAnimalToList(event, "realform-addAnimal")})


function inputHelperReveal(targetElementId) {
    let hintElement = document.getElementById(targetElementId);
    hintElement.style.display = "inherit";
}

function inputHelperHide(targetElementId) {
    let hintElement = document.getElementById(targetElementId);
    hintElement.style.display = "none";
}

let realFormInput = document.getElementById("realform-addAnimal")
realFormInput.addEventListener("focusin", () => {inputHelperReveal("realform-hint")})
realFormInput.addEventListener("focusout", () => {inputHelperHide("realform-hint")})
inputHelperHide("realform-hint");

let fakeFormInput = document.getElementById("fakeform-addAnimal")
realFormInput.addEventListener("focusin", () => {inputHelperReveal("fakeform-hint")})
realFormInput.addEventListener("focusout", () => {inputHelperHide("fakeform-hint")})
inputHelperHide("fakeform-hint");

createAnimalList("dark")