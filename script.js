//variables
let dialogSignUpPlant = document.querySelector("#dialogstekjeaanmelden");
let openDialogSignUpPlant = document.querySelector(".stekjeaanmeldenbutton");
let closeDialogSignUpPlant = document.querySelector(".close-dialog-button");
const simplePlants = document.querySelectorAll(".eenvoudig");
const moderatePlants = document.querySelectorAll(".gemiddeld");
const hardPlants = document.querySelectorAll(".gevorderd");
const filterButtons = document.querySelectorAll('.verzorgings-niveau-button');
const dialogStekjes = document.querySelectorAll('.dialogstekjeslijst');
const meerInfoButtons = document.querySelectorAll('.stekjes-meer-info-button');
console.log(meerInfoButtons)
console.log(dialogStekjes)

//eventListener

openDialogSignUpPlant.addEventListener("click", openDialog);
closeDialogSignUpPlant.addEventListener("click", closeDialog);

for (const filterbutton of filterButtons) {
  filterbutton.addEventListener('click', showPlants);
}

for(const meerInfoButton of meerInfoButtons){
  meerInfoButton.addEventListener('click', showDialog)
}


//functions

function openDialog(){
  dialogSignUpPlant.showModal();  
}

function closeDialog(){
  dialogSignUpPlant.close();
}

function showPlants() {
  for (const eenvoudig of simplePlants){
    if (this.dataset.eenvoudig == 'on') {
      eenvoudig.classList.remove("plant-no-display")
    } 
    else {
      eenvoudig.classList.add("plant-no-display")
    }
  }

  for (const gemiddeld of moderatePlants){
    if (this.dataset.gemiddeld == 'on') {
      gemiddeld.classList.remove("plant-no-display")
    }
    else {
      gemiddeld.classList.add("plant-no-display")
    }
  }

  for (const gevorderd of hardPlants){
    if (this.dataset.gevorderd == 'on'){
      gevorderd.classList.remove("plant-no-display")
    }
    else{
      gevorderd.classList.add("plant-no-display")
    }
  }
}

function showDialog(){
  for(const dialogorchidee of dialogStekjes){
    if(this.dataset.orchidee == 'on'){
      dialogorchidee.showModal()
    }
    else(
      dialogorchidee.close()
    )
  }}

