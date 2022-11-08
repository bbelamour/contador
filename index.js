/*let count = 0;

count =+ 1;

console.log(count)

*/

let saveElement = document.getElementById("save-el")
let countElement = document.getElementById('contador')


let count = 0

function increment() {
    
    count += 1;
    countElement.innerText = count
 

}


function save() {
   
    let ingresados = count + " - "

    saveElement.textContent += ingresados
    count = 0
    countElement.innerText = count
    

 

}







