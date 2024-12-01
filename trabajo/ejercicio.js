const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]",
    "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|"
];

let caja1 = document.getElementById("loca")

let caja2 = document.getElementById("loca2")


let bot = document.getElementById("Botonn")
bot.addEventListener("click", function(){
    caja1.textContent = generarContraseña()
    caja2.textContent = generarContraseña(6)
} )

function generarContraseña(longitud=15){
    let pass =[]  
    for (let i=0; i < longitud; i++){
  
        pass.push(characters[Math.floor(Math.random()*characters.length)])
    }
    return pass.join("")
}
