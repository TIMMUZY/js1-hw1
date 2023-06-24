

let count = prompt('номер числа')
if (count > 10) {
    count = 10
}

for (let i = 0; i < count; i++) {
    document.write("<div class='col'></div>")
}