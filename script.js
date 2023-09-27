
let op;
let temp;

function buttonClick(n) {
    document.querySelector("textarea").value = document.querySelector("textarea").value.concat(n)
}

function backSpace() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.slice(0, document.querySelector("textarea").value.length - 1)
}

function clear() {
    document.querySelector("textarea").value = ""
}

function addition() {
    op = "add"
    temp = document.querySelector("textarea").value
    document.querySelector("textarea").value = ""
}

function subtrction() {
    op = "sub"
    temp = document.querySelector("textarea").value
    document.querySelector("textarea").value = ""
}


function multiplication() {
    op = "mult"
    temp = document.querySelector("textarea").value
    document.querySelector("textarea").value = ""
}

function division() {
    op = "dev"
    temp = document.querySelector("textarea").value
    document.querySelector("textarea").value = ""
}

function equals() {
    switch (op) {
        case "mult": mult()
            break;
        case "add": add()
            break;
        case "sub": sub()
            break;
        case "dev": div()
            break;
    }
}

function mult() {
    document.querySelector("textarea").value = parseInt(temp) * parseInt(document.querySelector("textarea").value) 
}

function add() {
    document.querySelector("textarea").value = parseInt(temp) + parseInt(document.querySelector("textarea").value)
}

function sub() {
    document.querySelector("textarea").value = parseInt(temp) - parseInt(document.querySelector("textarea").value)
}

function div() {
    if (document.querySelector("textarea").value === "0") {
        document.querySelector("textarea").value = "Division by Zero not possible"
    } else {
        document.querySelector("textarea").value = parseInt(temp) / parseInt(document.querySelector("textarea").value)
    }
}