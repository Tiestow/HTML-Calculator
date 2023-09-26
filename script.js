
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

function multiplication() {
    op = "mult"
    temp = document.querySelector("textarea").value
    document.querySelector("textarea").value = ""
}

function equals() {
    switch (op) {
        case "mult": mult()
            break;
        case "add":
            break;
        case "sub":
            break;
        case "dev":
            break;
    }
}

function mult() {
    document.querySelector("textarea").value = parseInt(temp * document.querySelector("textarea").value, 10)
}