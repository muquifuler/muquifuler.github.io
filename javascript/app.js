const IMGS = [
    "./img/metamask.png",
    "./img/javascript.png",
    "./img/solidity.svg",
    "./img/ethereum.png",
    "./img/truffle.png",
    "./img/openzeppelin.png",
    "./img/chainlink.png",
    "./img/filecoin.png"
]

function loadImages(){
    for(let i=0; i<IMGS.length; i++){
        document.getElementById("img"+i).style = "background-image: url('"+IMGS[i]+"');";
    }
}

function goTech(tech){
    switch (tech){
        case 1: window.location.replace("./tech/javascript.html"); break;
        case 2: window.location.replace("./tech/solidity.html"); break; 
        case 3: window.location.replace("./tech/ethereum.html"); break; 
        case 4: window.location.replace("./tech/truffle.html"); break; 
        case 5: window.location.replace("./tech/openzeppelin.html"); break; 
        case 6: window.location.replace("./tech/chainlink.html"); break;
        case 7: window.location.replace("./tech/filecoin.html"); break;
            default: window.location.replace("./tech/metamask.html"); break;
    }
}

loadImages();