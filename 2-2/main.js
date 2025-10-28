const interets = ["寝ること","食べること","だらけること"];
const specialties = ["影を取ること","ゾンビを作ること","寝ること"];
const greetings = ["ケーシシシ","俺を海賊王にならせろ","俺は、寝る"];
const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * interets.length);
    const index2 = Math.floor(Math.random() * specialties.length);
    const index3 = Math.floor(Math.random() *  greetings.length);
    const interet = interets[index1];
    const specialty= specialties[index2];
    const greeting = greetings[index3];
    const message =`
    俺の、名前は、${name}。
    最近はまっているのは、${interet}、
    特技は${specialty}。
    ${greeting};`
    const output = document.querySelector("#output");
    output.textContent = message;
});
