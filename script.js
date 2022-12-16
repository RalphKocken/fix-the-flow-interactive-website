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
  }
}



/*
  
let dialog = document.querySelector(".dialogstekjeslijst-orchidee");
let openDialog = document.querySelector(".stekjes-meer-info-button");
let closeDialog = document.querySelector(".close-dialog-stekjes-button");


let eenvoudig = document.querySelectorAll(".eenvoudig");
let gemiddeld = document.querySelectorAll(".gemiddeld");
let gevorderd = document.querySelectorAll(".gevorderd");

// alle stekjes
let stekjesTotaal = document.querySelector(".stekjeslijst")
let eenvoudigButton = document.querySelector(".eenvoudigButton");
let gemiddeldButton = document.querySelector(".gemiddeldButton");
let gevorderdButton = document.querySelector(".gevorderdButton");
let laatalleszienButton = document.querySelector(".laatalleszienButton");
let stekjeaanmeldenconfirm = document.querySelector(".stekje-aanmelden-button");


// VOORBEELD VAN JUSTUS//

// easyPlants.forEach((plant) => {
//   plant.addEventListener("click", plantHandler);
// });

// function plantHandler (event) {
//   event.target.classlist.toggle('visible');
// }

// document.querySelectorAll(".eenvoudig").forEach((plant) => {
//   plant.addEventListener("click",  (event) => {
//     event.target.classlist.toggle('visible')
//   }
// }


// functie voor het filteren van de stekjes
function removeAll(){
  eenvoudig.forEach(element => {
    element.style.display = "none";
  });
  gemiddeld.forEach(element => {
    element.style.display = "none";
  });
  gevorderd.forEach(element => {
    element.style.display = "none";
  });
}

//functie voor het laten zien van alle stekjes
function laatalleszien(){
  eenvoudig.forEach(element => {
    element.style.display = "flex";
  });
  gemiddeld.forEach(element => {
    element.style.display = "flex";
  });
  gevorderd.forEach(element => {
    element.style.display = "flex";

    });
}

// eenvoudig knop
eenvoudigButton.addEventListener("click", eenvoudigShow);

function eenvoudigShow(){
  removeAll();
  eenvoudig.forEach(element => {
    element.style.display = "flex";
  });
}

//gemiddeld knop
gemiddeldButton.addEventListener("click", gemiddeldShow);

function gemiddeldShow(){
  removeAll();
  gemiddeld.forEach(element => {
    element.style.display = "flex";
  });
}

//gevorderd knop//
gevorderdButton.addEventListener("click", gevorderdShow);

function gevorderdShow(){
  removeAll();
  gevorderd.forEach(element => {
    element.style.display = "flex";
  });
}

//laatalleszien knop
laatalleszienButton.addEventListener("click", laatalleszienShow);
  function laatalleszienShow(){
    laatalleszien();
  }


  var meldJePlantAanButton = document.getElementById('header-article > button')
  var plaatjeAanmeldenDialog = document.getElementById('dialogstekjeaanmelden')
  var section = document.querySelector('.stekjeslijst')
  
  plaatjeAanmeldenDialog.addEventListener('submit', function() {
    var eenKloon = section.querySelector('.stekje').cloneNode(true)
    console.log(eenKloon)
    var ingevuldeNaam = document.querySelector('input[name="naampje"]')
    var geselecteerdeFoto = document.querySelector('input[name="foto-stekje"]')
  
    eenKloon.querySelector(".stekjes-meer-info-button").textContent = ingevuldeNaam.value
  
    eenKloon.querySelector('img').src = window.URL.createObjectURL(geselecteerdeFoto.files[0])
  
    plaatjeAanmeldenDialog.querySelector('form').reset()
  
    section.append(eenKloon)
  
    eenKloon.scrollIntoView()
  })

  */