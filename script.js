function buttonClick(n) {
    document.querySelector("textarea").value = document.querySelector("textarea").value.concat(n)
}

function backSpace() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.slice(0, document.querySelector("textarea").value.length - 1)
}