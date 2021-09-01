const frango = document.getElementById('frango');
const carne = document.getElementById('carne');
const coca = document.getElementById('coca');
const refresco = document.getElementById('refresco');
const pudim = document.getElementById('pudim');
const sorvete = document.getElementById('sorvete');
const enviar = document.getElementById('enviar');

let prato;
let bebida;
let sobremesa;

function selectedFrango() {
  frango.classList.toggle('selected')
  if (frango.classList.contains('selected')){
    carne.classList.remove('selected')
    prato = 'Frango'
  }
}

function selectedCarne() {
  carne.classList.toggle('selected')
  if (carne.classList.contains('selected')){
    frango.classList.remove('selected')
    prato = 'Carne'
  }
}

function selectedCoca() {
  coca.classList.toggle('selected')
  if (coca.classList.contains('selected')){
    refresco.classList.remove('selected')
    bebida = 'Coca'
  }
}

function selectedRefresco() {
  refresco.classList.toggle('selected')
  if (refresco.classList.contains('selected')){
    coca.classList.remove('selected')
    bebida = 'Refresco'
  }
}

function selectedPudim() {
  pudim.classList.toggle('selected')
  if (pudim.classList.contains('selected')){
    sorvete.classList.remove('selected')
    sobremesa = 'Pudim'
  }
}

function selectedSorvete() {
  sorvete.classList.toggle('selected')
  if (sorvete.classList.contains('selected')){
    pudim.classList.remove('selected')
    sobremesa = 'Sorvete'
  }
}

function mostrarPrato() {
  if (!prato && !bebida && !sobremesa){
    alert('Selecione ao menos um item para seu pedido')
    return
  }

  let pedido = `Olá, gostaria de pedir um box de:
  *Prato:* ${prato ? prato : 'Hoje vou passar'};
  *Bebida:* ${bebida ? bebida : 'Hoje vou passar'};
  *Sobremesa:* ${sobremesa ? sobremesa : 'Hoje vou passar'}`
  pedido = window.encodeURIComponent(pedido)
  window.open(`https://wa.me/+5551996038056?text=${pedido}`)
}

frango.addEventListener('click', selectedFrango)
carne.addEventListener('click', selectedCarne)
coca.addEventListener('click', selectedCoca)
refresco.addEventListener('click', selectedRefresco)
pudim.addEventListener('click', selectedPudim)
sorvete.addEventListener('click', selectedSorvete)

enviar.addEventListener('click', mostrarPrato)
