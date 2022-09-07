const boxes = document.querySelector(".boxes");
const showImage = document.querySelector(".error");

const hint =
  "HINT: All Doctors Especially Doctor Oshuwa Take Uncivilized Nurses...";
const ps = "Let your input be Capitalized e.g Remilekun.";
const query = "What do i call you? ";

const prompted = prompt(`${query}\n \n \n ${hint} \n \n ${ps}`).trim();

if (prompted == "Adedotun" && prompted !== "") {
  body.style.display = "block";
} else {

  removeClass();
}

function removeClass() {
   
    boxes.style.display = 'none';
    showImage.style.display = 'block'

}


