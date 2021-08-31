const frango = document.getElementById('frango');
const carne = document.getElementById('carne');
const coca = document.getElementById('coca');
const refresco = document.getElementById('refresco');
const pudim = document.getElementById('pudim');
const sorvete = document.getElementById('sorvete');

function selectedFrango() {
  frango.classList.toggle('selected')
  if (frango.classList.contains('selected')){
    carne.classList.remove('selected')
  }
}

function selectedCarne() {
  carne.classList.toggle('selected')
  if (carne.classList.contains('selected')){
    frango.classList.remove('selected')
  }
}

function selectedCoca() {
  coca.classList.toggle('selected')
  if (coca.classList.contains('selected')){
    refresco.classList.remove('selected')
  }
}

function selectedRefresco() {
  refresco.classList.toggle('selected')
  if (refresco.classList.contains('selected')){
    coca.classList.remove('selected')
  }
}

function selectedPudim() {
  pudim.classList.toggle('selected')
  if (pudim.classList.contains('selected')){
    sorvete.classList.remove('selected')
  }
}

function selectedSorvete() {
  sorvete.classList.toggle('selected')
  if (sorvete.classList.contains('selected')){
    pudim.classList.remove('selected')
  }
}


frango.addEventListener('click', selectedFrango)
carne.addEventListener('click', selectedCarne)
coca.addEventListener('click', selectedCoca)
refresco.addEventListener('click', selectedRefresco)
pudim.addEventListener('click', selectedPudim)
sorvete.addEventListener('click', selectedSorvete)