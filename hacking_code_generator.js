
let characters = "ABCDEF";
let isPaused = false; 
let interval = null;
let numberOfCalls = 0;

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

function generateRandomAlphabet(chars) {
    var randomIndex = Math.floor(Math.random() * 6);
    return chars[randomIndex];
}

function generateSpace() {
    return "\xa0\xa0";
}

function newLine() {
    return "<br>";
}

function codeCombinations(numberOfCalls) {
    let randomPercent = Math.random();
    
    if(numberOfCalls % 3 === 0) {
        if(randomPercent > 0 && randomPercent <= 0.15) {
            return generateSpace();
        } 
        else if(randomPercent > 0.15 && randomPercent <= 0.52) {
            return generateRandomNumber();
        }
        else if (randomPercent > 0.52 && randomPercent < 0.57) {
            return newLine();
        }
        else {
            return generateRandomAlphabet(characters);
        }
    }
    else if(numberOfCalls % 6 === 0 || numberOfCalls % 7 === 0) {
        if(randomPercent > 0 && randomPercent <= 0.80) {
            return generateSpace();
        }
    }
    else {
        if(randomPercent > 0 && randomPercent <= 0.55) {
            return generateRandomNumber();
        } 
        else if(randomPercent > 0.55 && randomPercent <= 0.95) {
            return generateRandomAlphabet(characters);
        } 
        else {
            return generateSpace();
        }
    }
}

function generateCode() {
    $(".text").append( codeCombinations(numberOfCalls++) );
}

function switchFunction() {
    clearInterval(interval);

    if( isPaused == false ) { 
        $(".stopRun-btn").text("STOP OPERATION");
        interval = setInterval(generateCode, 15);
        isPaused = true;
    }
    else if( isPaused ) { 
        $(".stopRun-btn").text("RESUME OPERATION");
        isPaused = false; 
    }
}


