// constantes da id principais
const memeImage = 'meme-image';
const memeImageContainer = 'meme-image-container';

// inserir o texto sobre a imagem
function insereMemeText() {
  const memeText = document.getElementById('text-input');
  document.getElementById('meme-text').innerText = memeText.value;
}

const textoMeme = document.getElementById('text-input');
textoMeme.addEventListener('keyup', insereMemeText);

// Insere imagens pré-definidas
function insereImgMeme(evento) {
  const srcMeme = evento.target.src;
  document.getElementById(memeImage).setAttribute('src', `${srcMeme}`);
}

const imgMemes = document.querySelectorAll('img');
imgMemes.forEach((img) => (img.addEventListener('click', insereImgMeme)));

const memeInsert = document.getElementById('meme-insert');
memeInsert.onchange = function mInsert() {
  const arqUser = new FileReader();

  arqUser.onload = function arqU(e) {
    console.log(e.target.result);
    document.getElementById(memeImage).src = e.target.result;
  };
  arqUser.readAsDataURL(this.files[0]);
};

function estilizaBorda(borda) {
  const remClasse = document.getElementById(memeImageContainer).className;
  document.getElementById(memeImageContainer).removeAttribute('class', remClasse);
  console.log(borda);
  switch (borda) {
  case 'fire':
    document.getElementById(memeImageContainer).setAttribute('class', 'fire');
    break;
  case 'water':
    document.getElementById(memeImageContainer).setAttribute('class', 'water');
    break;
  case 'earth':
    document.getElementById(memeImageContainer).setAttribute('class', 'earth');
    break;
  default:
  }
}

function defElemento(evento) {
  const ele = evento.target.id;
  console.log(ele.slice(0, 5));
  console.log(ele.slice(5, ele.lenght));
  if (ele.slice(0, 5) === 'icon-') {
    estilizaBorda(ele.slice(5, ele.lenght));
    return;
  }
  estilizaBorda(ele);
}

const btFire = document.getElementById('fire');
btFire.addEventListener('click', defElemento);

const btWater = document.getElementById('water');
btWater.addEventListener('click', defElemento);

const btEarth = document.getElementById('earth');
btEarth.addEventListener('click', defElemento);

const btReset = document.getElementById('reset');
btReset.addEventListener('click', defElemento);
