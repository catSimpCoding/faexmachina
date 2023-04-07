import { diceRoller, tableRoller } from "./funcs.js";
import { corpKiller, playerClass, slasher } from "./classes.js";
import { attributeTable, cyberTable, weaponTable } from "./tables.js";
import { gearTable, gearTable2, gearTable3, armorTable, classTable } from "./tables.js";

export function gearGenerator() {
    return [ `${tableRoller(gearTable)}` , `${tableRoller(gearTable2)}` , `${tableRoller(gearTable3)}` ]
}


export function characterGenerator() {
   //Behöver skuld, startcreds



    if (document.getElementById("classless").checked == true) { // check for classless (dom.class)

        let PC = new playerClass()
        // document.getElementById('statSelector').getElementsByTagName('input') ger oss hela listan av knappar i statSelector, om .checked = true är knappen tryckt
        //Kika om någon försöker fuska och bestraffa personen lika brutalt som skoningslöst

        let cheats = 0
        let boxes = Array.from(document.getElementById('statSelector').getElementsByTagName('input'))
        for(let c = 0; c < boxes.length; c++) {
            if (boxes[c].checked) cheats += 1
        }
        if (cheats < 3) { 
            PC.agility = attributeTable[diceRoller(6,3,0, document.getElementById('Agility').checked)]
            PC.knowledge = attributeTable[diceRoller(6,3,0, document.getElementById('Knowledge').checked)]
            PC.presence = attributeTable[diceRoller(6,3,0, document.getElementById('Presence').checked)]
            PC.strength = attributeTable[diceRoller(6,3,0, document.getElementById('Strength').checked)]
            PC.toughness = attributeTable[diceRoller(6,3,0, document.getElementById('Toughness').checked)]
            PC.glitches = diceRoller(PC.glitches)
            PC.hp = diceRoller(PC.hp,1,PC.toughness)
            PC.wpn = tableRoller(weaponTable, PC.wpn)
            PC.arm = tableRoller(armorTable, PC.arm)
        }
        
        else {
            PC.agility = -4
            PC.knowledge = -4
            PC.presence = -4
            PC.strength = -4
            PC.toughness = -4
            PC.glitches = 0
            PC.hp = 1
            PC.wpn = 'Big book of cheats -d2. Cyberglued to hand'
            PC.arm = 'Filthy rags - +2DR to all social interactions'
 
        }

        if (PC.hp <= 0) {
            PC.hp = 1
        }
        
        return PC.present()
        
    }
    //all the classes can be in an array as follows = [new nanomancer(), new hacker()] etc
    // PC instance of corpKiller kan användas för att ge +1 på arm roll
    
    else {
        let PC = classSelector()
        return classGenerator(PC)
    }
    
    if (false) { //class


        PC.agility = attributeTable[diceRoller(6,3,PC.agility)]
        PC.knowledge = attributeTable[diceRoller(6,3,PC.knowledge)]
        PC.presence = attributeTable[diceRoller(6,3,PC.presence)]
        PC.strength = attributeTable[diceRoller(6,3,PC.strength)]
        PC.toughness = attributeTable[diceRoller(6,3,PC.toughness)]
        PC.glitches = diceRoller(PC.glitches)
        PC.hp = diceRoller(PC.hp,1,PC.toughness)
        PC.wpn = tableRoller(weaponTable, PC.wpn)
        PC.arm = tableRoller(armorTable, PC.arm)


    }

    if (document.getElementById("randomClass").checked == true) {  //random class
        let PC = classTable[diceRoller(3,1,-1)]
        console.log(PC)

        return classGenerator(PC)

        PC.agility = attributeTable[diceRoller(6,3,PC.agility)]
        PC.knowledge = attributeTable[diceRoller(6,3,PC.knowledge)]
        PC.presence = attributeTable[diceRoller(6,3,PC.presence)]
        PC.strength = attributeTable[diceRoller(6,3,PC.strength)]
        PC.toughness = attributeTable[diceRoller(6,3,PC.toughness)]
        PC.glitches = diceRoller(PC.glitches)
        PC.hp = diceRoller(PC.hp,1,PC.toughness)
        PC.wpn = tableRoller(weaponTable, PC.wpn)
        PC.arm = tableRoller(armorTable, PC.arm)
        if (PC instanceof corpKiller) {
            console.log('corp')
            PC.arm = armorTable[diceRoller(4,1,1)]
        }
        let ability = tableRoller(PC.abilites)
        let results = PC.present()
        return [results, ability] 
        
    }


}
//denna ska sedan in i ovan funktion
function classSelector() {


    if (document.getElementById("randomClass").checked == true) {
        return tableRoller(classTable)
    }
    else {
        //loop through classSelectorDIV and get the CHECKED one
        let boxes = Array.from(document.getElementById('classPicker').getElementsByTagName('input'))
        for(let c = 0; c < boxes.length; c++) {
            if (boxes[c].checked) return classTable[c]
        }
       
    }
}

function classGenerator(PC) {
    let special = false

    PC.agility = attributeTable[diceRoller(6,3,PC.agility)]
    PC.knowledge = attributeTable[diceRoller(6,3,PC.knowledge)]
    PC.presence = attributeTable[diceRoller(6,3,PC.presence)]
    PC.strength = attributeTable[diceRoller(6,3,PC.strength)]
    PC.toughness = attributeTable[diceRoller(6,3,PC.toughness)]
    PC.glitches = diceRoller(PC.glitches)
    PC.hp = diceRoller(PC.hp,1,PC.toughness)
    PC.wpn = tableRoller(weaponTable, PC.wpn)
    PC.arm = tableRoller(armorTable, PC.arm)
    
    if (PC instanceof corpKiller) {
        PC.arm = armorTable[diceRoller(4,1,1)]
    }
    if (PC instanceof slasher) {
        special = tableRoller[cyberTable, 12]
    }
    let ability = tableRoller(PC.abilites)
    return PC.present(ability, special)
    
}