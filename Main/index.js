import { characterGenerator, gearGenerator } from "./js/generator.js";

//need to read the DOM a bit here

let statOutput = document.getElementById("statsOutput")
let gearOutput = document.getElementById('gearOutput')
let gearButton = document.getElementById('gearButton')
gearButton.onclick = function(){
    let gear = gearGenerator()
    let dFrag = document.createDocumentFragment()
    
    gear.forEach( x => {
        let li = document.createElement('li')
        li.textContent = x
        dFrag.appendChild(li)
    } )
    gearOutput.appendChild(dFrag)
    gearButton.disabled = true
    document.getElementById("statRoller").disabled = false
}

//console.log(document.getElementById("Agility"))

document.getElementById("classless").addEventListener("click", () => {
    document.getElementById("statSelector").hidden = false
})

document.getElementById("randomClass").addEventListener("click", () => {
    document.getElementById("statSelector").hidden = true
})

document.getElementById("selectClass").addEventListener("click", () => {
    document.getElementById("statSelector").hidden = true
})

//statRoller
document.getElementById("statRoller").addEventListener("click", () => {
     
    statOutput.innerHTML = ''
    let stats = characterGenerator()
    let statKeys = Object.keys(stats)
    let dFrag = document.createDocumentFragment()
    
    for (let c = 0; c < statKeys.length; c++) {
        let li = document.createElement('li')

        //li.textContent = 'test'
        li.textContent += statKeys[c] += stats[statKeys[c]]
        dFrag.appendChild(li)
    } 
    statOutput.appendChild(dFrag)
    document.getElementById("statRoller").disabled = true
    
})

//reset button, etc
document.getElementById("resetButton").addEventListener("click", () => {
    gearButton.disabled = false
    document.getElementById("statRoller").disabled = true   
    statOutput.innerHTML = ''
    gearOutput.innerHTML = ''
} )