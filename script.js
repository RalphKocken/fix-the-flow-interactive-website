//variables
let dialogSignUpPlant = document.querySelector("#dialogstekjeaanmelden");
let openDialogSignUpPlant = document.querySelector(".stekjeaanmeldenbutton");
let closeDialogSignUpPlant = document.querySelector(".close-dialog-button");
const simplePlants = document.querySelectorAll(".eenvoudig");
const moderatePlants = document.querySelectorAll(".gemiddeld");
const hardPlants = document.querySelectorAll(".gevorderd");
const filterButtons = document.querySelectorAll('.verzorgings-niveau-button');
let dialogStekjes = document.querySelectorAll('.dialogstekjeslijst');
const meerInfoButtons = document.querySelectorAll('.stekjes-meer-info-button');
const closePlantDialogButton = document.querySelectorAll(".close-dialog-stekjes-button");
const reservePlantButton = document.querySelector('.stekje-reserveren-button');
const reservePlantForm = document.querySelector('.stekje-reserveren-form')
const choosePlant = document.querySelector('#kies-plantje-button')
const orchidee = document.querySelector('.orchidee')

//eventListener

closeDialogSignUpPlant.addEventListener('click', closeDialog)
openDialogSignUpPlant.addEventListener('click', openDialog)
reservePlantButton.addEventListener('click', getPlantHandler)
choosePlant.addEventListener('click', choosePlantHandler)

for (const filterbutton of filterButtons) {
  filterbutton.addEventListener('click', showPlants);
}

meerInfoButtons.forEach(button =>{
  button.addEventListener('click', showPlantDialog)
})
 
closePlantDialogButton.forEach(button =>{
  button.addEventListener('click', closePlantDialog)
})

//functions
function openDialog(){
  dialogSignUpPlant.showModal()
}

function closeDialog(){
  dialogSignUpPlant.close()
}


function closePlantDialog(){
  dialogStekjes.forEach(dialog =>{
    if (dialog.open){
      dialog.classList.add('hideDialog')
      dialog.addEventListener('animationend', () =>{
        dialog.close()
        dialog.classList.remove('hideDialog')    
      },{once : true});
    }
  })
  reservePlantForm.classList.remove('stekje-reserveren-form-show')
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
  
  function showPlantDialog(event){
    // meerInfoButtons.forEach(button => {
      const dialog = document.getElementById(event.target.dataset.id)
      // console.log(button);
      if (dialog && dialog.open == true) {
        dialog.close()
      } else {
        dialog.showModal()
      }
      reservePlantButton.classList.remove('stekje-reserveren-button-hidden')
  }

  function getPlantHandler(){
    reservePlantForm.classList.add('stekje-reserveren-form-show')
    reservePlantButton.classList.add('stekje-reserveren-button-hidden')
  }

  function choosePlantHandler(){
    orchidee.remove('orchidee')
  }


// EXPERIMENT // CODE VAN KRIJN // NOG GOED DOORLEZEN

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
