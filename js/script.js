const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;
mysubmit.onclick = function() {
    age = mytext.value;
    age = Number(age);

    if (age >= 20) {
        resultElement.textContent = `you are able to drive👍`
    }
    else if (age == 0) {
        resultElement.textContent = `you are not born at baby!😊`
    }
    else if (age >= 100) {
        resultElement.textContent = `you are too old for this😒`
    }
    else if (age < 0) {
        resultElement.textContent = `user not found sorry!❤️`

    }
    else {
        resultElement.textContent = `you must be 18+ for this🤦`
    }
}

