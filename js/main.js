
//magic in header
const clicker = document.getElementById("clicker");
function popHeading() {
    clicker.style.color = "red";
    clicker.innerHTML = "CHILLI FOR YOU?";
    
}
clicker.addEventListener("mouseover",popHeading);

//how user info link to first message, then to second
const btnEnter = document.querySelector(".btn-enter");
let userName = "name";
let firstMessage = `Hi ${userName}, are you a chilli lover?`;
function getLetsgo() {
    btnEnter.style.backgroundColor = "red";
    btnEnter.style.color = "white";
   document.querySelector("#message").innerHTML = firstMessage;
  
}
setTimeout(firstMessage,2000);
btnEnter.addEventListener("click",getLetsgo);


function removeMsg() {
    document.getElementById("message").innerHTML = "";
}

function getToleraceLvl(value) {
    if (value === "None") {
        document.getElementById("answer").innerHTML = "Jalapeno pepper to pop your cherry!";
    } else if (value === "Entry") {
        document.getElementById("answer").innerHTML = "Add some spicy with Cayenne pepper!";
    } else if (value === "Intermediate") {
        document.getElementById("answer").innerHTML = "Bird's eye chilli to bring a little burn in your mouth";
    } else if (value === "Mid") {
    document.getElementById("answer").innerHTML = "Try some Habaneros to kick start the party in your mouth!";
    } else if (value === "Hardcore") {
        document.getElementById("answer").innerHTML = "Hmmm...Now you're talking! Have a go at this delicious Bhut Jolokia Pepper (Ghost Pepper)!";
    } else {
        document.getElementById("answer").innerHTML = "YOU ARE MAD! Try Trinidad Moruga Scorpion at your own risk! You might need a stick to beat the fire off your tongue!";
    }
}




