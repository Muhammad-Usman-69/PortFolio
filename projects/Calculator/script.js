let screen = document.getElementById("screen");
let digits = document.querySelectorAll(".digit");
let operations = document.querySelectorAll(".operation");

screen.value = "";

digits.forEach(function(digit) {
    digit.addEventListener('click', function() {
        screen.value += digit.value;
    })
});

operations.forEach(function(operator) {
    operator.addEventListener('click', () => {
        screen.value += operator.value;
    })
})

function sin() {
    screen.value = Math.sin(screen.value * Math.PI / 180).toFixed(4);
}

function cos() {
    screen.value = Math.cos(screen.value * Math.PI / 180).toFixed(4);
}

function tan() {
    screen.value = Math.tan(screen.value * Math.PI / 180).toFixed(4);
}

function del() {
    let newInput = screen.value;
    newInput = newInput.slice(0,-1);
    screen.value = newInput;
}

function clr() {
    screen.value = "";
}

function sq() {
    let newInput = screen.value;
    screen.value = Math.pow(newInput, 2);
}

function sqrt() {
    let newInput = screen.value;
    screen.value = Math.sqrt(newInput, 2);
}

function evl() {
    screen.value = eval(screen.value);
}