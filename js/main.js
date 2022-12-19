
//magic in header
const overHeader = document.querySelector("#overheader");
function popHeading() {
    overHeader.style.color = "red";
    overHeader.innerHTML = "CHILLI FOR YOU?";
    
}
overHeader.addEventListener("mouseover",popHeading);

//how user info link to first message, then to second
const hitButton = document.querySelector(".btn-enter");

function getLetsgo() {
    let userName = document.querySelector("#username").value;
    let firstMessage = `${userName}, Welcome to Sensory Overload!`;
    let welcomeMsg = firstMessage.toUpperCase();
    document.querySelector("#message").innerHTML = welcomeMsg;
    document.querySelector(".hideandshow").style.display = "block";
    document.querySelector("#user-info").innerHTML = "";
    
}

hitButton.addEventListener("click",getLetsgo);


function inspireYou() {
    document.getElementById("getrecommendations").style.display = "none";
    fetch("https://api.goprogram.ai/inspiration")
    .then((response) => response.json())
    .then((data) => document.querySelector(".quote").innerHTML = data.quote);
}

let yesBtn = document.querySelector("#buttonY");
let noBtn = document.querySelector("#buttonN");
// let hideAndShow = document.querySelector("#tolerant-level");

function letItRoll() {
    // console.log("function is running");
    document.getElementById("getrecommendations").style.display = "block";
    document.getElementById("yes-msg").innerHTML = "Select a choice from below..";
    document.querySelector(".hideandshow").style.display = "none";

    
}

yesBtn.addEventListener("click", letItRoll);
noBtn.addEventListener("click", inspireYou);



// function removeMsg() {
//     document.querySelector(".welcome").innerHTML = "";
// }

class chilli {
    constructor(name, level, description){
        this.name = name;
        this.level = level;
        this.description = description;
    }
}

let chilliZero = new chilli('Jalapeno pepper', 'None', 'To pop your cherry, give Jalapeno pepper a go!');
let chilliBeginner = new chilli('Cayenne pepper', 'Beginner', 'Add some hotness with Cayenne pepper!');
let chilliIntermediate = new chilli('Birds eye chilli', 'Mid', 'Birds eye chilli will bring a little burn in your mouth!');
let chilliMid = new chilli('Habaneros', 'Mid', 'Try some Habaneros to kick start the party in your mouth!');
let chilliHardCore = new chilli('Bhut Jolokia Pepper (Ghost Pepper)', 'Hardcore', 'Hmmm...Now you are talking! Have a go at this delicious Bhut Jolokia Pepper (Ghost Pepper)!');
let chilliUltra = new chilli('Trinidad Moruga Scorpion', 'Ultra-Hardcore', 'WooHoo! Try Trinidad Moruga Scorpion at your own risk! Get ready some milk or a bucket..to beat the fire off your tongue!');

let buttons = document.querySelector(".btn");
let getInfo = document.querySelector(".getinfo");

function showChilliDetails() {
    // console.log("testing");
    getInfo.classList.toggle("getinfo");
    

    let chilliZeroClick = document.querySelector(".btn.none");
    let chilliBeginnerClick = document.querySelector(".btn.entry");
    let chilliIntermediateClick = document.querySelector(".btn.intermediate");
    let chilliMidClick = document.querySelector(".btn.mid");
    let chilliHardcoreClick = document.querySelector(".btn.hardcore");
    let chilliUltraClick = document.querySelector(".btn.ultra");

    chilliZeroClick.addEventListener("click", nextChilliZero);
    chilliBeginnerClick.addEventListener("click", nextchilliBeginner);
    chilliIntermediateClick.addEventListener("click", nextchilliIntermediate);
    chilliMidClick.addEventListener("click", nextchilliMid);
    chilliHardcoreClick.addEventListener("click", nextchilliHardcore);
    chilliUltraClick.addEventListener("click", nextchilliUltra);

    function nextChilliZero() {
        document.getElementById("chilli").innerHTML = chilliZero.name;
        document.getElementById("chilli-details").innerHTML = chilliZero.description;
    }

    function nextchilliBeginner() {
        document.getElementById("chilli").innerHTML = chilliBeginner.name;
        document.getElementById("chilli-details").innerHTML = chilliBeginner.description;
    }

    function nextchilliIntermediate() {
        document.getElementById("chilli").innerHTML = chilliIntermediate.name;
        document.getElementById("chilli-details").innerHTML = chilliIntermediate.description;
    }

    function nextchilliMid() {
        document.getElementById("chilli").innerHTML = chilliMid.name;
        document.getElementById("chilli-details").innerHTML = chilliMid.description;
    }

    function nextchilliHardcore() {
        document.getElementById("chilli").innerHTML = chilliHardCore.name;
        document.getElementById("chilli-details").innerHTML = chilliHardCore.description;
    }

    function nextchilliUltra() {
        document.getElementById("chilli").innerHTML = chilliUltra.name;
        document.getElementById("chilli-details").innerHTML = chilliUltra.description;
    }

}

buttons.addEventListener("click", showChilliDetails);

// function getToleraceLvl(value) {
//     if (value === "None") {
//         document.getElementById("answer").innerHTML = "To pop your cherry, give Jalapeno pepper a go!";
//     } else if (value === "Entry") {
//         document.getElementById("answer").innerHTML = "Add some hotness with Cayenne pepper!";
//     } else if (value === "Intermediate") {
//         document.getElementById("answer").innerHTML = "Bird's eye chilli will bring a little burn in your mouth";
//     } else if (value === "Mid") {
//     document.getElementById("answer").innerHTML = "Try some Habaneros to kick start the party in your mouth!";
//     } else if (value === "Hardcore") {
//         document.getElementById("answer").innerHTML = "Hmmm...Now you're talking! Have a go at this delicious Bhut Jolokia Pepper (Ghost Pepper)!";
//     } else {
//         document.getElementById("answer").innerHTML = "WooHoo! Try Trinidad Moruga Scorpion at your own risk! Get ready some milk or a bucket..to beat the fire off your tongue!";
//     }

//     document.querySelector("#answer").style.backgroundColor = "red";
//     document.querySelector("#answer").style.color = "white";
// }






