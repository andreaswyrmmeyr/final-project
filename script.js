function bigText () {
    document.getElementById('textSize').style.fontSize = "x-large";
}

function normText () {
    document.getElementById('textSize').style.fontSize = "medium";
}


function changeColor1 () {
    document.getElementById('list1').style.backgroundColor = "grey";
}

function changeColor2 () {
    document.getElementById('list2').style.backgroundColor = "green";
}

function changeColor3 () {
    document.getElementById('list3').style.backgroundColor = "blue";
}

function colorNorm () {
    document.getElementById('list1').style.backgroundColor = 'white';
    document.getElementById('list2').style.backgroundColor = 'white';
    document.getElementById('list3').style.backgroundColor = 'white';
}

async function rndFact() {
    let testHold = await fetch("https://api.adviceslip.com/advice").then(res => res.json()); 
    document.getElementById('advice').innerHTML = testHold.slip.advice;
    
}
rndFact();