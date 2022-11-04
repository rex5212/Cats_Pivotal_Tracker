window.onload = choosePic;

var myPix = new Array(
  "imagem/foto1.jpg",
  "imagem/foto2.jpg",
  "imagem/foto3.jpg",
  "imagem/foto4.jpg"
);

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPix.length);
  document.getElementById("myPicture").src = myPix[randomNum];
}