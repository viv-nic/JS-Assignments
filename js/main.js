let header = document.querySelector("h1");
function greetingMsg() {

    header.style.textTransform.toUpperCase;
    header.style.color = "red";
    header.style.fontSize = "4em";
}

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
    } else (value === "Ultra-hardcore") {
        document.getElementById("answer").innerHTML = "YOU ARE MAD! Try Trinidad Moruga Scorpion at your own risk! You might need a stick to beat the fire off your tongue!";
    }
}

console.log("Testing");
console.log(45);