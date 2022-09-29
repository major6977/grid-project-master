// Using jQuery and JS

var currentColor = 0;
function switchColor1() {
  var colors = ["#35deff", "#694bff", "#f97aff", "#f1cfb1"];
  if (currentColor >= colors.length) currentColor = 0;

  $(".circle-1").css("background-color", colors[currentColor++]);
  setTimeout(function () {
    switchColor1();
  }, 1000);
}
switchColor1();

var currentColor = 0;
function switchColor2() {
  var colors = ["#35deff", "#694bff", "#f97aff", "#f1cfb1"];
  if (currentColor >= colors.length) currentColor = 0;

  $(".circle-2").css("background-color", colors[currentColor++]);

  setTimeout(function () {
    switchColor2();
  }, 2000);
}
switchColor2();

var currentColor = 0;
function switchColor3() {
  var colors = ["#35deff", "#694bff", "#f97aff", "#f1cfb1"];
  if (currentColor >= colors.length) currentColor = 0;

  $(".circle-3").css("background-color", colors[currentColor++]);
  setTimeout(function () {
    switchColor3();
  }, 1000);
}
switchColor3();

var currentColor = 0;
function switchColor4() {
  var colors = ["#35deff", "#694bff", "#f97aff", "#f1cfb1"];
  if (currentColor >= colors.length) currentColor = 0;
  $(".circle-4").css("background-color", colors[currentColor++]);
  setTimeout(function () {
    switchColor4();
  }, 2000);
}
switchColor4();

//  Flip Function to container-a

const card = document.getElementById("card");

card.addEventListener("click", flipCard);

function flipCard() {
  card.classList.toggle("flipCard");
}

//  Flip card3

const card3 = document.getElementById("card3");

card3.addEventListener("click", flipCard3);

function flipCard3() {
  card3.classList.toggle("flipCard");
}

//  Flip card4

const card4 = document.getElementById("card4");

card4.addEventListener("click", flipCard4);

function flipCard4() {
  card4.classList.toggle("flipCard");
}
