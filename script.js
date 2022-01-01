const memeImage = 'meme-image';
const memeImageContainer = 'meme-image-container';

function insereMemeText() {
  const memeText = document.getElementById('text-input');
  document.getElementById('meme-text').innerText = memeText.value;
}

const textoMeme = document.getElementById('text-input');
textoMeme.addEventListener('keyup', insereMemeText);

function insereImgMeme(evento) {
  const srcMeme = evento.target.src;
  document.getElementById(memeImage).src = srcMeme;
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

function estilizaBorda(evento) {
  const borda = evento.target.id;
  const remClasse = document.getElementById(memeImageContainer).className;
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
    document.getElementById(memeImageContainer).removeAttribute('class', remClasse);
    break;
  }
}

const btFire = document.getElementById('fire');
btFire.addEventListener('click', estilizaBorda);

const btWater = document.getElementById('water');
btWater.addEventListener('click', estilizaBorda);

const btEarth = document.getElementById('earth');
btEarth.addEventListener('click', estilizaBorda);

const btReset = document.getElementById('reset');
btReset.addEventListener('click', estilizaBorda);
